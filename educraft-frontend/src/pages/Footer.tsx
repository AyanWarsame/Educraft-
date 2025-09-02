import {
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import Logo from "../assets/Logo.png"

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700">
     

      {/* Footer Content */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-24 border-t mt-10">
        {/* Logo & About */}
        <div>
          <div className="flex items-center gap-3">
            <img src={Logo} alt="Educraft Logo" className="w-18 h-16" />
            <h3 className="text-3xl font-bold text-indigoDeep">EDUCRAFT</h3>
          </div>
          <p className="mt-4 text-sm text-gray-600 leading-loose tracking-wider ">
            EduCraft is an innovative online learning platform offering a
            diverse range of courses. We provide expert instruction, interactive
            resources, and personalized support to help you achieve your learning
            goals and advance your career.
          </p>
          {/* Socials */}
          <div className="flex gap-8 mt-5 text-2xl text-gray-700 mt-8">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaLinkedin /></a>
            <a href="#"><FaEnvelope /></a>
          </div>
        </div>

        {/* Links 1 */}
        <div className="grid grid-cols-2 gap-12 text-lg text-indigoDeep font-semibold ">
          <div className="space-y-3 mr-6">
            <h4 className="font-semibold text-gray-900">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#">Home</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Courses</a></li>
              <li><a href="#">Sessions</a></li>
              <li><a href="#">Testimonials</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div className="space-y-3 ml-24">
            <h4 className="font-semibold text-gray-900">Support</h4>
            <ul className="space-y-2">
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Guidelines</a></li>
            </ul>
          </div>
        </div>

       
      </div>
    </footer>
  );
};

export default Footer;
