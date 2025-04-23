import CarCard from "@/components/cars/CarCard";
import SearchCar from "@/components/cars/SearchCar";
import CarFilter from "@/components/cars/CarFilter";
import Pagination from "@/components/cars/Pagination";
import Link from "next/link";

const CarsPage = () => {
    return (
        <div className="w-full min-h-screen bg-white flex flex-col items-center overflow-x-hidden px-4">
            <SearchCar />
            <div className="flex flex-col items-center w-full">
                <div className="flex w-full max-w-[1280px] gap-10 mt-[65px] mb-[50px] max-md:flex-col max-md:mt-[20px]">
                    <CarFilter />
                    <div className="flex flex-col gap-y-[20px] flex-1">
                        <Link href={`/cars/1`} className="w-full">
                            <CarCard />
                        </Link>
                        <CarCard />
                        <CarCard />
                        <CarCard />
                    </div>
                </div>
                <div className="w-full flex justify-center">
                    <Pagination />
                </div>
            </div>
        </div>
    );
};

export default CarsPage;