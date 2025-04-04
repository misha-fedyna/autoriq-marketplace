import Image from "next/image";
import { MapPin, Fuel, Gauge } from "lucide-react";
import carCardImg from "../../assets/images/DefaultCarImg.png";
import { Button } from "../ui/button";
import gearbox from "../../assets/images/gearbox.png";

const CarCard = () => {
    return (
        <div>
            <div className="border-2 border-gray-400 shadow-xl rounded-lg w-[340px]">
                <Image
                    src={carCardImg}
                    alt="car img"
                    className="w-full h-auto md:h-[12.5rem] object-cover rounded-md"
                />

                <div className="p-2">
                    <h3 className="text-[25px] font-bold">Nissan Qashqai 2018</h3>

                    <p className="text-lg md:text-xl font-bold">
                        12 200 ${" "}
                        <span className="text-gray-500 text-[15px] ml-[10px]">
              4 461 124 ₴
            </span>
                    </p>

                    <div className="flex gap-[60px] text-gray-700 text-sm md:text-lg mt-6">
                        <p className="flex items-center">
                            <Gauge className="pr-2" />
                            20 000 км
                        </p>
                        <p className="flex items-center">
                            <Fuel className="w-5 h-5 mr-1" /> Дизель, 1.6 л
                        </p>
                    </div>

                    <div className="flex gap-[95px] text-gray-700 text-sm md:text-lg mt-2">
                        <p className="flex items-center">
                            <MapPin className="w-5 h-5 mr-1 text-black" /> Львів
                            <span className="font-semibold"></span>
                        </p>
                        <p className="flex items-center">
                            <Image src={gearbox} alt="gearbox img" className="w-5 h-5" />{" "}
                            Механічна{" "}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarCard;
