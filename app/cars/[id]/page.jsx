import CaruselImg from "@/components/carinfo/CaruselImg";
import CarDetailInfo from "@/components/carinfo/CarDetailInfo";
import RightSideInfo from "@/components/carinfo/RightSideInfo";

const CarPage = () => {
  return (
    <div className="flex h-full w-ful bg-blue-100 max-sm:flex-col">
      {/* Image and detail information */}
      <div className="flex flex-col ml-[60px] mt-[40px] mb-[100px] max-sm:mx-0 max-sm:mb-[20px]">
        <CaruselImg />
        <CarDetailInfo />
      </div>
      {/* Name, price and some other information */}
      <div className="flex flex-col mt-[40px] mr-[60px] ml-[40px] max-sm:mx-0">
        <RightSideInfo />
      </div>
    </div>
  );
};

export default CarPage;
