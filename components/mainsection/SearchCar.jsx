import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Search } from "lucide-react";

const SearchCar = () => {
  return (
    <>
      <div className="w-[1350px] max-sm:w-[400px] border-t-2 border-blue-500 justify-items-center">
        <h1 className="font-semibold text-[50px] text-blue-500 mb-[40px] mt-[40px] max-sm:text-[23px] max-sm:my-[20px]">
          Знайдіть свій ідеальний автомобіль
        </h1>
      </div>
      <div className="w-[500px] p-2 border rounded-lg shadow-xl flex items-center justify-between gap-2 mb-[50px] max-sm:w-[350px] max-sm:h-[40px] max-sm:mb-[20px]">
        <Input
          type="text"
          className="w-full max-sm:w-[300px] border-none h-full focus:outline-none"
          placeholder="Введіть марку або модель..."
        />
        <Button className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-300 px-5 max-sm:h-[30px] max-sm:px-3">
          <Search /> Пошук
        </Button>
      </div>
    </>
  );
};

export default SearchCar;
