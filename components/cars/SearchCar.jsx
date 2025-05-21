"use client";

import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Search } from "lucide-react";
import { useState } from "react";

const SearchCar = () => {
  const [loading, setLoading] = useState(false);

  const handleSearch = () => {
    setLoading(true);

    // Імітація затримки пошуку 2 секунди
    setTimeout(() => {
      setLoading(false);
      // Тут можна додати логіку пошуку або оновлення даних
    }, 2000);
  };

  return (
    <div className="flex flex-col max-sm:space-y-2 sm:flex-row justify-self-center w-full max-w-sm max-sm:w-full items-center sm:space-x-2 bg-white border-gray-400 border-2 p-2 rounded-[8px] mt-[40px] shadow-2xl h-auto sm:h-[45px]">
      <Input
        className="h-[30px] border-0 w-full"
        type="text"
        placeholder="Введіть марку або модель..."
        disabled={loading}
      />
      <Button
        className="bg-blue-700 hover:bg-blue-300 h-[30px] w-full sm:w-auto"
        onClick={handleSearch}
        disabled={loading}
      >
        {loading ? (
          <span>Завантаження...</span>
        ) : (
          <>
            <Search className="inline mr-1" /> Пошук
          </>
        )}
      </Button>
    </div>
  );
};

export default SearchCar;
