import React from "react";
import { Fade } from "react-awesome-reveal";

const MegaMenu = ({ categoryName, setIsMegaMenuOpen }) => {
  return (
    <Fade>
      <div
        className="text-white border "
        onMouseLeave={() => setIsMegaMenuOpen(false)}
        onMouseEnter={()=> setIsMegaMenuOpen(true)}
      >
        <h2 className="text-lg font-semibold pt-2 w-full flex justify-center bg-black">
          {categoryName} Collection
        </h2>
        <section className="flex justify-center bg-black p-8">
          <div className="container mx-auto flex space-x-8 ">
            <div className="flex-1">
              <h2 className="text-lg font-semibold mb-4">Topwear</h2>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-gray-300">
                    T-Shirt
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Polo Shirt
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Hoodie
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Sweater
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-semibold mb-4">Bottomwear</h2>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Jeans
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Chinos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Shorts
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Leggings
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-semibold mb-4">Footwear</h2>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Sneakers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Boots
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Sandals
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Slippers
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Fade>
  );
};

export default MegaMenu;
