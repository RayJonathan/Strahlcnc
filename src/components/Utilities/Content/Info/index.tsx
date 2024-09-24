import { Audiowide } from 'next/font/google'

const audiowide = Audiowide({
    subsets: ['latin'],
    weight: '400'
})

function Info() {
    return (
        <div id="info" className="shadow-lg shadow-gray-300">
            <div className="grid 2xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1">
                <div className="bg-grayCustom p-16 flex flex-col justify-center min-h-[300px]">
                    <p className={`${audiowide.className} text-xl sm:text-2xl md:text-3xl lg:text-3xl 2xl:text-3xl text-white 2xl:text-left lg:text-left md:text-left sm:text-left text-center`}>STRAHL CNC</p>
                    <div className="pt-8 sm:pt-10 md:pt-16">
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl 2xl:text-2xl 2xl:text-justify lg:text-justify md:text-justify sm:text-justify text-center text-white">
                            merupakan perusahaan yang bergerak di bidang solusi pembuatan dan
                            fabrikasi terdepan menggunakan teknologi CNC (Computerized Numerical
                            Control).
                        </p>
                    </div>
                </div>
                <div className="relative w-full min-h-[300px] flex items-center justify-center">
                    <img
                        src="/balkon.webp"
                        alt="Cover Image"
                        className="w-full h-full object-cover"
                        style={{ width: '100%', height: '100%' }}
                    />
                </div>
            </div>
            <div className="grid 2xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 2xl:pt-0 lg:pt-0 md:pt-0 sm:pt-0 pt-4">
                <div className="relative w-full min-h-[300px] flex items-center justify-center">
                    <img
                        src="/partisi.webp"
                        alt="Partisi Image"
                        className="w-full h-full object-cover"
                        style={{ width: '100%', height: '100%' }}
                    />
                </div>
                <div className="bg-white p-16 flex flex-col justify-center min-h-[300px]">
                    <p className={`${audiowide.className} text-xl sm:text-2xl md:text-3xl lg:text-3xl 2xl:text-3xl text-grayCustom 2xl:text-right lg:text-right md:text-right sm:text-right text-center`}>QUALITY & SERVICE</p>
                    <div className="pt-8 sm:pt-10 md:pt-16">
                        <p className="text-base sm:text-lg md:text-xl lg:text-2xl 2xl:text-2xl 2xl:text-right lg:text-right md:text-right sm:text-right text-center text-grayCustom">
                            Kami menawarkan berbagai layanan pemotongan, pengukiran, dan pengerjaan presisi tinggi untuk berbagai macam material mulai dari logam, kayu, hingga akrilik.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Info;
