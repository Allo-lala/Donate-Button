import React from 'react';

interface DonationAmountProps {
  value: number;
  isSelected: boolean;
  onSelect: (value: number) => void;
}

const DonationAmount: React.FC<DonationAmountProps> = ({ value, isSelected, onSelect }) => {
  return (
    <button
      className={`py-3 px-4 rounded-lg text-center border transition-all ${
        isSelected 
          ? 'border-blue-500 bg-purple-50 text-blue-600 dark:bg-blue-900 dark:bg-opacity-20 dark:text-blue-300' 
          : 'border-gray-300 text-gray-600 hover:border-gray-400 dark:border-gray-600 dark:text-gray-400 dark:hover:border-gray-500'
      }`}
      onClick={() => onSelect(value)}
    >
      ${value}
    </button>
  );
};

export default DonationAmount;