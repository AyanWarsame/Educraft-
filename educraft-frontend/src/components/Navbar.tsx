
import { useState } from 'react';
import logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import  Button  from './Button';

import {Menu, X } from 'react-feather';


type Button = {
    label: any;
    onClick: any;
    type?: string | undefined;
    className?: string | undefined;
    disabled?: boolean | undefined;
    loading?: boolean | undefined;
    icon: any;
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 

 

  const toggleMenu = () => setIsMenuOpen(open => !open);
 

  return (
    <header className="fixed top-0 px-4 w-full h-20 bg-white z-30">
      <div className="container mx-auto px-5 py-2 flex items-center justify-between ">
        {/* Logo */}
        <Link to="/">
          <div className="flex flex-row items-center gap-4 pl-4 h-8 w-20">
          <img src={logo} alt="" className="h-10 w-24" />
          <h1 className='font-bold text-[1E1B4B] text-lg relaxed text-indigoDeep'>Educraft</h1>
        </div>
        </Link>
       

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={toggleMenu}                            
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
        <HashLink to="#" className="py-2 text-lg font-bold hover:text-blue-600 hover:underline-blue-600 transition-colors">
              Home
            </HashLink>
            <HashLink to="#AboutUs" className="py-2 text-lg font-bold hover:text-blue-600 hover:underline-blue-600 transition-colors">
              About Us
            </HashLink>
            <HashLink to="#Courses" className="py-2 text-lg font-bold hover:text-blue-600 hover:underline-blue-600 transition-colors">
              Courses
            </HashLink>

            <HashLink to="#Sessions" className="py-2 text-lg font-bold hover:text-blue-600 hover:underline-blue-600 transition-colors">
              Sessions
            </HashLink>
            <HashLink to="#Testimonials" className="py-2 text-lg font-bold hover:text-blue-600 hover:underline-blue-600 transition-colors">
                Testimonials
            </HashLink>
            <HashLink to="#Contact" className="py-2 text-lg font-bold hover:text-blue-600 hover:underline-blue-600 transition-colors">
              Contact Us
            </HashLink>

            
        </div>

        {/* Desktop Buttons */}
          <div className="hidden md:flex items-center  pr-10 py-2">
          <Link to="/Registration">
              <Button
                label="Sign Up"
                className="text-white p-10 m-1 w-40 border border-blue-200 hover:bg-gray-200 h-10 w-50 rounded-full bg-[linear-gradient(180deg,_#2769C0_4.79%,_#0F1A4F_48.12%)]"
              />
            </Link>
         
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 z-40">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
            <Link to="#" className="py-2 text-lg font-bold hover:text-blue-600 hover:underline-blue-600 transition-colors">
              Home
            </Link>
            <Link to="#AboutUs" className="py-2 text-lg font-bold hover:text-blue-600 hover:underline-blue-600 transition-colors">
              About Us
            </Link>
            <Link to="#Courses" className="py-2 text-lg font-bold hover:text-blue-600 hover:underline-blue-600 transition-colors">
              Courses
            </Link>
            <Link to="#Sessions" className="py-2 text-lg font-bold hover:text-blue-600 hover:underline-blue-600 transition-colors">
               Sessions
            </Link>
            <Link to="#Testimonials" className="py-2 text-lg font-bold hover:text-blue-600 hover:underline-blue-600 transition-colors">
              Testimonials
            </Link>
            <Link to="#Contact" className="py-2 text-lg font-bold hover:text-blue-600 hover:underline-blue-600 transition-colors">
              Contact Us
            </Link>

            <Link to="/Registration">
              <Button
                label="Sign Up"
                className="text-white p-1 w-150 border border-blue-200 hover:bg-gray-200 h-10 w-50 rounded-full bg-[linear-gradient(180deg,_#2769C0_4.79%,_#0F1A4F_48.12%)]"
              />
            </Link>

          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;