import React, { useState } from "react";
import { Fade, Flip, Slide } from "react-awesome-reveal";
import CreditCardForm from "./CreditCardForm";
import UPIForm from "./UPIFrom";

const PaymentOptions = ({ setcheckOutstep }) => {
  const [selectedOption, setSelectedOption] = useState("");
 

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Assuming form validation is successful, move to the next step
    onComplete(selectedOption);
  };

  return (
    <>
    <Fade >
      
      <div className="p-4 border-2 border-black rounded-lg shadow-md bg-white ">
        <h2 className="text-lg font-semibold mb-4">Payment Options</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Select Payment Option
            </label>
            <div className="mt-1">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  value="creditCard"
                  checked={selectedOption === "creditCard"}
                  onChange={handleOptionChange}
                  className="form-radio"
                />
                <span className="ml-2">Credit Card</span>
              </label>
              <label className="inline-flex items-center ml-4">
                <input
                  type="radio"
                  value="UPI"
                  checked={selectedOption === "UPI"}
                  onChange={handleOptionChange}
                  className="form-radio"
                />
                <span className="ml-2">UPI</span>
              </label>
              <label className="inline-flex items-center ml-4">
                <input
                  type="radio"
                  value="COD"
                  checked={selectedOption === "COD"}
                  onChange={handleOptionChange}
                  className="form-radio"
                />
                <span className="ml-2">Cash On Delivery</span>
              </label>
            </div>
          </div>
          <div className="flex mt-6">
            <button
              type="button"
              onClick={() => {
                setcheckOutstep(1)
              }}
              className="px-4 py-2 mr-2 bg-gray-200 text-gray-700 rounded-lg font-semibold hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300"
            >
              Back
            </button>
          </div>
        </form>
      </div>
    </Fade>
    <span className={`${selectedOption === "creditCard"?'block':'hidden'}`}>
    <Fade>
    <CreditCardForm />
    </Fade>
    </span>
    <span className={`${selectedOption === "UPI"?'block':'hidden'}`}>
      <Fade>
        <UPIForm />
      </Fade>
    </span>
    </>
  );
};

export default PaymentOptions;
