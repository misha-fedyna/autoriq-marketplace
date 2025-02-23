"use client";
import { useState } from "react";

const CarSearchForm = () => {
  const [car, setCar] = useState("");

  return (
    <form className="mt-3 mx-auto max-w-2xl w-full flex flex-col md:flex-row items-center">
      <div className="w-full md:w-3/5 md:pr-2 mb-4 md:mb-0">
        <label htmlFor="car" className="sr-only">
          car
        </label>
        <input
          type="text"
          id="car"
          placeholder="Введіть марку автомобіля"
          className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring focus:ring-blue-500"
          value={car}
          onChange={(e) => setCar(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="md:ml-4 mt-4 md:mt-0 w-full md:w-auto px-6 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500"
      >
        Шукати
      </button>
    </form>
  );
};

export default CarSearchForm;
