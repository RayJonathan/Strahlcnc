interface ProductsProps {
    size: 'large' | 'normal';
    category: string;
    imageSrc: string;
}

const Products: React.FC<ProductsProps> = ({ size, imageSrc, category }) => {
    return (
        <div id="products" className={`relative transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-400 rounded-t-3xl overflow-hidden ${size === 'large' ? 'col-span-2 h-64' : 'h-64'} bg-white`}>
            <div className="w-full h-full flex items-center justify-center">
                <img src={imageSrc} alt="Product Image" className="max-w-full max-h-full object-contain" />
            </div>
            <div className="absolute bottom-0 left-0 w-full p-2 sm:p-1 md:p-1 2xl:p-1 text-white bg-black text-center">
                <p className="text-base sm:text-base md:text-xl 2xl:text-2xl">{category}</p>
            </div>
        </div>
    );
};

export default Products;
