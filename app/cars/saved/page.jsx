import dynamic from "next/dynamic";
import ProtectedRoute from "@/components/ProtectedRoutes";

const CarCardFav = dynamic(() => import("@/components/saved/CarCardFav"), {
  loading: () => <div>Завантаження...</div>,
});

const FavoriteCars = () => {
  return (
    <ProtectedRoute>
    <div className="mt-[30px] mx-auto max-w-[1024px]">
      <h2 className="text-[50px] font-semibold mb-[3.75rem] text-left ml-[20px] max-sm:text-[30px] max-sm:mb-[30px] max-sm:text-center max-sm:ml-0 max-[320px]:text-[25px]">
        Збережені оголошення :
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 lg:gap-[6rem] mb-[50px] m-5">
        <CarCardFav />
        <CarCardFav />
        <CarCardFav />
      </div>
      </div>
    </ProtectedRoute>
  );
};

export default FavoriteCars;

