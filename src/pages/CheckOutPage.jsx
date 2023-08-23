import React, { useState } from "react";
import CartItems from "../components/CartItems";
import ShippingInformation from "../components/ShippingInformation";
import PaymentOptions from "../components/PaymentOptions";
import OrderSummary from "../components/OrderSummary";
import { Fade } from "react-awesome-reveal";
import ThankYouModal from "../components/ThankYouModal";

const CheckoutPage = () => {
  const [checkOutstep, setcheckOutstep] = useState(1);
  const [showModal, setShowModal] = useState(false);
  
  return (
    <div className="container mx-auto py-16 bg-transparent px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-semibold mb-4">Checkout</h2>
      {checkOutstep === 2 ? (
        <div className="flex flex-col sm:flex-row justify-between">
          <div className="w-full sm:w-1/2 mr-0 sm:mr-4 mb-4 sm:mb-0">
            <PaymentOptions key="payment" setcheckOutstep={setcheckOutstep} />
          </div>
          <div className="w-full sm:w-1/2 ml-0 sm:ml-4">
            <OrderSummary setShowModal={setShowModal} />
          </div>
        </div>
      ) : (
        <Fade>
          <div className="flex flex-col sm:flex-row">
            <CartItems />
            <ShippingInformation setcheckOutstep={setcheckOutstep} />
          </div>
        </Fade>
      )}

      <ThankYouModal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
};

export default CheckoutPage;
