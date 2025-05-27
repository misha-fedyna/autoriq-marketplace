"use client";
import dynamic from "next/dynamic";
import ProtectedRoute from "@/components/ProtectedRoutes";
import { useEffect, useState } from "react";

const CarCardFav = dynamic(() => import("@/components/saved/CarCardFav"), {
  loading: () => <div>Завантаження...</div>,
});

const FavoriteCars = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const updateFavorites = () => {
      const favs = JSON.parse(localStorage.getItem("favoriteCars") || "[]");
      setFavorites(favs);
    };
    updateFavorites();
    window.addEventListener("favoriteChanged", updateFavorites);
    return () => {
      window.removeEventListener("favoriteChanged", updateFavorites);
    };
  }, []);

  return (
    <ProtectedRoute>
      <div className="mt-[30px] mx-auto max-w-[1024px]">
        <h2 className="text-[50px] font-semibold mb-[3.75rem] text-left ml-[20px] max-sm:text-[30px] max-sm:mb-[30px] max-sm:text-center max-sm:ml-0 max-[320px]:text-[25px]">
          Збережені оголошення :
        </h2>

        <CarCardFav favorites={favorites} />
      </div>
    </ProtectedRoute>
  );
};

export default FavoriteCars;

