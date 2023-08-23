import React from "react";
import {useDispatch, useSelector } from "react-redux";
import { Fade } from "react-awesome-reveal";
import { resetCart } from "../store/reducers/cartSlice";


const OrderSummary = ({setShowModal}) => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch()

  const calculateTotal = () => {
    // Calculate the total amount based on the cart items
    const total = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    return total.toFixed(2);
  };
  const handlePlaceOrder = () => {
    dispatch(resetCart())
    setShowModal(true);
  };
  return (
    <Fade>
    <div>
      <ul className="mb-4 border-2 border-black p-4">
        <h2 className="text-lg font-semibold mb-4">Order Summery</h2>
        {cartItems.map((item) => (
          <li
            key={item.id}
            className="flex justify-between items-center py-2 border-b shadow-lg "
          >
            <div>
              <span className="text-gray-700">{item.productName}</span>
              <span className="text-gray-400"> x {item.quantity}</span>
            </div>
            <span className="text-gray-700">
              ${(item.price * item.quantity).toFixed(2)}
            </span>
          </li>
        ))}
      </ul>
      <div className="flex justify-between border-t border-black   py-2">
        <span className="font-semibold">Total:</span>
        <span className="font-semibold">${calculateTotal()}</span>
      </div>
      <button
        onClick={()=>handlePlaceOrder()}
        className="mt-4 bg-black text-white py-2 px-4 rounded-md shadow-md hover:bg-gray-800"
      >
        Place Order
      </button>
    </div>
    </Fade>
  );
};

export default OrderSummary;
