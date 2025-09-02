import { useForm } from "react-hook-form";
import { Card, CardContent } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Button } from "../components/ui/button";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "../../components/ui/select";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

type RegistrationForm = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  confirm_password: string;
  role: "Student" | "Teacher" | "Admin";
  phone_number: string;
  date_of_birth: string;
  gender: "Male" | "Female" | "Other";
};

const apiKey = import.meta.env.VITE_API_KEY;      
const apiSecret = import.meta.env.VITE_API_SECRET; 

export default function RegistrationForm() {
  const { register, handleSubmit, setValue,  reset } = useForm<RegistrationForm>();

  const onSubmit = async (data: RegistrationForm) => {
    if (data.password !== data.confirm_password) {
      alert("Passwords do not match");
      return;
    }

    // 👇 Naming series logic
    const naming_series =
      data.role === "Student"
        ? "STU.#####"
        : data.role === "Teacher"
        ? "TEA.#####"
        : "ADM.#####";

    const payload = {
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      password: data.password,
      confirm_password: data.confirm_password,
      role: data.role,
      phone_number: data.phone_number,
      date_of_birth: data.date_of_birth,
      gender: data.gender,
      naming_series,
    };

    try {
      const response = await fetch("http://localhost:8002/api/resource/Registration", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `token ${apiKey}:${apiSecret}`, // ✅ fixed
        },
        body: JSON.stringify(payload),
        credentials: "include",
      });

      const result = await response.json();
      if (response.ok) {
        alert("✅ Registration successful!");
        reset(); // clear form
        console.log("Created:", result);
      } else {
        alert("❌ Error: " + result.message);
        console.error(result);
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Server connection failed.");
    }
  };

  return (

    <>  
    <Navbar />
    <div className="min-h-screen bg-blue-100 p-4 mt-16">

       <Card className="max-w-lg mx-auto mt-10 shadow-xl rounded-2xl">
      <CardContent className="space-y-4 p-6">
        <h2 className="text-2xl font-bold text-center">Registration Form</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* First Name */}
          <Input placeholder="First Name" {...register("first_name", { required: true })} />

          {/* Last Name */}
          <Input placeholder="Last Name" {...register("last_name", { required: true })} />

          {/* Email */}
          <Input type="email" placeholder="Email" {...register("email", { required: true })} />

          {/* Password */}
          <Input type="password" placeholder="Password" {...register("password", { required: true })} />

          {/* Confirm Password */}
          <Input type="password" placeholder="Confirm Password" {...register("confirm_password", { required: true })} />

          {/* Role */}
          <Select onValueChange={(value) => setValue("role", value as "Student" | "Teacher" | "Admin")}>
            <SelectTrigger>
              <SelectValue placeholder="Select Role" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Student">Student</SelectItem>
              <SelectItem value="Teacher">Teacher</SelectItem>
              <SelectItem value="Admin">Admin</SelectItem>
            </SelectContent>
          </Select>

          {/* Phone Number */}
          <Input type="tel" placeholder="Phone Number" {...register("phone_number", { required: true })} />

          {/* Date of Birth */}
          <Input type="date" placeholder="Date of Birth" {...register("date_of_birth", { required: true })} />

          {/* Gender */}
          <Select onValueChange={(value) => setValue("gender", value as "Male" | "Female" | "Other")}>
            <SelectTrigger>
              <SelectValue placeholder="Select Gender" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Male">Male</SelectItem>
              <SelectItem value="Female">Female</SelectItem>
              <SelectItem value="Other">Other</SelectItem>
            </SelectContent>
          </Select>

          {/* Submit */}
          <Button type="submit" className="w-full mb-6">Register</Button>


          <div className="text-center mb-4 pb-4 mt-4">
             <p className="text-sm text-gray-600"> Already have an account?{" "}
               <Link to="/LoginForm" className="text-indigoDeep hover:underline font-medium"> Sign in here 
               </Link>
                </p> 
                </div>
        </form>

      </CardContent>
    </Card>
    </div>
    </>
   
  );
}
