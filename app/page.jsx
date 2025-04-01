import Hero from "@/components/header/Hero";
import CarCard from "@/components/mainsection/CarCard";
import SearchCar from '@/components/mainsection/SearchCar'
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <Hero />

      <div className="w-full border-t border-[#2196f3] py-4 flex items-center justify-center flex-col">
        <SearchCar />
        <div className="grid grid-cols-1 lg:grid-cols-3 mt-4 gap-4"><CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        <CarCard />
        </div>
        <Link href='/cars'><Button className="mt-6 bg-blue-500">Дивитись всі автомобілі</Button></Link>
      </div>
    </div>
  );
};

export default HomePage;
