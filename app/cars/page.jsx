import dynamic from "next/dynamic";
import Link from "next/link";

const CarCard = dynamic(() => import("@/components/cars/CarCard"), {
  loading: () => <div>Завантаження...</div>,
});
const SearchCar = dynamic(() => import("@/components/cars/SearchCar"), {
  loading: () => <div>Завантаження...</div>,
});
const CarFilter = dynamic(() => import("@/components/cars/CarFilter"), {
  loading: () => <div>Завантаження...</div>,
});
const Pagination = dynamic(() => import("@/components/cars/Pagination"), {
  loading: () => <div>Завантаження...</div>,
});

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