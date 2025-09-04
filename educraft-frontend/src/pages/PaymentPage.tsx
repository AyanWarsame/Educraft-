import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "../../components/ui/select";
import { Label } from "../../components/ui/label";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { Check, CreditCard, BookOpen, ArrowRight } from "lucide-react";

// Define course and payment types
type Course = {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: string;
  level: string;
};

type PaymentFormData = {
  cardNumber: string;
  cardHolder: string;
  expiryDate: string;
  cvv: string;
};


const courses: Course[] = [
  {
    id: "web-dev",
    title: "Web Development Bootcamp",
    description: "Learn full-stack web development with modern technologies",
    price: 15000,
    duration: "12 weeks",
    level: "Beginner to Advanced"
  },
  {
    id: "data-science",
    title: "Data Science Fundamentals",
    description: "Master data analysis, visualization, and machine learning",
    price: 18000,
    duration: "10 weeks",
    level: "Intermediate"
  },
  {
    id: "graphic-design",
    title: "Graphic Design Mastery",
    description: "Create stunning visuals and build a professional portfolio",
    price: 12000,
    duration: "8 weeks",
    level: "Beginner"
  },
  {
    id: "mobile-dev",
    title: "Mobile App Development",
    description: "Build cross-platform mobile applications with React Native",
    price: 16000,
    duration: "14 weeks",
    level: "Intermediate"
  }
];

export default function PaymentPage() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const navigate = useNavigate();
  
  const { register, handleSubmit, formState: { errors } } = useForm<PaymentFormData>();
  
  
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES'
    }).format(amount);
  };
  

  const handleCourseSelect = (courseId: string) => {
    const course = courses.find(c => c.id === courseId);
    setSelectedCourse(course || null);
  };
  

  const onSubmit = async (_data: PaymentFormData) => {
    setIsProcessing(true);
    
  
    setTimeout(() => {
      setIsProcessing(false);
      setPaymentSuccess(true);
      
      // Redirect to dashboard after 2 seconds
      setTimeout(() => {
        navigate("/StudentDashboard");
      }, 2000);
    }, 2000);
  };
  
  
  useEffect(() => {
    
    if (!selectedCourse) {
      
    }
  }, [selectedCourse]);
  
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-blue-100  p-4 mt-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Complete Your Enrollment</h1>
          <p className="text-gray-600 mb-8">Select your course and make payment to start learning</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Course Selection & Summary */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5" />
                    Select a Course
                  </CardTitle>
                  <CardDescription>
                    Choose the course you want to enroll in
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Select onValueChange={handleCourseSelect}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a course" />
                      </SelectTrigger>
                      <SelectContent>
                        {courses.map(course => (
                          <SelectItem key={course.id} value={course.id}>
                            {course.title} - {formatCurrency(course.price)}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    
                    {selectedCourse && (
                      <div className="border rounded-lg p-4 bg-blue-50 border-blue-200">
                        <h3 className="font-semibold text-lg">{selectedCourse.title}</h3>
                        <p className="text-gray-600 text-sm mt-1">{selectedCourse.description}</p>
                        <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
                          <div>
                            <span className="font-medium">Level:</span> {selectedCourse.level}
                          </div>
                          <div>
                            <span className="font-medium">Duration:</span> {selectedCourse.duration}
                          </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-blue-200">
                          <div className="flex justify-between items-center">
                            <span className="font-semibold">Course Fee:</span>
                            <span className="text-xl font-bold text-blue-700">
                              {formatCurrency(selectedCourse.price)}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
              
              {/* Payment Details */}
              {selectedCourse && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CreditCard className="w-5 h-5" />
                      Payment Information
                    </CardTitle>
                    <CardDescription>
                      Enter your card details to complete the payment
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {paymentSuccess ? (
                      <div className="text-center py-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                          <Check className="w-8 h-8 text-green-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Payment Successful!</h3>
                        <p className="text-gray-600">Redirecting to your dashboard...</p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div className="space-y-2">
                          <Label htmlFor="cardNumber">Card Number</Label>
                          <Input
                            id="cardNumber"
                            placeholder="1234 5678 9012 3456"
                            {...register("cardNumber", {
                              required: "Card number is required",
                              pattern: {
                                value: /^[0-9]{16}$/,
                                message: "Please enter a valid 16-digit card number"
                              }
                            })}
                          />
                          {errors.cardNumber && (
                            <p className="text-sm text-red-500">{errors.cardNumber.message}</p>
                          )}
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="cardHolder">Cardholder Name</Label>
                          <Input
                            id="cardHolder"
                            placeholder="John Doe"
                            {...register("cardHolder", {
                              required: "Cardholder name is required"
                            })}
                          />
                          {errors.cardHolder && (
                            <p className="text-sm text-red-500">{errors.cardHolder.message}</p>
                          )}
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="expiryDate">Expiry Date</Label>
                            <Input
                              id="expiryDate"
                              placeholder="MM/YY"
                              {...register("expiryDate", {
                                required: "Expiry date is required",
                                pattern: {
                                  value: /^(0[1-9]|1[0-2])\/([0-9]{2})$/,
                                  message: "Please use MM/YY format"
                                }
                              })} 
                            />
                            {errors.expiryDate && (
                              <p className="text-sm text-red-500">{errors.expiryDate.message}</p>
                            )}
                          </div>
                          
                          <div className="space-y-2">
                            <Label htmlFor="cvv">CVV</Label>
                            <Input
                              id="cvv"
                              placeholder="123"
                              {...register("cvv", {
                                required: "CVV is required",
                                pattern: {
                                  value: /^[0-9]{3,4}$/,
                                  message: "Please enter a valid CVV"
                                }
                              })}
                            />
                            {errors.cvv && (
                              <p className="text-sm text-red-500">{errors.cvv.message}</p>
                            )}
                          </div>
                        </div>
                        
                        <Button
                          type="submit"
                          className="w-full mt-6"
                          disabled={isProcessing || !selectedCourse}
                        >
                          {isProcessing ? (
                            <>Processing Payment...</>
                          ) : (
                            <>
                              Pay {selectedCourse && formatCurrency(selectedCourse.price)}
                              <ArrowRight className="ml-2 w-4 h-4" />
                            </>
                          )}
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              )}
            </div>
            
            {/* Order Summary */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  {selectedCourse ? (
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span>Course:</span>
                        <span className="font-medium">{selectedCourse.title}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Price:</span>
                        <span className="font-medium">{formatCurrency(selectedCourse.price)}</span>
                      </div>
                      <div className="flex justify-between text-sm text-gray-500">
                        <span>Tax:</span>
                        <span>{formatCurrency(selectedCourse.price * 0.14)}</span>
                      </div>
                      <div className="border-t pt-4 mt-4">
                        <div className="flex justify-between text-lg font-bold">
                          <span>Total:</span>
                          <span className="text-blue-700">
                            {formatCurrency(selectedCourse.price * 1.14)}
                          </span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <p className="text-gray-500 text-center py-8">
                      Select a course to see payment details
                    </p>
                  )}
                </CardContent>
              </Card>
              
              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-800">What's Included</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Full course access with all materials</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Certificate of completion</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Q&A support with instructors</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span>Lifetime access to course updates</span>
                    </li>
                  
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}