import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import CustomCard from "../components/Cards";
import webDevImage from "../assets/web-dev.jpg";
import MobileApp from "../assets/mbp.jpg";
import CloudComputing from "../assets/cc.jpg";
import uiux from "../assets/uiux.jpg";
import Ds from "../assets/ds.png";
import { useNavigate } from "react-router-dom";

const Courses = () => {
  
    const navigate = useNavigate();


  const courses = [
    {
      id: 1,
      variant: "course" as const,
      title: "Advanced Web Development",
      description:
        "Learn modern web development techniques with React, TypeScript, and Node.js. Build real-world applications from scratch.",
      price: "$299",
      rating: 4.8,
      imageUrl: webDevImage,
      imageAlt: "Web Development Course",
      duration: "8 weeks",
      tags: ["Programming", "Intermediate", "Online"],
      actionText: "Enroll Now",
    },
    {
      id: 2,
      variant: "course" as const,
      title: "Data Science Fundamentals",
      description:
        "Master the fundamentals of data science, including statistics, Python, and machine learning algorithms.",
      price: "$349",
      rating: 4.7,
      imageUrl: Ds,
      imageAlt: "Data Science Fundamentals",
      duration: "10 weeks",
      tags: ["Data Science", "Python", "ML"],
      actionText: "Enroll Now",
    },
    {
      id: 3,
      variant: "course" as const,
      title: "UI/UX Design Masterclass",
      description:
        "Learn to create beautiful and functional user interfaces with modern design principles and tools.",
      price: "$199",
      rating: 4.6,
      imageUrl: uiux,
      imageAlt: "UI/UX Design Masterclass",
      duration: "6 weeks",
      tags: ["Design", "Figma", "Beginner"],
      actionText: "Enroll Now",
    },
    {
      id: 4,
      variant: "course" as const,
      title: "Mobile App Development",
      description:
        "Build cross-platform mobile applications using React Native and Firebase backend services.",
      price: "$399",
      rating: 4.9,
      imageUrl: MobileApp,
      imageAlt: "Mobile Development Course",
      duration: "12 weeks",
      tags: ["React Native", "Firebase", "Advanced"],
      actionText: "Enroll Now",
    },
    {
      id: 5,
      variant: "course" as const,
      title: "Cloud Computing Essentials",
      description:
        "Understand cloud infrastructure, deployment, and management with AWS and Azure platforms.",
      price: "$279",
      rating: 4.5,
      imageUrl: CloudComputing,
      imageAlt: "Cloud Computing Course",
      duration: "8 weeks",
      tags: ["AWS", "Azure", "DevOps"],
      actionText: "Enroll Now",
    },
  ];

  return (
    <div className="bg-white flex flex-col py-10" id="Courses">
          {/* Section Intro */}
      <div className="flex justify-center">
        <div className="w-3/5 md:w-1/2 text-center pt-4 pb-8 px-6">
          <h1 className="text-3xl font-bold text-indigoDeep">Courses</h1>
          <h2 className="text-2xl mt-2 font-bold text-indigoDeep">
            Dive into Our Courses
          </h2>
          <p className="text-lg text-black mt-4 leading-relaxed tracking-wide">
            Explore Engaging Lessons, Tailored Programs, and Hands-on Learning
            Experiences that Empower You to Unlock Your Full Potential and Achieve
            Success in Your Educational Journey.
          </p>
        </div>
      </div>


      <div className="hidden md:block w-full px-4 py-6">
        <Carousel
          opts={{
            align: "start",
            loop: true,
            containScroll: "trimSnaps",
            skipSnaps: false,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent>
            {courses.map((course) => (
              <CarouselItem
                key={course.id}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-2">
                  <CustomCard
                    {...course}
                    onAction={() => navigate("/PaymentPage")}
                     
                    
                    className="h-full bg-indigoDeep"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2 carousel-arrow" />
          <CarouselNext className="right-2 carousel-arrow" />
        </Carousel>
      </div>

      {/* Mobile Carousel View */}
      <div className="md:hidden w-full px-4 py-6">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-md mx-auto"
        >
          <CarouselContent>
            {courses.map((course) => (
              <CarouselItem key={course.id} className="basis-full">
                <div className="p-2">
                  <CustomCard
                    {...course}
                    onAction={() =>
                      console.log(`Enroll clicked for ${course.title}`)
                    }
                    className="h-full bg-indigoDeep"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      </div>
    </div>
  );
};

export default Courses;
