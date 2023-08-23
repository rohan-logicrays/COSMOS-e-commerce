import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UPIForm = () => {
  const notify = () =>
    toast.success("UPI Id Added", {
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
    notify();
    e.preventDefault();
  };
  return (
    <div className="flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="bg-gradient-to-r from-orange-500 via-white to-green-500 p-4 rounded shadow-md w-96 border border-black mt-2"
      >
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">UPI ID</label>
          <input
            type="text"
            className="w-full border-gray-300 border outline rounded px-3 py-2 focus:ring focus:ring-gray-200"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 ">Amount</label>
          <input
            type="number"
            className="w-full border-gray-300 border outline rounded px-3 py-2 focus:ring focus:ring-gray-200"
          />
        </div>
        <button className="w-full bg-black text-white rounded py-2 font-semibold hover:bg-gray-800">
          Pay Now
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default UPIForm;
