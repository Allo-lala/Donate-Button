import React, { useState } from 'react';
import { Smartphone } from 'lucide-react';


interface MobileMoneyButtonProps {
  amount: number;
  disabled: boolean;
}

type Provider = 'mtn' | 'airtel' | null;

const MobileMoneyButton: React.FC<MobileMoneyButtonProps> = ({ amount, disabled }) => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [showPhoneInput, setShowPhoneInput] = useState<boolean>(false);
  const [provider, setProvider] = useState<Provider>(null);

  const handleMobileMoneyCheckout = () => {
    if (!showPhoneInput) {
      setShowPhoneInput(true);
      return;
    }

    if (!phoneNumber || phoneNumber.length < 10) {
      alert('Please enter a valid phone number');
      return;
    }

    if (!provider) {
      alert('Please select a mobile money provider');
      return;
    }

    // Here you would integrate with your mobile money API
    alert(`${provider.toUpperCase()} Mobile Money payment request sent to ${phoneNumber} for $${amount.toFixed(2)}`);
    setShowPhoneInput(false);
    setPhoneNumber('');
    setProvider(null);
  };

  return (
    <div className="space-y-3">
      {showPhoneInput && (
        <>
          <div className="flex gap-2 mb-2">
            <button
              onClick={() => setProvider('mtn')}
              className={`flex items-center justify-center gap-2 flex-1 py-2 px-4 rounded-lg font-medium transition-all ${
                provider === 'mtn'
                  ? 'bg-yellow-400 text-yellow-900'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300'
              }`}
            >
              {/* <img src="/mtn-logo.png" alt="MTN Logo" className="w-10 h-10" /> */}

              <span>MTN Money</span>
            </button>

            <button
              onClick={() => setProvider('airtel')}
              className={`flex items-center justify-center gap-2 flex-1 py-2 px-4 rounded-lg font-medium transition-all ${
                provider === 'airtel'
                  ? 'bg-red-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300'
              }`}
            >
              {/* <img src="/airtel-logo.png" alt="Airtel Logo" className="w-10 h-10" /> */}

              <span>Airtel Money</span>
            </button>
          </div>

          <div className="relative">
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Enter phone number (e.g., 0771234567)"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
            />
          </div>
        </>
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
        <span>{showPhoneInput ? 'Complete Payment' : 'Pay with Mobile Money'}</span>
      </button>
    </div>
  );
};

export default MobileMoneyButton;
