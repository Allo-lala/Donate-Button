import React, { useState } from 'react';
import { X } from 'lucide-react';
import DonationAmount from './DonationAmount';
import PayPalButton from './PayPalButton';
import MobileMoneyButton from './MobileMoneyButton';

interface DonationModalProps {
  onClose: () => void;
}

const DonationModal: React.FC<DonationModalProps> = ({ onClose }) => {
  const [amount, setAmount] = useState<number>(10);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [isCustom, setIsCustom] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const presetAmounts = [5, 10, 25, 50, 100];

  const handleAmountSelect = (value: number) => {
    setAmount(value);
    setIsCustom(false);
    setError('');
  };

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCustomAmount(value);
    
    const numValue = parseFloat(value);
    if (!value) {
      setError('Please enter an amount');
    } else if (isNaN(numValue) || numValue <= 0) {
      setError('Please enter a valid amount');
    } else {
      setAmount(numValue);
      setError('');
    }
  };

  const activateCustomAmount = () => {
    setIsCustom(true);
    setAmount(0);
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      onClick={handleBackdropClick}
    >
      <div 
        className="bg-white dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-md mx-4 transform transition-all animate-fadeIn"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-white">Make a Donation</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 focus:outline-none"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6">
          <p className="mb-4 text-gray-600 dark:text-gray-300">
            Choose an amount to donate. Your contribution helps us continue our mission.
          </p>
          
          <div className="mb-6">
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Select Amount
            </p>
            <div className="grid grid-cols-3 gap-2 mb-4">
              {presetAmounts.map(value => (
                <DonationAmount
                  key={value}
                  value={value}
                  isSelected={!isCustom && amount === value}
                  onSelect={handleAmountSelect}
                />
              ))}
              <button
                className={`py-3 px-4 rounded-lg text-center border transition-all ${
                  isCustom 
                    ? 'border-blue-500 bg-purple-50 text-blue-600 dark:bg-blue-900 dark:bg-opacity-20 dark:text-blue-300' 
                    : 'border-gray-300 text-gray-600 hover:border-gray-400 dark:border-gray-600 dark:text-gray-400 dark:hover:border-gray-500'
                }`}
                onClick={activateCustomAmount}
              >
                Custom
              </button>
            </div>

            {isCustom && (
              <div className="mb-4">
                <div className="relative">
                  <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">$</span>
                  <input
                    type="text"
                    value={customAmount}
                    onChange={handleCustomAmountChange}
                    className="w-full py-3 px-8 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-700 dark:text-white"
                    placeholder="Enter amount"
                    autoFocus
                  />
                </div>
                {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
              </div>
            )}

            <div className="text-xl font-medium text-center my-4">
              You will donate: <span className="text-blue-600 dark:text-blue-400">${(isCustom && !customAmount) ? '0.00' : amount.toFixed(2)}</span>
            </div>
          </div>

          <div className="space-y-3">
            <PayPalButton amount={amount} disabled={amount <= 0 || !!error} />
            <MobileMoneyButton amount={amount} disabled={amount <= 0 || !!error} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationModal;