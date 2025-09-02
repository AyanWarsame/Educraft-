// Copyright (c) 2025, Ayan Mohamed Warsame and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Registration", {
// 	refresh(frm) {

// 	},
// });

frappe.ui.form.on('Registration', {
    role: function(frm) {
        if (frm.doc.role === "Student") {
            frm.set_value("naming_series", "STU.");
        }
        else if (frm.doc.role === "Teacher") {
            frm.set_value("naming_series", "TEA.");
        }
        else if (frm.doc.role === "Admin") {
            frm.set_value("naming_series", "ADM.");
        }
    }
});



