import CarAddForm from "@/components/add-car/CarAddForm";
import ProtectedRoute from "@/components/ProtectedRoutes";

const AddCardPage = () => {
  return (
    <ProtectedRoute>
    <div className="flex justify-center">
      <div className="flex flex-col bg-blue-700 h-auto max-lg:w-[1031px] mt-[80px] mb-[80px] pt-[30px] pb-[30px] rounded-[10px] px-[100px] max-sm:px-0 max-sm:w-[400px] max-sm:mt-[50px] max-[375px]:!w-[365px] max-[320px]:!w-[310px]">
        <CarAddForm />
      </div>
      </div>
    </ProtectedRoute>
  );
};

export default AddCardPage;
