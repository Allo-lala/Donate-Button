import React, { useEffect } from 'react';

interface PayPalButtonProps {
  amount: number;
  disabled: boolean;
}

declare global {
  interface Window {
    paypal?: any;
  }
}

const PayPalButton: React.FC<PayPalButtonProps> = ({ amount, disabled }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://www.paypal.com/sdk/js?client-id=${import.meta.env.VITE_PAYPAL_CLIENT_ID}&currency=USD`;
    script.async = true;
    script.onload = () => {
      if (window.paypal) {
        window.paypal.Buttons({
          createOrder: (_: any, actions: any) => {
            return actions.order.create({
              purchase_units: [{
                amount: {
                  value: amount.toString()
                }
              }]
            });
          },
          onApprove: async (_: any, actions: any) => {
            const order = await actions.order.capture();
            console.log('Payment completed', order);
            alert('Payment successful!');
          },
          onError: (err: any) => {
            console.error('PayPal error:', err);
            alert('Payment failed. Please try again.');
          }
        }).render('#paypal-button-container');
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [amount]);

  return (
    <div 
      id="paypal-button-container"
      className={disabled ? 'opacity-50 pointer-events-none' : ''}
    />
  );
};

export default PayPalButton;