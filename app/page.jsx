import Hero from "@/components/header/Hero";
import CarCard from "@/components/mainsection/CarCard";
import SearchCar from '@/components/mainsection/SearchCar'
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <Hero />
      <SearchCar />
      <div className="grid grid-cols-3"><CarCard />
      <CarCard />
      <CarCard />
      <CarCard />
      <CarCard />
      <CarCard />
      </div>
      <Link href='/cars'><Button>Дивитись всі автомобілі</Button></Link>
      
      
    </>
  );
};

export default HomePage;
