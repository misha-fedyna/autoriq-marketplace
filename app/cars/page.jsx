import CarCard from "@/components/cars/CarCard";
import SearchCar from "@/components/cars/SearchCar";
import CarFilter from "@/components/cars/CarFilter";
import Pagination from "@/components/cars/Pagination";

const CarsPage = () => {
  return (
    <>
      <SearchCar />
      <div className="flex ml-[100px] mt-[65px] mb-[50px] gap-[100px]">
        <CarFilter />
        <div className="flex flex-col gap-y-[20px]">
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
          <CarCard />
        </div>
      </div>
      <div className="w-full justify-self-center">
        <Pagination />
      </div>
    </>
  );
};

export default CarsPage;
