import { mockCars } from "@/mockCarsData";
import CarCard from "../CarCard";

const CarsContainer = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-wrap justify-around gap-10">
                {mockCars.map((car, i) => (
                    <CarCard key={i} car={car} />
                ))}
            </div>
        </div>
    );
};

export default CarsContainer;
