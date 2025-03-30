"use client";

import { Button } from "../ui/button";
import { useState } from "react";

const CarState = () => {
  const [active, setActive] = useState("Всі");

  const buttons = ["Всі", "Нові", "Вживані"];

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
