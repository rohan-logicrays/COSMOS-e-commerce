import React from "react";
import MENS from "../assets/Categories/mens-category.jpg";
import WOMENS from "../assets/Categories/womens-category.jpg";
import KIDS from "../assets/Categories/kids-category.jpg";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const ProductCategoriesSection = ({ isCartOpen }) => {
  const Categoreies = [
    {
      category: "Men",
      image: MENS,
    },
    {
      category: "Women",
      image: WOMENS,
    },
    {
      category: "KID",
      image: KIDS,
    },
  ];

  return (
    <div className={`bg-black py-16 ${isCartOpen ? "blur-[2px]" : ""}`}>
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-black">
          Explore Our Categories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Fade direction="right" triggerOnce={true}>
            {Categoreies.map((item) => {
              return (
                <Link to={`/category/${item.category}`}>
                  <div className="bg-white p-4 group rounded-md shadow-md hover:shadow-lg grid items-center">
                    <img
                      src={item.image}
                      alt="Men's Category"
                      className="w-full h-auto mb-4"
                    />

                    <h3 className="text-xl font-semibold mb-2 text-black">
                      {item.category}'s Collection
                    </h3>
                    <a className="text-gray-700 hover:text-black transition duration-300">
                      Browse Products
                    </a>
                  </div>
                </Link>
              );
            })}
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default ProductCategoriesSection;
