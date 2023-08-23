import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreditCardForm = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardHolder, setCardHolder] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCvv] = useState("");

  const notify = () =>
    toast.success("Credit Card Added", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const handleSubmit = (e) => {
    notify()
    e.preventDefault();
    console.log("Form submitted:", {
      cardNumber,
      cardHolder,
      expirationDate,
      cvv,
    });
  };

  return (
    <div className="w-full max-w-md mx-auto mt-2">
      <form
        onSubmit={handleSubmit}
        className="bg-gradient-to-r from-purple-500 via-white to-blue-500  border rounded-lg shadow-md p-3"
      >
        <div className="mb-2">
          <label className="block text-black text-sm font-medium mb-1">
            Card Number
          </label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md outline focus:border-blue-500"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            maxLength="16"
          />
        </div>
        <div className="mb-2">
          <label className="block text-black text-sm font-medium mb-1">
            Card Holder
          </label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-md outline focus:border-blue-500"
            value={cardHolder}
            onChange={(e) => setCardHolder(e.target.value)}
          />
        </div>
        <div className="flex mb-2">
          <div className="w-1/2 mr-2">
            <label className="block text-black text-sm font-medium mb-1">
              Expiration Date
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md outline focus:border-blue-500"
              value={expirationDate}
              onChange={(e) => setExpirationDate(e.target.value)}
              maxLength="5"
            />
          </div>
          <div className="w-1/2 ml-2">
            <label className="block text-black text-sm font-medium mb-1">
              CVV
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 outline rounded-md  focus:border-blue-500"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              maxLength="3"
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-black hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-md"
        >
          Submit
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default CreditCardForm;
