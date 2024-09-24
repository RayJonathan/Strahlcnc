import Image from 'next/image';

interface Item {
    id: number;
    title: string;
    image: string;
}

const Grid: React.FC = () => {
    const items: Item[] = [
        { id: 1, title: 'Product Design', image: '/design/1.png' },
        { id: 2, title: 'Product Design', image: '/design/2.png' },
        { id: 3, title: 'Product Design', image: '/design/3.png' },
        { id: 4, title: 'Product Design', image: '/design/4.png' },
        { id: 5, title: 'Product Design', image: '/design/5.png' },
        { id: 6, title: 'Product Design', image: '/design/6.png' },
        { id: 7, title: 'Product Design', image: '/design/7.png' },
        { id: 8, title: 'Product Design', image: '/design/8.png' },
        { id: 9, title: 'Product Design', image: '/design/9.png' },
        { id: 10, title: 'Product Design', image: '/design/10.png' },
        { id: 11, title: 'Product Design', image: '/design/11.png' },
        { id: 12, title: 'Product Design', image: '/design/12.png' },
        { id: 13, title: 'Product Design', image: '/design/13.png' },
        { id: 14, title: 'Product Design', image: '/design/14.png' },
        { id: 15, title: 'Product Design', image: '/design/15.png' },
    ];

    return (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 2xl:gap-20 md:gap-20 gap-4 px-4 py-6">
            {items.map(item => (
                <div key={item.id} className="bg-grayProduct transition-transform duration-300 ease-in-out transform hover:scale-105 shadow-md rounded-t-xl p-4 flex flex-col items-center justify-center relative">
                    <div className="w-40 h-32 relative">
                        <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            className="rounded-md object-cover"
                        />
                    </div>
                    <p className="mt-2 text-center text-white">{item.title}</p>
                    {/* Section putih dengan bayangan */}
                    <div className="absolute inset-x-0 bottom-[-10px] h-2 bg-lineP shadow-xl"></div>
                </div>
            ))}
        </div>

    );
};

export default Grid;
