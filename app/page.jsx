import Hero from "@/components/header/Hero";
import CarCard from "@/components/mainsection/CarCard";
import SearchCar from "@/components/mainsection/SearchCar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HomePage = () => {
  return (
      <div>
        <Hero />

        <div className="w-full flex items-center justify-center flex-col">
          <SearchCar />

          <div className="grid grid-cols-1 max-[1240px]:grid-cols-1 xl:grid-cols-3 mt-4 gap-x-[30px] gap-y-[50px]">
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
            <CarCard />
          </div>

          <Link href="/cars">
            <Button className="mt-[50px] mb-[50px] bg-blue-500 w-[25rem] max-sm:w-[90%] text-[1.875rem] max-sm:text-[1.25rem] h-auto py-4 px-6 hover:bg-blue-300">
              Дивитись всі автомобілі
            </Button>
          </Link>

        </div>
      </div>
  );
};



export default HomePage;