import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import DonationModal from './DonationModal';

const DonateButton: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="donate-container">
      <button
        onClick={openModal}
        className="flex items-center gap-2 px-6 py-3 text-white font-medium bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
        aria-label="Donate Now"
      >
        <Heart className="h-5 w-5" />
        <span>Donate Now</span>
      </button>

      {isModalOpen && <DonationModal onClose={closeModal} />}
    </div>
  );
};

export default DonateButton;