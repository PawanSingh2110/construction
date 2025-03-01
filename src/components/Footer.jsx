import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white text-lg py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {/* Company Information */}
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-4 cursor-pointer hover:text-pink-500">
              <a href="/">QaiMaxa</a>
            </h2>
            <p className="mb-4">
              QaiMaxa.Ai is a leading provider of innovative AI solutions, dedicated to transforming industries through cutting-edge technology and unparalleled expertise.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="hover:bg-blue-500 border-2 border-white p-3 rounded-full">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Twitter" className="hover:bg-blue-400 border-2 border-white p-3 rounded-full">
                <FaTwitter />
              </a>
              <a href="#" aria-label="LinkedIn" className="hover:bg-blue-600 border-2 border-white p-3 rounded-full">
                <FaLinkedinIn />
              </a>
              <a href="#" aria-label="Instagram" className="hover:bg-pink-500 border-2 border-white p-3 rounded-full">
                <FaInstagram />
              </a>
            </div>
          </div>
          {/* Products */}
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">Products</h2>
            <div className="flex">
              <ul className="list-none mr-4">
                <li className="mb-2 before:content-['>'] before:mr-3 hover:text-pink-500">
                  <a href="#">RMC</a>
                </li>
                <li className="mb-2 before:content-['>'] before:mr-3 hover:text-pink-500">
                  <a href="#">Fly Ash</a>
                </li>
                <li className="mb-2 before:content-['>'] before:mr-3 hover:text-pink-500">
                  <a href="#">Pond Ash</a>
                </li>
              </ul>
              <ul className="list-none">
                <li className="mb-2 before:content-['>'] before:mr-3 hover:text-pink-500">
                  <a href="#">Blocks</a>
                </li>
                <li className="mb-2 before:content-['>'] before:mr-3 hover:text-pink-500">
                  <a href="#">Steel & Metal</a>
                </li>
                <li className="mb-2 before:content-['>'] before:mr-3 hover:text-pink-500">
                  <a href="#">Aggregates</a>
                </li>
              </ul>
            </div>
          </div>
          {/* Contact Information */}
          <div className="w-full md:w-1/3 px-4">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <address className="not-italic mb-4">
              123 Innovation Drive<br />
              Mumbai, Maharashtra, India
            </address>
            <p className="mb-2">Phone: <a href="tel:+1234567890" className="hover:text-pink-500">+1 234 567 890</a></p>
            <p className="mb-2">Landline: <a href="tel:+0987654321" className="hover:text-pink-500">+0 987 654 321</a></p>
            <p>Email: <a href="mailto:info@qaimaxa.ai" className="hover:text-pink-500">info@qaimaxa.ai</a></p>
          </div>
        </div>
        {/* Policy Links */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <a href="#" className="hover:text-pink-500 mx-2">Privacy Policy</a>
          <a href="#" className="hover:text-pink-500 mx-2">Terms of Service</a>
          <p className="mt-4">&copy; {new Date().getFullYear()} QaiMaxa.Ai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;3