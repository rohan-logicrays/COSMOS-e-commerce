import React from "react";
import FACEBOOK from '../assets/Socialcons/facebook.svg'
import INSTAGRAM from '../assets/Socialcons/instagram.svg'
import TWITTER from '../assets/Socialcons/twitter.svg'



const Footer = ({isCartOpen}) => {
  return (
    <footer className={`w-full bg-black text-white py-8 border-t border-1 ${
      isCartOpen ? "blur-[2px]" : ""
    }`}>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
          <p className="text-gray-300">Email: info@cosmos.com</p>
          <p className="text-gray-300">Phone: +1 123-456-7890</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-2">
            <a href="#" className="text-gray-300 hover:text-white transition duration-300">
              <img src={FACEBOOK} alt="facebook" />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition duration-300">
            <img src={INSTAGRAM} alt="instagram" />
            </a>
            <a href="#" className="text-gray-300 hover:text-white transition duration-300">
            <img src={TWITTER} alt="twitter" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <p className="text-gray-300">© 2023 Cosmos. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
