import React, { useState } from 'react';
import { Smartphone } from 'lucide-react';

interface MobileMoneyButtonProps {
  amount: number;
  disabled: boolean;
}

const MobileMoneyButton: React.FC<MobileMoneyButtonProps> = ({ amount, disabled }) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showPhoneInput, setShowPhoneInput] = useState(false);

  const handleMobileMoneyCheckout = () => {
    if (!showPhoneInput) {
      setShowPhoneInput(true);
      return;
    }

    if (phoneNumber.length < 10) {
      alert('Please enter a valid phone number');
      return;
    }

    alert(`Mobile Money payment request sent to ${phoneNumber} for $${amount.toFixed(2)}`);
    setShowPhoneInput(false);
    setPhoneNumber('');
  };

  return (
    <div className="space-y-3">
      {showPhoneInput && (
        <input
          type="tel"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Enter your phone number"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
        />
      )}
      <button
        onClick={handleMobileMoneyCheckout}
        disabled={disabled}
        className={`flex items-center justify-center w-full gap-2 py-3 px-4 rounded-lg font-medium transition-all ${
          disabled
            ? 'bg-gray-300 text-gray-500 cursor-not-allowed dark:bg-gray-700 dark:text-gray-400'
            : 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700 hover:shadow-md'
        }`}
      >
        <Smartphone className="h-5 w-5" />
        <span>Pay with Mobile Money</span>
      </button>
    </div>
  );
};

export default MobileMoneyButton;