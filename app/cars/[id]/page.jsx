"use client";

import dynamic from "next/dynamic";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getAdvertisementById } from "@/app/actions/adverticment";

const CaruselImg = dynamic(() => import("@/components/carinfo/CaruselImg"), {
  loading: () => <div>Завантаження...</div>,
});
const CarDetailInfo = dynamic(() => import("@/components/carinfo/CarDetailInfo"), {
  loading: () => <div>Завантаження...</div>,
});
const RightSideInfo = dynamic(() => import("@/components/carinfo/RightSideInfo"), {
  loading: () => <div>Завантаження...</div>,
});

const CarPage = () => {
  const { id } = useParams();
  const [carData, setCarData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCarData = async () => {
      try {
        setIsLoading(true);
        const data = await getAdvertisementById(id);
        setCarData(data);
      } catch (error) {
        console.error('Error fetching car data:', error);
        setError('Failed to load car information');
      } finally {
        setIsLoading(false);
      }
    };

    if (id) {
      fetchCarData();
    }
  }, [id]);

  if (error) {
    return <div className="text-center py-4 text-red-500">{error}</div>;
  }

  if (isLoading) {
    return <div className="text-center py-4">Завантаження...</div>;
  }

  if (!carData) {
    return <div className="text-center py-4">Автомобіль не знайдено</div>;
  }

  return (
    <div className="flex h-full w-ful bg-white max-sm:flex-col justify-center">
      <div className="bg-blue-100 flex h-[100%]">
      <div className="flex flex-col ml-[60px] mt-[40px] mb-[100px] max-sm:mx-0 max-sm:mb-[20px]">
        <CaruselImg images={carData.photos} mainPhoto={carData.main_photo} />
        <CarDetailInfo carInfo={carData} />
      </div>
      <div className="flex flex-col mt-[40px] mr-[60px] ml-[40px] max-sm:mx-0">
        <RightSideInfo carInfo={carData} />
        </div></div>
    </div>
  );
};

export default CarPage;