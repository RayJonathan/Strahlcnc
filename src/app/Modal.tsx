import React from 'react';

interface ModalProps {
    image: string;
    title: string;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ image, title, onClose }) => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
            <div className="relative bg-white p-4 rounded-lg shadow-lg w-full max-w-md md:max-w-lg lg:max-w-xl h-auto max-h-[90vh] overflow-auto">
                <button
                    className="absolute top-2 right-2 text-black text-2xl font-bold"
                    onClick={onClose}
                >
                    &times;
                </button>
                <div className="w-full h-full flex items-center justify-center mb-4">
                    <img
                        src={image}
                        alt={title}
                        style={{ width: '100%', height: 'auto', maxWidth: '600px', maxHeight: '400px' }} // Adjust dimensions to fit within the screen
                        className="rounded-md object-cover"
                    />
                </div>
                <p className="text-center text-black text-lg">{title}</p>
            </div>
        </div>
    );
};

export default Modal;
