import Image from "next/image";
import Link from "next/link";
import { MapPin, Fuel, Gauge } from "lucide-react";
import carCardImg from "../../assets/images/DefaultCarImg.png";
import gearbox from "../../assets/images/gearbox.png";
import { useEffect, useState } from "react";

const CarCardFav = ({ favorites: favoritesProp }) => {
  const [favorites, setFavorites] = useState(favoritesProp ?? []);

  useEffect(() => {
    if (favoritesProp === null) {
      const updateFavorites = () => {
        const favs = JSON.parse(localStorage.getItem("favoriteCars") || "[]");
        setFavorites(favs);
      };
      updateFavorites();
      window.addEventListener("favoriteChanged", updateFavorites);
      return () => {
        window.removeEventListener("favoriteChanged", updateFavorites);
      };
    } else {
      setFavorites(favoritesProp);
    }
  }, [favoritesProp]);

  if (favorites.length === 0) {
    return <div className="text-center text-xl py-10">Немає збережених авто</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {favorites.map((car) => (
        <Link key={car.id} href={`/cars/${car.id}`} className="block group">
          <div className="border-2 border-gray-400 shadow-xl rounded-lg w-full max-w-[400px] mx-auto mb-6 hover:shadow-2xl transition-shadow duration-200 cursor-pointer">
            <Image
              src={car.main_photo || carCardImg}
              alt="car img"
              className="w-full h-[200px] object-cover rounded-md"
              width={400}
              height={200}
              loading="lazy"
            />
            <div className="p-2 pointer-events-none group-hover:pointer-events-none">
              <h3 className="xl:text-[25px] text-[1rem] font-bold">{car.title}</h3>
              <p className="text-lg md:text-xl font-bold">
                {car.price} $
                <span className="text-gray-500 xl:text-[1rem] text-[0.725rem] ml-[10px]">
                  {car.price * 41} ₴
                </span>
              </p>
              <div className="flex gap-[60px] text-gray-700 xl:text-[1rem] text-[0.725rem] mt-6">
                <p className="flex items-center">
                  <Gauge className="pr-2" />
                  {car.mileage} км
                </p>
                <p className="flex items-center">
                  <Fuel className="w-5 h-5 mr-1" /> {car.fuel_type_display}, {car.engine_capacity} л
                </p>
              </div>
              <div className="flex gap-[4.75rem] sm:gap-[2rem] md:gap-[4.25rem] lg:gap-[4.25rem] xl:gap-[95px] text-gray-700 text-sm md:text-lg mt-2">
                <p className="flex items-center">
                  <MapPin className="w-5 h-5 mr-1 text-black xl:text-[1rem] text-[0.725rem]" /> {car.city}
                </p>
                <p className="flex items-center xl:text-[1rem] text-[0.725rem]">
                  <Image src={gearbox} alt="gearbox img" className="w-5 h-5" loading="lazy" /> {car.transmission_display}
                </p>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CarCardFav;
