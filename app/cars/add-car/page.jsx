import CarAddForm from "@/components/add-car/CarAddForm";

const AddCardPage = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col bg-blue-700 h-auto max-lg:w-[1031px] mt-[80px] mb-[80px] pt-[30px] pb-[30px] rounded-[10px] px-[100px] max-sm:px-0 max-sm:w-full">
        <CarAddForm />
      </div>
    </div>
  );
};

export default AddCardPage;
