import React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginFormData } from "../schemas/authSchemas";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Checkbox } from "../components/ui/checkbox";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { useToast } from "../hooks/use-toast";
import { LogIn, Eye, EyeOff } from "lucide-react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const LoginForm: React.FC = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const { showToast } = useToast();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      rememberMe: false,
    },
  });

  // ✅ Load keys from .env
  const apiKey = import.meta.env.VITE_API_KEY;
  const apiSecret = import.meta.env.VITE_API_SECRET;

  // ✅ Updated onSubmit with backend request
  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    try {
      const response = await fetch("/api/method/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": apiKey,
          "X-API-SECRET": apiSecret,
        },
        body: JSON.stringify({
          email: data.email,
          password: data.password,
        }),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const result = await response.json();

      showToast({
        title: "Login Successful!",
        description: `Welcome back ${result?.full_name || ""}!`,
      });

      console.log("✅ Login response:", result);

    } catch (error) {
      console.error("❌ Login error:", error);
      showToast({
        title: "Login Failed",
        description: "Invalid credentials or server error.",
        variant: "error",
      });
    }
  };

  return (
     <> 
     <Navbar />
      <div className="min-h-screen bg-blue-100 p-4 mt-16">  
        <Card className="max-w-lg mx-auto mt-10 shadow-xl rounded-xl">
          <CardHeader className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 rounded-full flex items-center justify-center">
              <LogIn className="w-8 h-8" />
            </div>
            <CardTitle className="text-3xl font-bold bg-clip-text">
              Welcome Back
            </CardTitle>
            <CardDescription className="text-lg text-muted-foreground">
              Sign in to your account to continue
            </CardDescription>
          </CardHeader>
          
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Email Field */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  placeholder="Enter your email address"
                  className="transition-smooth focus:shadow-soft"
                />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email.message}</p>
                )}
              </div>

              {/* Password Field */}
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium">
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    {...register("password")}
                    placeholder="Enter your password"
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
                {errors.password && (
                  <p className="text-sm text-destructive">{errors.password.message}</p>
                )}
              </div>

              {/* Remember Me and Forgot Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="rememberMe"
                    checked={watch("rememberMe")}
                    onChange={(e) => setValue("rememberMe", e.target.checked)}
                  />
                  <Label
                    htmlFor="rememberMe"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Remember me
                  </Label>
                </div>
                <a
                  href="#"
                  className="text-sm text-primary hover:underline font-medium"
                >
                  Forgot password?
                </a>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-indigoDeep hover:opacity-90 transition-smooth text-primary-foreground font-semibold py-3 shadow-medium hover:shadow-strong"
              >
                {isSubmitting ? "Signing In..." : "Sign In"}
              </Button>
            </form>

            <div className="text-center">
              <p className="text-md text-gray-700">
                Don't have an account?{" "}
                 <Link to="/Registration" className="text-primary hover:underline font-medium">
                  Sign up here
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default LoginForm;
