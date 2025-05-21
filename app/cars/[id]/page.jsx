import dynamic from "next/dynamic";

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
  return (
    <div className="flex h-full w-ful bg-blue-100 max-sm:flex-col justify-center">
      <div className="flex flex-col ml-[60px] mt-[40px] mb-[100px] max-sm:mx-0 max-sm:mb-[20px]">
        <CaruselImg />
        <CarDetailInfo />
      </div>
      <div className="flex flex-col mt-[40px] mr-[60px] ml-[40px] max-sm:mx-0">
        <RightSideInfo />
      </div>
    </div>
  );
};

export default CarPage;