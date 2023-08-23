import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-black text-white py-16 h-[50vh]">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">About Us</h2>
        <p className="text-lg md:text-xl mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus efficitur massa eu erat dapibus, vel dapibus lectus pellentesque.
        </p>
        <a
          href="#"
          className="bg-white text-black py-2 px-6 rounded-full hover:bg-gray-300 transition duration-300"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default AboutUs;
