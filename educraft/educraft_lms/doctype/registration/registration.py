import frappe
from frappe.model.document import Document
from frappe import _
import re
from datetime import datetime

class Registration(Document):
    pass


@frappe.whitelist(allow_guest=True)
def create_registration(**kwargs):
    try:
        # ✅ 1. Validate all required fields
        required_fields = [
            "first_name", "last_name", "email", "password",
            "confirm_password", "role", "phone_number",
            "date_of_birth", "gender"
        ]

        for field in required_fields:
            if not kwargs.get(field):
                frappe.throw(_("Field {0} is required").format(field.replace("_", " ").title()))

        # ✅ 2. Validate password match
        if kwargs.get("password") != kwargs.get("confirm_password"):
            frappe.throw(_("Password and Confirm Password must match"))

        # ✅ 3. Validate email format
        email = kwargs.get("email")
        if not re.match(r"[^@]+@[^@]+\.[^@]+", email):
            frappe.throw(_("Please enter a valid email address"))

        # ✅ 4. Validate phone number format (E.164 standard)
        phone_number = kwargs.get("phone_number")
        if not re.match(r"^\+?[1-9]\d{1,14}$", phone_number):
            frappe.throw(_("Please enter a valid phone number"))

        # ✅ 5. Validate date of birth (not in the future)
        date_of_birth = kwargs.get("date_of_birth")
        if datetime.strptime(date_of_birth, "%Y-%m-%d").date() > datetime.now().date():
            frappe.throw(_("Date of birth cannot be in the future"))

        # ✅ 6. Validate allowed roles (no self-admin)
        allowed_roles = ["Student", "Teacher"]
        role = kwargs.get("role")
        if role not in allowed_roles:
            frappe.throw(_("You can only register as: {0}").format(", ".join(allowed_roles)))

        # ✅ 7. Prevent duplicate email
        if frappe.db.exists("User", email):
            frappe.throw(_("User with email {0} already exists").format(email))

        # ✅ 8. Naming series based on role
        role_prefix_map = {
            "Student": "STU",
            "Teacher": "TEA"
        }
        naming_series = f"{role_prefix_map.get(role, 'REG')}.###"

        # ✅ 9. Create User
        user = frappe.new_doc("User")
        user.email = email
        user.first_name = kwargs.get("first_name")
        user.last_name = kwargs.get("last_name")
        user.enabled = 1
        user.send_welcome_email = 0
        user.new_password = kwargs.get("password")

        # Assign role
        user.append("roles", {"role": role})
        user.insert(ignore_permissions=True)

        # ✅ 10. Create Registration record
        reg_doc = frappe.get_doc({
            "doctype": "Registration",
            "first_name": kwargs.get("first_name"),
            "last_name": kwargs.get("last_name"),
            "email": email,
            "password": kwargs.get("password"),          # stored encrypted
            "confirm_password": kwargs.get("confirm_password"),  # stored encrypted
            "phone_number": kwargs.get("phone_number"),
            "date_of_birth": kwargs.get("date_of_birth"),
            "gender": kwargs.get("gender"),
            "role": role,
            "user": email,
            "naming_series": naming_series
        })

        reg_doc.insert(ignore_permissions=True)
        frappe.db.commit()

        return {
            "message": "Registration successful",
            "name": reg_doc.name,
            "user": email,
            "role": role
        }

    except frappe.exceptions.ValidationError as e:
        frappe.db.rollback()
        frappe.log_error(frappe.get_traceback(), "Registration Validation Failed")
        return {"error": str(e)}
    except Exception:
        frappe.db.rollback()
        frappe.log_error(frappe.get_traceback(), "Registration Failed")
        return {"error": "Registration failed. Please try again later."}
