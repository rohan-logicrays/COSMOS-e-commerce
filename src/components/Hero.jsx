import React, { useEffect, useState } from "react";

const Hero = ({ isCartOpen = { isCartOpen } }) => {
  const [sectionAnimation, setSectionAnimation] = useState(true);
  // useEffect(() => {
  //   // Apply the no-scroll class to disable scrolling
  //   document.body.classList.add("no-scroll");

  //   // Remove the no-scroll class after 4 seconds
  //   const timer = setTimeout(() => {
  //     document.body.classList.remove("no-scroll");
  //   }, 4000);

  //   return () => clearTimeout(timer);
  // }, []);
  useEffect(() => {
    setTimeout(() => {
      setSectionAnimation(false);
    }, 4200);
  }, []);
  const handleScroll = () => {
    // Scroll down 100vh (viewport height) smoothly
    window.scrollTo({
      top: window.innerHeight * 0.95,
      behavior: "smooth",
    });
  };
  return (
    <>
      {sectionAnimation ? (
        <img
          src="https://i0.wp.com/codemyui.com/wp-content/uploads/2017/11/solid-black-dripping-animation.gif?fit=880%2C440&ssl=1"
          alt=""
          className="w-full h-screen"
        />
      ) : (
        <>
          {" "}
          <div
            className={`bg-black text-white h-screen flex items-center fade-in-out ${
              isCartOpen ? "blur-[2px]" : ""
            }`}
          >
            <div className="container  mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-semibold mb-4">
                COSMOS
              </h1>
              <p className="text-lg md:text-xl mb-8">
                Clothing Beyond the Horizon
              </p>
              <a
                href="#"
                className="bg-white text-black py-2 px-6 rounded-full hover:bg-black hover:text-white hover:border transition duration-200"
                onClick={handleScroll}
              >
                Shop Now
              </a>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Hero;
