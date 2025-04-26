import React from 'react';

interface PayPalButtonProps {
  amount: number;
  disabled: boolean;
}

const PayPalButton: React.FC<PayPalButtonProps> = ({ amount, disabled }) => {
  // This function would normally redirect to PayPal checkout
  // For a complete implementation, you'd need to use the PayPal SDK
  const handlePayPalCheckout = () => {
    alert(`This would normally redirect to PayPal checkout for $${amount.toFixed(2)}`);
    console.log(`PayPal checkout for $${amount.toFixed(2)}`);
  };

  return (
    <button
      onClick={handlePayPalCheckout}
      disabled={disabled}
      className={`flex items-center justify-center w-full gap-2 py-3 px-4 rounded-lg font-medium transition-all ${
        disabled
          ? 'bg-gray-300 text-gray-500 cursor-not-allowed dark:bg-gray-700 dark:text-gray-400'
          : 'bg-[#0070ba] text-white hover:bg-[#003087] hover:shadow-md'
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17.4 7.8C18.5 7.8 19.6 8.3 20.3 9.3C21 10.2 21.2 11.5 20.9 12.7C20.6 13.9 19.9 14.9 18.9 15.6C17.9 16.3 16.7 16.6 15.3 16.6H13.8L12.8 22.4H7.3L10.7 5.6H16.1C16.6 5.6 17 5.6 17.4 5.7C17.4 6.3 17.4 7 17.4 7.8Z" />
        <path d="M20.7 2.8C21.7 4.2 22 6 21.6 7.8C21.2 9.6 20.2 11.1 18.6 12.2C17.1 13.2 15.3 13.8 13.1 13.8H11.6L10.5 20.2H5L8.5 2.5H16.1C17.1 2.5 18 2.5 18.8 2.6C19.8 2.4 20.3 2.5 20.7 2.8Z" />
      </svg>
      <span>Pay with PayPal</span>
    </button>
  );
};

export default PayPalButton;