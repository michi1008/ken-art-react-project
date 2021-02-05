import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51I8btMGaJApZHHGTc0YZli8NWC1be4ANUh3mS0MQGziKgqbnDCMQqGPG9Yv1pdlG5F2rO1BMhNKfgtKnWf4oGsqO00s63WQJmC';
  const onToken = token => {
    console.log(token);
    alert('Payment Successful')
  }
  return (
    <StripeCheckout
      label='Pay Now'
      name='Ken Collage Art'
      billingAddress
      shippingAddress
      image='https://firebasestorage.googleapis.com/v0/b/ken-lange-digital-collage-art.appspot.com/o/favicon-32x32.png?alt=media&token=4d607263-98aa-4f76-99e1-00d5d357d3e3'
      description={`Your total is $${price} `}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
};

export default StripeCheckoutButton;

