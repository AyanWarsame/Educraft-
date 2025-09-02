import * as z from "zod";

export const roleSchema = z.enum(["admin", "student", "teacher"] as const).refine(
  (val) => ["admin", "student", "teacher"].includes(val),
  {
    message: "Please select a valid role",
  }
);

export const registrationSchema = z.object({
  firstName: z.string()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name must be less than 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "First name can only contain letters and spaces"),
  
  lastName: z.string()
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name must be less than 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "Last name can only contain letters and spaces"),
  
  email: z.string()
    .email("Please enter a valid email address")
    .min(1, "Email is required"),
  
  password: z.string()
    .min(8, "Password must be at least 8 characters")
    .max(100, "Password must be less than 100 characters")
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/, 
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"),
  
  confirmPassword: z.string()
    .min(1, "Please confirm your password"),
  
  role: roleSchema,

  gender: z
  .enum(["male", "female", "other", "prefer-not-to-say"] as const)
  .describe("Please select your gender"),
  
  
  phoneNumber: z.string()
    .regex(/^\+?[\d\s-()]+$/, "Please enter a valid phone number")
    .min(10, "Phone number must be at least 10 digits")
    .optional()
    .or(z.literal("")),
  
  dateOfBirth: z.string()
    .min(1, "Date of birth is required")
    .refine((date) => {
      const birthDate = new Date(date);
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();
      return age >= 13 && age <= 120;
    }, "You must be between 13 and 120 years old"),
  
  agreeToTerms: z.boolean()
    .refine((val) => val === true, "You must agree to the terms and conditions"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});

export const loginSchema = z.object({
  email: z.string()
    .email("Please enter a valid email address")
    .min(1, "Email is required"),
  
  password: z.string()
    .min(1, "Password is required"),
  
  rememberMe: z.boolean().optional(),
});

export const contactSchema = z.object({
  name: z.string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters")
    .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces"),
  
  email: z.string()
    .email("Please enter a valid email address")
    .min(1, "Email is required"),
  
  subject: z.string()
    .min(5, "Subject must be at least 5 characters")
    .max(200, "Subject must be less than 200 characters"),
  
  message: z.string()
    .min(20, "Message must be at least 20 characters")
    .max(2000, "Message must be less than 2000 characters"),
  
  phoneNumber: z.string()
    .regex(/^\+?[\d\s-()]+$/, "Please enter a valid phone number")
    .min(10, "Phone number must be at least 10 digits")
    .optional()
    .or(z.literal("")),
  
  urgency: z
    .enum(["low", "medium", "high"] as const)
    .describe("Please select urgency level"),
});

export const personalDetailsSchema = z.object({
 institution: z.string().min(1, "Institution is required"),
  degree: z.string().min(1, "Degree is required"),
  fieldOfStudy: z.string().min(1, "Field of study is required"),
  graduationYear: z.string().min(1, "Graduation year is required"),
  gpa: z.string().optional(),
  
  address: z.object({
    street: z.string()
      .min(5, "Street address must be at least 5 characters")
      .max(200, "Street address must be less than 200 characters"),
    
    city: z.string()
      .min(2, "City must be at least 2 characters")
      .max(100, "City must be less than 100 characters")
      .regex(/^[a-zA-Z\s]+$/, "City can only contain letters and spaces"),
    
    state: z.string()
      .min(2, "State must be at least 2 characters")
      .max(100, "State must be less than 100 characters"),
    
    zipCode: z.string()
      .regex(/^\d{5}(-\d{4})?$/, "Please enter a valid ZIP code (e.g., 12345 or 12345-6789)"),
    
    country: z.string()
      .min(2, "Country must be at least 2 characters")
      .max(100, "Country must be less than 100 characters"),
  }),
  
  emergencyContact: z.object({
    name: z.string()
      .min(2, "Emergency contact name must be at least 2 characters")
      .max(100, "Emergency contact name must be less than 100 characters")
      .regex(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces"),
    
    relationship: z.string()
      .min(2, "Relationship must be at least 2 characters")
      .max(50, "Relationship must be less than 50 characters"),
    
    phoneNumber: z.string()
      .regex(/^\+?[\d\s-()]+$/, "Please enter a valid phone number")
      .min(10, "Phone number must be at least 10 digits"),
  }),
  
  bio: z.string()
    .max(500, "Bio must be less than 500 characters")
    .optional()
    .or(z.literal("")),
});

export type RegistrationFormData = z.infer<typeof registrationSchema>;
export type LoginFormData = z.infer<typeof loginSchema>;
export type ContactFormData = z.infer<typeof contactSchema>;
export type PersonalDetailsFormData = z.infer<typeof personalDetailsSchema>;