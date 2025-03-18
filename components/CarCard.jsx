import Image from "next/image";

import FuelIcon from "../assets/icons/fuelType.svg";
import MapPin from "../assets/icons/location.svg";
import Gauge from "../assets/icons/mileage.svg";
import Antenna from "../assets/icons/transmission.svg";

const CarCard = ({ car }) => {
    return (
        <div className="w-[320px] h-96 bg-slate-100 rounded-2xl shadow-lg overflow-hidden">
            <Image src={car.photo} alt={car.model} width={320} height={160} className="w-full h-40 object-cover" />
            <div className="p-4">
                <h2 className="text-lg font-semibold">{car.model} ({car.year})</h2>
                <p className="text-gray-700 text-md font-bold">
                    {car.priceUSD.toLocaleString()}$ / {car.priceUAH.toLocaleString()} ₴
                </p>
                <hr className="mt-14" />
                <div className="grid grid-cols-2 grid-rows-2 gap-2 mt-1">
                    <div className="flex items-center gap-3 p-2 rounded-lg">
                        <Image src={Gauge} alt="Mileage" width={24} height={24} />
                        <span>{car.mileage} km.</span>
                    </div>
                    <div className="flex items-center gap-3 p-2 rounded-lg">
                        <Image src={MapPin} alt="Location" width={20} height={20} />
                        <span>{car.location}</span>
                    </div>
                    <div className="flex items-center gap-3 p-2 rounded-lg">
                        <Image src={FuelIcon} alt="Fuel Type" width={20} height={20} />
                        <span>{car.fuelType}</span>
                    </div>
                    <div className="flex items-center gap-3 p-2 rounded-lg">
                        <Image src={Antenna} alt="Transmission" width={18} height={18} />
                        <span>{car.transmission}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarCard;
