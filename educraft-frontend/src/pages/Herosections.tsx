import Rectangle from "../assets/Rectangle.png";
import heroImg from "../assets/hero-img.png"; 

const HeroSection = () => {
  return (
    <section className="container mx-auto flex flex-col  mt-4 md:flex-row items-center justify-between px-10 py-16">
      {/* Left Side (Text) */}
      <div className="max-w-lg md:w-1/2">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-relaxed tracking-wide">
          Education That Builds, <br /> Not Just Teaches
        </h1>
        <p className="text-gray-600 mt-8 mb-8 leading-relaxed tracking-">
          Learn by doing, not by memorizing. Our programs are built by
          engineers who ship real products — so you master the tools and skills
          the industry actually uses.
        </p>
        <button className="mt-6 bg-indigo-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
          Learn More
        </button>
      </div>

      {/* Right Side (Image) */}
      <div className="relative mt-4 md:mt-8 md:w-1/2 flex justify-center ">
       
      {/* First Image */}
      <img
        src={Rectangle}
        alt="Main"
        className=" object-cover rounded-lg shadow-lg"
      />

      {/* Overlay Image */}
      <img
        src={heroImg}
        alt="Overlay"
        className="w-106 mb-6 h-full object-cover rounded-lg shadow-lg absolute  z-10  border-4 border-white"
      />
    </div>
     
    </section>
  );
};

export default HeroSection;
