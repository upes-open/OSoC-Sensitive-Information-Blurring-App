import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 pt-10">
      <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">
        {/* Left Column */}
        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          <div className="text-xs uppercase text-gray-400 font-medium mb-6">
            Contact Us
          </div>
          <a className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700" href="tel:1234567890">
            +1 (234) 567-890
          </a>
          <a className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700" href="mailto:info@example.com">
            info@example.com
          </a>
        </div>

        {/* Center Column */}
        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          <div className="text-xs uppercase text-gray-400 font-medium mb-6">
            Follow Us
          </div>
          <a className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700" href="#!">
            Facebook
          </a>
          <a className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700" href="#!">
            Twitter
          </a>
          <a className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700" href="#!">
            Instagram
          </a>
        </div>

        {/* Right Column */}
        <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
          <div className="text-xs uppercase text-gray-400 font-medium mb-6">
            Legal
          </div>
          <a className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700" href="#!">
            Terms of Service
          </a>
          <a className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700" href="#!">
            Privacy Policy
          </a>
          <a className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700" href="#!">
            Cookie Policy
          </a>
        </div>
      </div>

      {/* Bottom */}
      <div className="pt-2">
        <div className="flex pb-5 px-3 m-auto pt-5 
        border-t border-gray-500 text-gray-400 text-sm 
        flex-col md:flex-row max-w-6xl">
          <div className="mt-2">
            © 2023 OSOC. All Rights Reserved.
          </div>

          <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
            <a href="/" className="w-6 mx-1">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="/" className="w-6 mx-1">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="/" className="w-6 mx-1">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="/" className="w-6 mx-1">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="/" className="w-6 mx-1">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
