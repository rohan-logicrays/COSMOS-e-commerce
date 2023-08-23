import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import PRODUCT1 from "../assets/images/product1.jpg";
import PRODUCT2 from "../assets/images/product2.jpg";
import PRODUCT3 from "../assets/images/product3.jpg";
import PRODUCT4 from "../assets/images/product4.jpg";
import MENS from "../assets/Categories/mens-category.jpg";
import WOMENS from "../assets/Categories/womens-category.jpg";
import Laoder from "../components/Laoder";
import { Fade } from "react-awesome-reveal";

const CategoryPage = () => {
  const { category } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  // Placeholder product data
  const products = [
    { id: 1, name: "Product 1", image: PRODUCT1, price: "$49.99" },
    { id: 2, name: "Product 2", image: PRODUCT2, price: "$59.99" },
    { id: 3, name: "Product 2", image: PRODUCT3, price: "$59.99" },
    { id: 4, name: "Product 2", image: PRODUCT4, price: "$59.99" },
    { id: 5, name: "Product 2", image: MENS, price: "$59.99" },
    { id: 6, name: "Product 2", image: WOMENS, price: "$59.99" },
    // Add more products
  ];

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // You can adjust the loading delay time as needed
  }, []);

  return (
    <div className="container mx-auto py-16">
      <h2 className="text-3xl font-semibold mb-4 text-black">
        {category} Collection
      </h2>
      {isLoading ? (
       <Laoder />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           <Fade cascade damping={0.3} triggerOnce={true} fraction={0.2}>
          {products.map((product) => (
            <div key={product.id} className="bg-white p-6 shadow-md">
              <img src={product.image} alt={product.name} className="mb-4" />
              <h3 className="text-xl font-semibold text-black mb-2">
                {product.name}
              </h3>
              <p className="text-gray-700 mb-2">{product.price}</p>
              <Link to="/product">
                <button className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition duration-300">
                  View Details
                </button>
              </Link>
            </div>
          ))}</Fade>
        </div>
      )}
    </div>
  );
};

export default CategoryPage;
