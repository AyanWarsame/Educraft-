import { useForm } from "react-hook-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "../../components/ui/select";
import Navbar from "../components/Navbar";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { User, Eye, EyeOff } from "lucide-react";
import { Label } from "../../components/ui/label";


type RegistrationForm = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  confirm_password: string;
  role: "Student" | "Teacher" ;
  phone_number: string;
  date_of_birth: string;
  gender: "Male" | "Female" | "Other";
};

export default function RegistrationForm() {
  const { 
    register, 
    handleSubmit, 
    setValue, 
    watch, 
    formState: { errors },
    trigger
  } = useForm<RegistrationForm>();
  
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const password = watch("password"); 

  const handleSelectChange = (field: keyof RegistrationForm, value: string) => {
    setValue(field, value as any);
    trigger(field);
  };

  const onSubmit = async (data: RegistrationForm) => {
    setIsSubmitting(true);
    setApiError("");

    try {
      const response = await fetch(
        "/api/method/educraft.educraft_lms.doctype.registration.registration.create_registration",
        {
          method: "POST",
          headers: { 
            "Content-Type": "application/json",
            "X-Frappe-CSRF-Token": (window as any).csrf_token || ""
          },
          body: JSON.stringify(data),
          credentials: "include"
        }
      );

      const result = await response.json();

      if (response.ok && result.message) {
        navigate(`/PersonalDetailsForm?role=${data.role}`);
      } else {
        setApiError(result.error || "Registration failed");
      }
    } catch (error) {
      console.error("Registration failed:", error);
      setApiError("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-blue-100 p-4 mt-16">
        <Card className="max-w-lg mx-auto mt-10 shadow-xl rounded-xl">
          <CardHeader className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
              <User className="w-8 h-8 text-indigoDeep" />
            </div>
            <CardTitle className="text-3xl font-extrabold tracking-tight text-gray-900">
              Create Your Account
            </CardTitle>
            <CardDescription className="text-base text-gray-600">
              Join EduCraft to start your learning journey
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6 p-6">
            {apiError && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
                {apiError}
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                {/* First Name */}
                <div className="space-y-2">
                  <Label 

                  htmlFor="first_name" className="text-sm font-medium">
                    First Name
                  </Label>
                  <Input
                    id="first_name"        
                    autoComplete="given-name"
                    placeholder="First Name"
                    {...register("first_name", { required: "First name is required" })}
                    className="transition-smooth focus:shadow-soft"
                  />
                  {errors.first_name && <p className="text-sm text-destructive mt-1">{errors.first_name.message}</p>}
                </div>

                {/* Last Name */}
                <div className="space-y-2">
                  <Label htmlFor="last_name" className="text-sm font-medium">
                    Last Name
                  </Label>
                  <Input
                    id="last_name"
                    autoComplete="family-name"
                    placeholder="Last Name"
                    {...register("last_name", { required: "Last name is required" })}
                    className="transition-smooth focus:shadow-soft"
                  />
                  {errors.last_name && <p className="text-sm text-destructive mt-1">{errors.last_name.message}</p>}
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Email"
                  {...register("email", { 
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                  className="transition-smooth focus:shadow-soft"
                />
                {errors.email && <p className="text-sm text-destructive mt-1">{errors.email.message}</p>}
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* Password */}
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm font-medium">
                    Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      autoComplete="new-password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Password"
                      {...register("password", { 
                        required: "Password is required",
                        minLength: {
                          value: 8,
                          message: "Password must be at least 8 characters"
                        }
                      })}
                      className="pr-10 transition-smooth focus:shadow-soft"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-smooth"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                  {errors.password && <p className="text-sm text-destructive mt-1">{errors.password.message}</p>}
                </div>

                {/* Confirm Password */}
                <div className="space-y-2">
                  <Label htmlFor="confirm_password" className="text-sm font-medium">
                    Confirm Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="confirm_password"
                      autoComplete="confirmed-password"
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm Password"
                      {...register("confirm_password", {
                        required: "Confirm your password",
                        validate: value => value === password || "Passwords do not match"
                      })}
                      className="pr-10 transition-smooth focus:shadow-soft"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-smooth"
                    >
                      {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                  {errors.confirm_password && <p className="text-sm text-destructive mt-1">{errors.confirm_password.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* Role */}
                <div className="space-y-2">
                  <Label htmlFor="role" className="text-sm font-medium">
                    Role
                  </Label>
                  <Select
                    onValueChange={(value) => handleSelectChange("role", value)}
                  >
                    <SelectTrigger className={`transition-smooth focus:shadow-soft ${errors.role ? "border-destructive" : ""}`}>
                      <SelectValue placeholder="Select Role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Student">Student</SelectItem>
                      <SelectItem value="Teacher">Teacher</SelectItem>

                    </SelectContent>
                  </Select>
                  {errors.role && <p className="text-sm text-destructive mt-1">Role is required</p>}
                </div>

                {/* Gender */}
                <div className="space-y-2">
                  <Label htmlFor="gender" className="text-sm font-medium">
                    Gender
                  </Label>
                  <Select
                    onValueChange={(value) => handleSelectChange("gender", value)}
                  >
                    <SelectTrigger className={`transition-smooth focus:shadow-soft ${errors.gender ? "border-destructive" : ""}`}>
                      <SelectValue placeholder="Select Gender" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Male">Male</SelectItem>
                      <SelectItem value="Female">Female</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.gender && <p className="text-sm text-destructive mt-1">Gender is required</p>}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* Phone Number */}
                <div className="space-y-2">
                  <Label htmlFor="phone_number" className="text-sm font-medium">
                    Phone Number
                  </Label>
                  <Input
                    id="phone_number"
                    autoComplete="tel"
                    type="tel"
                    placeholder="Phone Number"
                    {...register("phone_number", { 
                      required: "Phone number is required",
                      pattern: {
                        value: /^[\+]?[1-9][\d]{0,15}$/,
                        message: "Invalid phone number format"
                      }
                    })}
                    className="transition-smooth focus:shadow-soft"
                  />
                  {errors.phone_number && <p className="text-sm text-destructive mt-1">{errors.phone_number.message}</p>}
                </div>

                {/* Date of Birth */}
                <div className="space-y-2">
                  <Label htmlFor="date_of_birth" className="text-sm font-medium">
                    Date of Birth
                  </Label>
                  <Input
                    id="date_of_birth"
                    autoComplete="bday"
                    type="date"
                    {...register("date_of_birth", { 
                      required: "Date of birth is required",
                      validate: value => {
                        const today = new Date();
                        const birthDate = new Date(value);
                        return birthDate < today || "Date of birth must be in the past";
                      }
                    })}
                    className="transition-smooth focus:shadow-soft"
                  />
                  {errors.date_of_birth && <p className="text-sm text-destructive mt-1">{errors.date_of_birth.message}</p>}
                </div>
              </div>

              {/* Submit Button */}
              <Button 
                type="submit" 
                className="w-full bg-indigoDeep hover:opacity-90 transition-smooth  font-semibold py-3 shadow-medium hover:shadow-strong"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Creating Account..." : "Create Account"}
              </Button>
            </form>

            <div className="text-center">
              <p className="text-md text-gray-700">
                Already have an account?{" "}
                <Link
                  to="/LoginForm"
                  className="text-indigoDeep hover:underline font-medium"
                >
                  Sign in here
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}