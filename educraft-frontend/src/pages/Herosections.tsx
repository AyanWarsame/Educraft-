import Rectangle from "../assets/Rectangle.png";
import heroImg from "../assets/hero-img.png"; 

const HeroSection = () => {
  return (
    <section className="container mx-auto flex flex-col md:flex-row items-center justify-between px-10 py-16">
      {/* Left Side (Text) */}
      <div className="max-w-lg">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
          Education That Builds, <br /> Not Just Teaches
        </h1>
        <p className="text-gray-600 mt-4">
          Learn by doing, not by memorizing. Our programs are built by
          engineers who ship real products — so you master the tools and skills
          the industry actually uses.
        </p>
        <button className="mt-6 bg-indigo-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
          Learn More
        </button>
      </div>

      {/* Right Side (Image) */}
      <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center">
        <div className="relative w-80 h-80">
      {/* First Image */}
      <img
        src={Rectangle}
        alt="Main"
        className="w-60 h-60 object-cover rounded-lg shadow-lg"
      />

      {/* Second Image (on top, shifted slightly) */}
      <img
        src={heroImg}
        alt="Overlay"
        className="w-40 h-40 object-cover rounded-lg shadow-lg absolute top-10 left-32 border-4 border-white"
      />
    </div>
      </div>
    </section>
  );
};

export default HeroSection;
