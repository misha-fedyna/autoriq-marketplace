import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Search } from "lucide-react";

const SearchCar = () => {
  return (
    <div className="flex justify-self-center w-full max-w-sm items-center space-x-2 bg-white border-gray-400 border-2 p-2 rounded-[8px] mt-[40px] shadow-2xl h-[45px]">
      <Input
        className="h-[30px] border-0"
        type="text"
        placeholder="Введіть марку або модель..."
      />
      <Button className="bg-blue-700 hover:bg-blue-300 h-[30px]">
        <Search /> Пошук
      </Button>
    </div>
  );
};

export default SearchCar;
