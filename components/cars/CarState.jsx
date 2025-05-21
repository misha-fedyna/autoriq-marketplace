"use client";

import { Button } from "../ui/button";
import { useState, useEffect } from "react";

const CarState = () => {
  const [active, setActive] = useState("Всі");
  const [loading, setLoading] = useState(true);

  const buttons = ["Всі", "Нові", "Вживані"];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); // затримка 1 секунда
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="w-[250px] h-[40px] flex items-center justify-center text-gray-500">
        Завантаження...
      </div>
    );
  }

  return (
    <div className="flex space-x-[10px] w-[250px] mb-[20px]">
      {buttons.map((button) => (
        <Button
          key={button}
          onClick={() => setActive(button)}
          className={`rounded-full text-[15px] ${
            active === button
              ? "bg-blue-700 hover:bg-blue-300"
              : "bg-transparent text-black border-black border-[1px] hover:bg-blue-300 hover:text-white hover:border-0"
          }`}
        >
          {button}
        </Button>
      ))}
    </div>
  );
};

export default CarState;
