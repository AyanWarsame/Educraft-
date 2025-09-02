import React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { personalDetailsSchema, type PersonalDetailsFormData } from "../schemas/authSchemas";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Textarea } from "../../components/ui/textarea";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Separator } from "../components/ui/separator";
import { useToast } from "../hooks/use-toast";
import { User, MapPin, Phone, Heart } from "lucide-react";
import Navbar from "../components/Navbar";

const PersonalDetailsForm: React.FC = () => {
  const { showToast } = useToast();

  const {
    register,
    handleSubmit,
    // setValue,
    formState: { errors, isSubmitting },
  } = useForm<PersonalDetailsFormData>({
    resolver: zodResolver(personalDetailsSchema),
    defaultValues: {
      bio: "",
    },
  });

  const onSubmit: SubmitHandler<PersonalDetailsFormData> = async (data) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      showToast({
        title: "Profile Updated Successfully!",
        description: "Your personal details have been saved.",
      });
      
      console.log("Personal details data:", data);
    } catch (error) {
      showToast({
        title: "Update Failed",
        description: "Something went wrong. Please try again.",
        variant: "error",
      });
    }
  };

  return (
    <> 
     <Navbar/>
   <div className="bg-skySoft min-h-screen pt-24 pb-10">
    <Card className="w-full max-w-4xl mx-auto bg-gray-100 shadow-xl border-border/50">
      <CardHeader className="text-center space-y-4">
        <div className="mx-auto w-16 h-16  rounded-full flex items-center justify-center">
          <User className="w-8 h-8 " />
        </div>
        <CardTitle className="text-3xl font-bold bg-gradient-primary bg-clip-text">
          Personal Details
        </CardTitle>
        <CardDescription className="text-lg text-muted-foreground">
          Complete your profile with your personal information
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-8">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
             {/* Education Background */}
            <div className="space-y-6">
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-semibold">Education Background</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="institution" className="text-sm font-medium">
                    Institution Name *
                  </Label>
                  <Input
                    id="institution"
                    {...register("institution")}
                    placeholder="Enter your school/college/university name"
                    className="transition-smooth focus:shadow-soft"
                  />
                  {errors.institution && (
                    <p className="text-sm text-destructive">{errors.institution.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="degree" className="text-sm font-medium">
                    Degree *
                  </Label>
                  <Input
                    id="degree"
                    {...register("degree")}
                    placeholder="e.g. Bachelor of Science"
                    className="transition-smooth focus:shadow-soft"
                  />
                  {errors.degree && (
                    <p className="text-sm text-destructive">{errors.degree.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fieldOfStudy" className="text-sm font-medium">
                    Field of Study *
                  </Label>
                  <Input
                    id="fieldOfStudy"
                    {...register("fieldOfStudy")}
                    placeholder="e.g. Computer Science"
                    className="transition-smooth focus:shadow-soft"
                  />
                  {errors.fieldOfStudy && (
                    <p className="text-sm text-destructive">{errors.fieldOfStudy.message}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="graduationYear" className="text-sm font-medium">
                    Graduation Year *
                  </Label>
                  <Input
                    id="graduationYear"
                    type="number"
                    {...register("graduationYear")}
                    placeholder="e.g. 2024"
                    className="transition-smooth focus:shadow-soft"
                  />
                  {errors.graduationYear && (
                    <p className="text-sm text-destructive">{errors.graduationYear.message}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="gpa" className="text-sm font-medium">
                    GPA / Grade
                  </Label>
                  <Input
                    id="gpa"
                    {...register("gpa")}
                    placeholder="e.g. 3.7 / First Class"
                    className="transition-smooth focus:shadow-soft"
                  />
                  {errors.gpa && (
                    <p className="text-sm text-destructive">{errors.gpa.message}</p>
                  )}
                </div>
              </div>
            </div>


          <Separator />

          {/* Address Information */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-semibold">Address Information</h3>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="street" className="text-sm font-medium">
                Street Address *
              </Label>
              <Input
                id="street"
                {...register("address.street")}
                placeholder="Enter your street address"
                className="transition-smooth focus:shadow-soft"
              />
              {errors.address?.street && (
                <p className="text-sm text-destructive">{errors.address.street.message}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="city" className="text-sm font-medium">
                  City *
                </Label>
                <Input
                  id="city"
                  {...register("address.city")}
                  placeholder="Enter your city"
                  className="transition-smooth focus:shadow-soft"
                />
                {errors.address?.city && (
                  <p className="text-sm text-destructive">{errors.address.city.message}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="state" className="text-sm font-medium">
                  State/Province *
                </Label>
                <Input
                  id="state"
                  {...register("address.state")}
                  placeholder="Enter your state or province"
                  className="transition-smooth focus:shadow-soft"
                />
                {errors.address?.state && (
                  <p className="text-sm text-destructive">{errors.address.state.message}</p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="zipCode" className="text-sm font-medium">
                  ZIP/Postal Code *
                </Label>
                <Input
                  id="zipCode"
                  {...register("address.zipCode")}
                  placeholder="Enter your ZIP or postal code"
                  className="transition-smooth focus:shadow-soft"
                />
                {errors.address?.zipCode && (
                  <p className="text-sm text-destructive">{errors.address.zipCode.message}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="country" className="text-sm font-medium">
                  Country *
                </Label>
                <Input
                  id="country"
                  {...register("address.country")}
                  placeholder="Enter your country"
                  className="transition-smooth focus:shadow-soft"
                />
                {errors.address?.country && (
                  <p className="text-sm text-destructive">{errors.address.country.message}</p>
                )}
              </div>
            </div>
          </div>

          <Separator />

          {/* Emergency Contact */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Heart className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-semibold">Emergency Contact</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="emergencyContactName" className="text-sm font-medium">
                  Contact Name *
                </Label>
                <Input
                  id="emergencyContactName"
                  {...register("emergencyContact.name")}
                  placeholder="Enter emergency contact name"
                  className="transition-smooth focus:shadow-soft"
                />
                {errors.emergencyContact?.name && (
                  <p className="text-sm text-destructive">{errors.emergencyContact.name.message}</p>
                )}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="emergencyContactRelationship" className="text-sm font-medium">
                  Relationship *
                </Label>
                <Input
                  id="emergencyContactRelationship"
                  {...register("emergencyContact.relationship")}
                  placeholder="e.g., Spouse, Parent, Sibling"
                  className="transition-smooth focus:shadow-soft"
                />
                {errors.emergencyContact?.relationship && (
                  <p className="text-sm text-destructive">{errors.emergencyContact.relationship.message}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="emergencyContactPhone" className="text-sm font-medium">
                Phone Number *
              </Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="emergencyContactPhone"
                  {...register("emergencyContact.phoneNumber")}
                  placeholder="Enter emergency contact phone number"
                  className="pl-10 transition-smooth focus:shadow-soft"
                />
              </div>
              {errors.emergencyContact?.phoneNumber && (
                <p className="text-sm text-destructive">{errors.emergencyContact.phoneNumber.message}</p>
              )}
            </div>
          </div>

          <Separator />

          {/* Bio */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Additional Information</h3>
            
            <div className="space-y-2">
              <Label htmlFor="bio" className="text-sm font-medium">
                Bio (Optional)
              </Label>
              <Textarea
                id="bio"
                {...register("bio")}
                placeholder="Tell us a bit about yourself..."
                rows={4}
                className="transition-smooth focus:shadow-soft resize-none"
              />
              {errors.bio && (
                <p className="text-sm text-destructive">{errors.bio.message}</p>
              )}
              <p className="text-xs text-muted-foreground">
                Maximum 500 characters
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-indigoDeep hover:opacity-90 transition-smooth text-primary-foreground font-semibold py-3 shadow-medium hover:shadow-strong"
          >
            {isSubmitting ? "Saving Details..." : "Save Personal Details"}
          </Button>
        </form>
      </CardContent>
    </Card>
    </div>
      </>
  );
};

export default PersonalDetailsForm;