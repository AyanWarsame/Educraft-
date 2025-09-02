import Mentor1 from "../assets/mentor1.jpg";
import Mentor2 from "../assets/mentor2.jpg";
import Mentor3 from "../assets/mentor3.jpg";
import Mentor4 from "../assets/mentor4.jpg";

const mentors = [
  { name: "Amina Hassan", role: "Fullstack Engineer", img: Mentor4 },
  { name: "James Otieno", role: "DevOps Specialist", img: Mentor2 },
  { name: "Sophia Kim", role: "UI/UX Designer", img: Mentor1 },
  { name: "Ali Mohamed", role: "Data Scientist", img: Mentor3 },
];

const MentorsSection = () => {
  return (
    <section className="container mx-auto px-6 md:px-12 py-16 grid md:grid-cols-2 gap-12 items-center mb-12">
      {/* Left: Mentor Images */}
      <div className="grid grid-cols-2 gap-4">
        {mentors.map((mentor, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-2xl shadow-md group"
          >
            <img
              src={mentor.img}
              alt={mentor.name}
              className="w-full h-40 object-cover group-hover:scale-105 transition duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-sm p-2">
              <h3 className="font-semibold">{mentor.name}</h3>
              <p className="text-xs">{mentor.role}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Right: Text */}
      <div className="text-center md:text-left mt-0 mb-24  ml-12">
        <h2 className="text-3xl text-indigoDeep font-extrabold mb-4">Meet Your Mentors</h2>
        <h3 className="text-2xl text-blue-700 font-semibold mb-3">
          Expert Guidance
        </h3>
        <p className="text-gray-600 leading-loose tracking-wider">
          Our mentors are seasoned industry experts dedicated to guiding you
          with personalized support and real-world insights. With their
          expertise by your side, you’ll gain the confidence and knowledge to
          achieve your learning goals and excel in your chosen field.
        </p>
      </div>
    </section>
  );
};

export default MentorsSection;
