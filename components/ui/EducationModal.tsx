import React from 'react';
import { FaTimes } from 'react-icons/fa';

interface EducationModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  institution: string;
  duration: string;
  description: string;
  logo: string;
  certificate?: string | null;
}

const EducationModal: React.FC<EducationModalProps> = ({
  isOpen,
  onClose,
  title,
  institution,
  duration,
  description,
  logo,
  certificate,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-900">{title}</h2>
          <button onClick={onClose}>
            <FaTimes className="text-gray-700 hover:text-red-500" />
          </button>
        </div>
        <img src={logo} alt={institution} className="h-16 mb-4 mx-auto" />
        <p className="text-sm text-gray-700 mb-2 font-semibold">{institution}</p>
        <p className="text-sm text-gray-500 mb-4">{duration}</p>
        <p className="text-gray-700 mb-4">{description}</p>
        {certificate && (
          <img
            src={certificate}
            alt="Certificado"
            className="w-full h-auto rounded-lg border"
          />
        )}
        <button
          onClick={onClose}
          className="mt-4 bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default EducationModal;
