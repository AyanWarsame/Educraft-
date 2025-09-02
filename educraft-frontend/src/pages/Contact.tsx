import React from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData } from "../schemas/authSchemas";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Textarea } from "../../components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { useToast } from "../../hooks/use-toast";
import { Mail, Phone, MessageSquare } from "lucide-react";


const Contact: React.FC = () => {
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      phoneNumber: "",
      urgency: "medium",
    },
  });

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });
      
      console.log("Contact data:", data);
      reset();
    } catch (error) {
      toast({
        title: "Failed to Send Message",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen py-20 px-4 bg-sand" id="Contact">
       <div>
          <h2 className="text-2xl font-bold text-indigoDeep text-center mb-6">How to find us</h2>
          </div>
      <div className="grid grid-col-1 md:grid-cols-2 gap-4 ">
        
          <Card className="w-full max-w-2xl mx-auto  shadow-medium border-border/50">
            <CardHeader className="text-center space-y-4">
              <div className="mx-auto w-16 h-16  rounded-full flex items-center justify-center">
                <MessageSquare className="w-12 h-12 " />
              </div>
        <CardTitle className="text-3xl font-bold bg-indigoDeep bg-clip-text text-transparent">
          Get In Touch
        </CardTitle>
        <CardDescription className="text-lg ">
          We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium">
                Full Name *
              </Label>
              <Input
                id="name"
                {...register("name")}
                placeholder="Enter your full name"
                className="transition-smooth focus:shadow-soft"
              />
              {errors.name && (
                <p className="text-sm text-destructive">{errors.name.message}</p>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Email Address *
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  placeholder="Enter your email"
                  className="pl-10 transition-smooth focus:shadow-soft"
                />
              </div>
              {errors.email && (
                <p className="text-sm text-destructive">{errors.email.message}</p>
              )}
            </div>
          </div>

          {/* Phone and Urgency */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phoneNumber" className="text-sm font-medium">
                Phone Number
              </Label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input
                  id="phoneNumber"
                  {...register("phoneNumber")}
                  placeholder="Enter your phone number"
                  className="pl-10 transition-smooth focus:shadow-soft"
                />
              </div>
              {errors.phoneNumber && (
                <p className="text-sm text-destructive">{errors.phoneNumber.message}</p>
              )}
            </div>
            
            <div className="space-y-2">
              <Label className="text-sm font-medium">
                Urgency Level
              </Label>
              <Select onValueChange={(value) => setValue("urgency", value as "low" | "medium" | "high")}>
                <SelectTrigger className="transition-smooth focus:shadow-soft">
                  <SelectValue placeholder="Select urgency level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span>Low Priority</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="medium">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                      <span>Medium Priority</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="high">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-red-500"></div>
                      <span>High Priority</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
              {errors.urgency && (
                <p className="text-sm text-destructive">{errors.urgency.message}</p>
              )}
            </div>
          </div>

          {/* Subject */}
          <div className="space-y-2">
            <Label htmlFor="subject" className="text-sm font-medium">
              Subject *
            </Label>
            <Input
              id="subject"
              {...register("subject")}
              placeholder="Brief description of your inquiry"
              className="transition-smooth focus:shadow-soft"
            />
            {errors.subject && (
              <p className="text-sm text-destructive">{errors.subject.message}</p>
            )}
          </div>

          {/* Message */}
          <div className="space-y-2">
            <Label htmlFor="message" className="text-sm font-medium">
              Message *
            </Label>
            <Textarea
              id="message"
              {...register("message")}
              placeholder="Please provide detailed information about your inquiry..."
              rows={6}
              className="transition-smooth focus:shadow-soft resize-none"
            />
            {errors.message && (
              <p className="text-sm text-destructive">{errors.message.message}</p>
            )}
            <p className="text-xs text-muted-foreground">
              Minimum 20 characters required
            </p>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-indigoDeep hover:opacity-90 transition-smooth text-primary-foreground font-semibold py-3 shadow-medium hover:shadow-strong"
          >
            {isSubmitting ? "Sending Message..." : "Send Message"}
          </Button>
        </form>

        {/* Contact Information */}
        <div className="border-t border-border pt-6">
          <div className="text-center space-y-4">
            <h3 className="text-lg font-semibold">Other Ways to Reach Us</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
              <div className="flex flex-col items-center justify-center space-y-1">
          <p className="font-semibold">Head Office</p>
          <p>
            18th Floor,<br />
            4th Avenue Towers,<br />
            Upperhill, Nairobi, Kenya
          </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2">
          <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4" />
            <span>educraft@kns.co.ke</span>
          </div>
          <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4" />
            <span>+254 711 334 030</span>
          </div>
              </div>
            </div>
            <p className="text-xs text-muted-foreground">
              We typically respond within 24 hours during business days
            </p>
          </div>
        </div>
      </CardContent>
          </Card>

            {/* Right Side - Map + Address */}
       
          <div className="w-full h-full rounded-lg overflow-hidden mb-6">
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.819570287154!2d36.815435!3d-1.292066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10e5a5f54c4f%3A0x9b9dfdb14a0e6e63!2s4th%20Ngong%20Avenue%20Towers!5e0!3m2!1sen!2ske!4v1685536000000!5m2!1sen!2ske"
              width="100%"
              height="100%"
              allowFullScreen={true}
              loading="lazy"
              className="border-0"
            ></iframe>

          
          </div>

      </div>
    </div>
);
}
export default Contact;