
import { useState } from 'react';
import logo from "../assets/Logo.png";

import { Button } from '../components/ui/button';

import {Menu, X } from 'react-feather';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
 

 

  const toggleMenu = () => setIsMenuOpen(open => !open);
 

  return (
    <header className="fixed top-0 px-4 w-full h-20 bg-white z-30">
      <div className="container mx-auto px-5 py-2 flex items-center justify-between ">
        {/* Logo */}
        <div className="flex flex-row items-center gap-4 pl-4 h-8 w-25">
          <img src={logo} alt="" className="h-full" />
          <h1>Educraft</h1>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-600 focus:outline-none"
          onClick={toggleMenu}                            
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
        <a href="#Home" className="py-2 text-xl font-bold hover:text-blue-600 hover:underline-blue-600 transition-colors">
              Home
            </a>
            <a href="#AboutUs" className="py-2 text-xl font-bold hover:text-blue-600 hover:underline-blue-600 transition-colors">
              About Us
            </a>
            <a href="#Courses" className="py-2 text-xl font-bold hover:text-blue-600 hover:underline-blue-600 transition-colors">
              Courses
            </a>

            <a href="#Sessions" className="py-2 text-xl font-bold hover:text-blue-600 hover:underline-blue-600 transition-colors">
              Sessions
            </a>
            <a href="#Testimonials" className="py-2 text-xl font-bold hover:text-blue-600 hover:underline-blue-600 transition-colors">
                Testimonials
            </a>
            <a href="#Contacts" className="py-2 text-xl font-bold hover:text-blue-600 hover:underline-blue-600 transition-colors">
              Contacts Us
            </a>

            
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center  pr-10 py-2">
          <a href="/WelcomeScreen">
              <Button className=''> Sign Up</Button>
            </a>
         
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 z-40">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
            <a href="#Home" className="py-2 text-xl font-bold hover:text-blue-600 hover:underline-blue-600 transition-colors">
              Home
            </a>
            <a href="#AboutUs" className="py-2 text-xl font-bold hover:text-blue-600 hover:underline-blue-600 transition-colors">
              About Us
            </a>
            <a href="#Courses" className="py-2 text-xl font-bold hover:text-blue-600 hover:underline-blue-600 transition-colors">
              Courses
            </a>
            <a href="#Sessions" className="py-2 text-xl font-bold hover:text-blue-600 hover:underline-blue-600 transition-colors">
              Sessions
            </a>
            <a href="#Testimonials" className="py-2 text-xl font-bold hover:text-blue-600 hover:underline-blue-600 transition-colors">
              Testimonials
            </a>
            <a href="#Contacts" className="py-2 text-xl font-bold hover:text-blue-600 hover:underline-blue-600 transition-colors">
              Contacts Us
            </a>

            <a href="/WelcomeScreen" >
              <Button className=''> Sign Up</Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;