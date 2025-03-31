import Image from "next/image";
import { MapPin, Fuel , Gauge } from 'lucide-react';

const CarCard = ({ image, title, year, priceUSD, priceUAH, km, location, fuel, transmission }) => {
    return (
        <div>
            <div className="border-2 border-black rounded-lg p-4 w-full">
                <Image
                    src={image}
                    alt={title}
                    className="w-full h-auto md:h-[12.5rem] object-cover rounded-md"
                />

                <div className="p-2">
                    <h3 className="text-md md:text-lg font-bold">{title}</h3>
                    <p className="text-gray-600 text-sm md:text-base">{year}</p>

                    <p className="text-lg md:text-xl font-bold">
                        {priceUSD}$ <span className="text-gray-500">{priceUAH} ₴</span>
                    </p>

                    <div className="flex justify-between text-gray-700 text-sm md:text-lg mt-2">
                        <p className="flex items-center"><Gauge className= "pr-2"/> {km} km</p>
                        <p className="flex items-center">
                            <Fuel className="w-5 h-5 mr-1" /> {fuel}
                        </p>
                    </div>

                    <div className="flex justify-between text-gray-700 text-sm md:text-lg mt-2">
                        <p className="flex items-center">
                            <MapPin className="w-5 h-5 mr-1 text-black" />
                            <span className="font-semibold">{location}</span>
                        </p>
                        <p className="flex items-center">⚙ {transmission}</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-start gap-2 mt-4">
                <button className="px-4 py-2 bg-blue-500 text-white rounded-md w-full md:w-auto">
                    Редагувати
                </button>
                <button className="px-4 py-2 bg-red-500 text-white rounded-md w-full md:w-auto">
                    Видалити
                </button>
            </div>
        </div>
    );
};

export default CarCard;
