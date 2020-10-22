import React from "react";
import StripeCheckOut from "react-stripe-checkout";

const StripeCheckOutButton = ({ price }) => {
  const priceForStripe = price * 10;
  const publishKey =
    "pk_test_51HekK9BaoSIaGTE9yA7sc2k2xXvsdeu4DPORx5lFBXlfDC8J33c0irO55aaNbq4Znbcch29vtkRs5KeluHf8GYMs00xskvNRJQ";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Succesful");
  };

  return (
    <StripeCheckOut
      label="Pay Now"
      name="CRWN Clothing Ltd"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`This its your total $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishKey}
    />
  );
};
export default StripeCheckOutButton;
