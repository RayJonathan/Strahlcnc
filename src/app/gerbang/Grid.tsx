import React, { useState } from 'react';
import Modal from '../Modal';

interface Item {
    id: number;
    title: string;
    image: string;
}

const Grid: React.FC = () => {
    const items: Item[] = [
        { id: 1, title: 'Contoh Design', image: '/gerbang1.png' },
        { id: 2, title: 'Contoh Design', image: '/gerbang2.png' },
        { id: 3, title: 'Contoh Design', image: '/gerbang3.png' },
        { id: 4, title: 'Contoh Design', image: '/gerbang4.png' },
        { id: 5, title: 'Contoh Design', image: '/gerbang5.png' },
        { id: 6, title: 'Contoh Design', image: '/gerbang6.png' },
        { id: 7, title: 'Contoh Design', image: '/gerbang7.png' },
        { id: 8, title: 'Contoh Design', image: '/gerbang8.png' },
        { id: 9, title: 'Contoh Design', image: '/gerbang9.png' },
        { id: 10, title: 'Contoh Design', image: '/gerbang10.png' },
    ];

    const [selectedItem, setSelectedItem] = useState<Item | null>(null);

    return (
        <div>
            <p className='text-center text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>Click to view more details</p>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12 px-4 py-6">
                {items.map(item => (
                    <div
                        key={item.id}
                        className="bg-white transition-transform duration-300 ease-in-out transform hover:scale-105 shadow-md rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 flex flex-col items-center justify-center relative cursor-pointer"
                        onClick={() => setSelectedItem(item)}
                    >
                        <div className="w-full h-32 sm:h-40 md:h-48 lg:h-56 xl:h-64 relative">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover rounded-md"
                                style={{ width: '100%', height: '100%' }}
                            />
                        </div>
                        <p className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 text-center text-gray-800 text-sm sm:text-base md:text-lg lg:text-xl">
                            {item.title}
                        </p>
                        <div className="absolute inset-x-0 bottom-[-10px] h-2 bg-lineP shadow-xl"></div>
                    </div>
                ))}
            </div>

            {selectedItem && (
                <Modal
                    image={selectedItem.image}
                    title={selectedItem.title}
                    onClose={() => setSelectedItem(null)}
                />
            )}
        </div>
    );
};

export default Grid;
