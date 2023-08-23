import React, { useEffect } from "react";
import PRODUCT1 from "../assets/images/product1.jpg";
import PRODUCT2 from "../assets/images/product2.jpg";
import PRODUCT3 from "../assets/images/product3.jpg";
import PRODUCT4 from "../assets/images/product4.jpg";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/reducers/productSlice";
import { Link } from "react-router-dom";
import { addItem } from "../store/reducers/cartSlice";
import { Fade } from "react-awesome-reveal";
import Laoder from "./Laoder";

const ProductShowcaseSection = ({ isCartOpen }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);
  const Products = [PRODUCT1, PRODUCT2, PRODUCT3, PRODUCT4];
  const cartItems = useSelector((state) => state.cart);

  const handleAddToCart = (product) => {
    dispatch(addItem({...product,quantity:1}));
  };

  const isProductInCart = (productId) => {
    return cartItems.some((product) => product._id === productId);
  };

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === "loading") {
    return <p><Laoder /></p>;
  }

  if (status === "failed") {
    return <p>Error: {error}</p>;
  }
  return (
    <div className={`bg-gray-600 text-white py-16 ${isCartOpen ? "blur" : ""}`}>
      <div className="container mx-auto text-center ">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8  ">
          {/* Product card 1 */}
          <Fade direction="left" damping={0.3} triggerOnce={true}>
            {products.length > 0 &&
              products.map((product) => {
                return (
                  <div className="relative flex w-full flex-col  rounded-lg border border-gray-100 bg-white shadow-md">
                    <Link
                      className="relative mx-3 mt-3 flex h-60  rounded-xl"
                      to={`/product/${product._id}`}
                    >
                      <img
                        className="object-contain max-h-full max-w-full m-auto transition transform hover:scale-105"
                        src={product.productImage}
                        alt="product image"
                      />
                      <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
                        39% OFF
                      </span>
                    </Link>
                    <div className="mt-4 px-5 pb-5">
                      <Link to={`/product/${product._id}`}>
                        <h5 className="text-xl tracking-tight text-slate-900">
                          {product.productName}
                        </h5>
                      </Link>
                      <div className="mt-2 mb-5 flex items-center justify-between">
                        <p>
                          <span className="text-3xl font-bold text-slate-900">
                            ${product.price}
                          </span>
                          <span className="text-sm text-slate-900 line-through">
                            $699
                          </span>
                        </p>
                        <div className="flex items-center">
                          <svg
                            aria-hidden="true"
                            className="h-5 w-5 text-yellow-300"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                          <svg
                            aria-hidden="true"
                            className="h-5 w-5 text-yellow-300"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                          <svg
                            aria-hidden="true"
                            className="h-5 w-5 text-yellow-300"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>
                          <svg
                            aria-hidden="true"
                            className="h-5 w-5 text-yellow-300"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                          </svg>

                          {/* Repeat the above SVGs for the stars */}
                         
                        </div>
                      </div>
                      <div
                        onClick={() =>
                          isProductInCart(product._id)
                            ? ""
                            : handleAddToCart(product)
                        }
                        className={`cursor-pointer flex items-center justify-center rounded-md bg-black px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-blue-300 ${
                          isProductInCart(product._id)
                            ? "bg-black text-gray-700 cursor-not-allowed"
                            : "hover:bg-gray-800"
                        }`}
                        disabled={isProductInCart(product._id)} // Disable the button if product is already in cart
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="mr-2 h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                        {isProductInCart(product._id)
                          ? "In Cart"
                          : "Add to Cart"}
                      </div>
                    </div>
                  </div>
                );
              })}{" "}
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default ProductShowcaseSection;
