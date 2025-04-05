import CaruselImg from "@/components/carinfo/CaruselImg";
import CarDetailInfo from "@/components/carinfo/CarDetailInfo";

const CarPage = () => {
  return (
    <div className="flex h-full w-full bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Image and detail information */}
      <div className="flex flex-col ml-[60px] mt-[40px] mb-[100px]">
        <CaruselImg />
        <CarDetailInfo />
      </div>
      {/* Name, price and some other information */}
      <div className="flex flex-col mt-[40px] mr-[60px] ml-[40px]">
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-[8px] shadow-lg border border-blue-100">
          Name, price and some other information
        </div>
      </div>
    </div>
  );
};

export default CarPage;
