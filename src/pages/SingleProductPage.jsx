import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleProduct } from "../store/reducers/productSlice";
import { addItem } from "../store/reducers/cartSlice";
import Loader from "../components/Laoder";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import InnerImageZoom from "react-inner-image-zoom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductShowcaseSection from "../components/ProductShowcaseSection";
import SimpleImageSlider from "react-simple-image-slider";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className={className}
      style={{ ...style, color: "black" }}
      onClick={onClick}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M8.25 4.5l7.5 7.5-7.5 7.5"
      />
    </svg>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
      style={{ ...style, color: "black" }}
      onClick={onClick}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 19.5L8.25 12l7.5-7.5"
      />
    </svg>
  );
}

const SingleProductPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.products.singleProduct);
  const status = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);
  const cartItems = useSelector((state) => state.cart);
  const [quantity, setQuantity] = useState(1);

  const isProductInCart = (productId) => {
    return cartItems.some((product) => product._id === productId);
  };
  const handleAddToCart = (product) => {
    dispatch(addItem({ ...product, quantity: Number(quantity) }));
  };

  const settings = {
    customPaging: function (i) {
      return (
        <a>
          <img src={product.productImage}   />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const [isLoading, setIsLoading] = useState(true);
  const numberOptions = Array.from({ length: 8 }, (_, index) => index + 1);
  useEffect(() => {
    dispatch(fetchSingleProduct(productId)).then(() => {
      setIsLoading(false);
    });
  }, [dispatch, productId]);

  if (isLoading) {
    return <Loader />;
  }

  if (status === "failed") {
    return <p>Error: {error}</p>;
  }

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <>
      <div className="bg-gray-100 py-16">
        <section className="pt-12 pb-24 bg-blueGray-100 rounded-b-10xl overflow-hidden">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap -mx-4">
              <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
                <div className="flex  flex-wrap items-center justify-between lg:justify-start lg:items-start xl:items-center">
                  <div className="w-full  px-4 ">
                    <Slider {...settings}>
                      <div>
                        <InnerImageZoom
                          src={product.productImage}
                          zoomSrc={product.productImage}
                          className="mb-5 object-contain max-h-full max-w-full m-auto"
                          zoomScale={1.4}
                          hideHint={true}
                        />
                      </div>
                      <div>
                        <InnerImageZoom
                          src={product.productImage}
                          zoomSrc={product.productImage}
                          className="mb-5"
                          zoomScale={1.4}
                          hideHint={true}
                        />
                      </div>
                      <div>
                        <InnerImageZoom
                          src={product.productImage}
                          zoomSrc={product.productImage}
                          className="mb-5"
                          zoomScale={1.4}
                          hideHint={true}
                        />
                      </div>
                      <div>
                        <InnerImageZoom
                          src={product.productImage}
                          zoomSrc={product.productImage}
                          className="mb-5"
                          zoomScale={1.4}
                          hideHint={true}
                        />
                      </div>
                    </Slider>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-4">
                <div className="max-w-md mb-6">
                  <h2 className="mt-6 mb-4 text-3xl md:text-7xl lg:text-3xl font-heading font-medium">
                    {product.productName}
                  </h2>
                  <p className="flex items-center mb-6">
                    <span className="mr-2 text-sm text-blue-500 font-medium">
                      $
                    </span>
                    <span className="text-3xl text-blue-500 font-medium">
                      {product.price}
                    </span>
                  </p>
                  <p className="text-lg text-gray-400">{product.discription}</p>
                </div>
                <div className="flex mb-6 items-center">
                  <div className="inline-flex mr-4">
                    <button className="mr-1">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 7.91679H12.4167L10 0.416779L7.58333 7.91679H0L6.18335 12.3168L3.81668 19.5835L10 15.0835L16.1834 19.5835L13.8167 12.3168L20 7.91679Z"
                          fill="#FFFF00"
                        ></path>
                      </svg>
                    </button>
                    <button className="mr-1">
                      <svg
                        width="20"
                        height="20"
                        viewbox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 7.91679H12.4167L10 0.416779L7.58333 7.91679H0L6.18335 12.3168L3.81668 19.5835L10 15.0835L16.1834 19.5835L13.8167 12.3168L20 7.91679Z"
                          fill="#FFFF00"
                        ></path>
                      </svg>
                    </button>
                    <button className="mr-1">
                      <svg
                        width="20"
                        height="20"
                        viewbox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 7.91679H12.4167L10 0.416779L7.58333 7.91679H0L6.18335 12.3168L3.81668 19.5835L10 15.0835L16.1834 19.5835L13.8167 12.3168L20 7.91679Z"
                          fill="#FFFF00"
                        ></path>
                      </svg>
                    </button>
                    <button className="mr-1">
                      <svg
                        width="20"
                        height="20"
                        viewbox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 7.91679H12.4167L10 0.416779L7.58333 7.91679H0L6.18335 12.3168L3.81668 19.5835L10 15.0835L16.1834 19.5835L13.8167 12.3168L20 7.91679Z"
                          fill="#FFFF00"
                        ></path>
                      </svg>
                    </button>
                    <button>
                      <svg
                        width="20"
                        height="20"
                        viewbox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 7.91679H12.4167L10 0.416779L7.58333 7.91679H0L6.18335 12.3168L3.81668 19.5835L10 15.0835L16.1834 19.5835L13.8167 12.3168L20 7.91679Z"
                          fill="#C1C9D3"
                        ></path>
                      </svg>
                    </button>
                  </div>
                  <span className="text-md text-gray-400">4.59</span>
                </div>
                <div className="mb-6">
                  <h4 className="mb-3 font-heading font-medium">
                    <span>Color:</span>
                    <span className="text-gray-400">Silver</span>
                  </h4>
                  <button className="inline-flex items-center justify-center p-1 rounded-full border border-gray-300">
                    <div className="w-6 h-6 rounded-full bg-white"></div>
                  </button>
                  <button className="inline-flex items-center justify-center p-1 rounded-full border border-transparent">
                    <div className="w-6 h-6 rounded-full bg-orange-800"></div>
                  </button>
                  <button className="inline-flex items-center justify-center p-1 rounded-full border border-transparent">
                    <div className="w-6 h-6 rounded-full bg-blue-900"></div>
                  </button>
                  <button className="inline-flex items-center justify-center p-1 rounded-full border border-transparent">
                    <div className="w-6 h-6 rounded-full bg-yellow-500"></div>
                  </button>
                </div>
                <div className="mb-10">
                  <h4 className="mb-3 font-heading font-medium">Qty:</h4>
                  <select
                    value={quantity}
                    onChange={e=>setQuantity(e.target.value)}
                    className="px-3 py-2 border rounded-lg border-1 border-blue-300 focus:outline-none focus:border-blue-500"
                  >
                    {numberOptions.map((number) => (
                      <option key={number} value={number}>
                        {number}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-wrap -mx-2 mb-12">
                  <div
                    onClick={() =>
                      isProductInCart(product._id)
                        ? ""
                        : handleAddToCart(product)
                    }
                    className={`cursor-pointer flex items-center justify-center rounded-xl    bg-slate-900 py-4 px-2 leading-8 font-heading font-medium tracking-tighter text-xl text-center text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 w-full md:w-2/3 px-2 mb-2 md:mb-0 ${
                      isProductInCart(product._id)
                        ? "bg-gray-300 text-gray-700 cursor-not-allowed"
                        : "hover:bg-gray-700"
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
                    {isProductInCart(product._id) ? "In Cart" : "Add to Cart"}
                  </div>
                  <div className="w-full md:w-1/3 px-2">
                    <button
                      className="flex w-full py-4 px-2 items-center justify-center leading-8 font-heading font-medium tracking-tighter text-xl text-center bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-xl"
                      href="#"
                    >
                      <span className="mr-2">Buy Now</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ProductShowcaseSection />
      </div>
    </>
  );
};

export default SingleProductPage;
