import React from 'react';
import { CreditCard } from 'lucide-react';

interface StripeButtonProps {
  amount: number;
  disabled: boolean;
}

const StripeButton: React.FC<StripeButtonProps> = ({ amount, disabled }) => {
  // This function would normally redirect to your Stripe checkout
  // For a complete implementation, you'd need to connect to a backend service
  const handleStripeCheckout = () => {
    alert(`This would normally redirect to Stripe checkout for $${amount.toFixed(2)}`);
    console.log(`Stripe checkout for $${amount.toFixed(2)}`);
  };

  return (
    <button
      onClick={handleStripeCheckout}
      disabled={disabled}
      className={`flex items-center justify-center w-full gap-2 py-3 px-4 rounded-lg text-white font-medium transition-all ${
        disabled
          ? 'bg-gray-300 cursor-not-allowed dark:bg-gray-700 dark:text-gray-400'
          : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:shadow-md hover:from-blue-600 hover:to-purple-700 active:from-blue-700 active:to-purple-800'
      }`}
    >
      <CreditCard className="h-5 w-5" />
      <span>Pay with Card</span>
    </button>
  );
};

export default StripeButton;