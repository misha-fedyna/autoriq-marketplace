import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Search } from "lucide-react";

const SearchCar = () => {
  return (
    <>
      <div className="w-[95%] max-w-[900px] mx-auto border-t-2 border-blue-500 text-center">
        <h1 className="font-semibold text-[50px] text-blue-500 mb-[40px] mt-[40px] max-md:text-[35px] max-sm:text-[23px] max-sm:my-[20px]">
          Знайдіть свій ідеальний автомобіль
        </h1>
      </div>

      <div className="w-full max-w-[500px] mx-auto p-2 border rounded-lg shadow-xl flex items-center justify-between gap-2 mb-[50px] max-sm:max-w-[350px] max-sm:h-[40px] max-sm:mb-[20px]">
        <Input
          type="text"
          className="w-full border-none h-full focus:outline-none text-base max-sm:text-sm"
          placeholder="Введіть марку або модель..."
        />
        <Button className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-300 px-5 max-sm:h-[30px] max-sm:px-3 max-sm:text-sm flex items-center gap-1">
          <Search className="w-4 h-4" />
          Пошук
        </Button>
      </div>
    </>
  );
};

export default SearchCar;
