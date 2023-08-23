import React, { useState } from "react";
import { useSelector } from "react-redux";

const ShippingInformation = ({ setcheckOutstep }) => {
  const cartItems = useSelector((state) => state.cart);
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Assuming form validation is successful, move to the next step
    setcheckOutstep(2);
  };

  return (
    <div className=" w-full md:w-2/5 lg:w-2/5 md:ml-4 lg:ml-4 h-max">
      <h2 className="text-lg font-semibold mb-4">Shipping Information</h2>
      <form
        onSubmit={handleSubmit}
        className="border-2 rounded-lg shadow-md p-4 "
      >
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="mt-1 p-2 border-2 rounded-lg w-full border-gray-400"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="address"
            className="block font-semibold text-gray-700 mb-1"
          >
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="mt-1 p-2 border-2 rounded-lg w-full border-gray-400"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="city"
            className="block font-semibold text-gray-700 mb-1"
          >
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="mt-1 p-2 border-2 rounded-lg w-full border-gray-400"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="postalCode"
            className="block font-semibold text-gray-700 mb-1"
          >
            Postal Code
          </label>
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            className="mt-1 p-2 border-2 rounded-lg w-full border-gray-400"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="country"
            className="block font-semibold text-gray-700 mb-1"
          >
            Country
          </label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="mt-1 p-2 border-2 rounded-lg w-full border-gray-400"
            required
          />
        </div>
        <div className="mt-6">
          <button
            type="submit"
            disabled={cartItems.length === 0}
            className={`${
              cartItems.length === 0 ? "cursor-not-allowed" : ""
            } px-4 py-2 bg-black text-white rounded-lg font-semibold hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300`}
          >
            Continue to Payment
          </button>
        </div>
      </form>
    </div>
  );
};

export default ShippingInformation;
