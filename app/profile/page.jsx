import Image from "next/image";
import profileImg from "../../assets/images/profile.png";
import CarCard from "../../components/profile/carCards.jsx";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ProtectedRoute from "@/components/ProtectedRoutes";

const Profile = () => {
  return (
    <ProtectedRoute>
      <div className="max-w-[1280px] mx-auto px-4 md:px-8 mt-[60px] mb-[50px] max-sm:mt-[20px]">
        <div className="flex max-sm:flex-col">
          {/* Left Profile Info */}
          <div className="flex flex-col items-start w-[300px] max-sm:mx-auto">
            <h2 className="text-[50px] font-regular mb-4 text-center">Профіль</h2>

            <div className="flex mb-4">
              <Image
                  src={profileImg}
                  alt="Profile"
                  className="w-20 h-20 rounded-full border shadow-md"
              />
            </div>

            <div className="space-y-3 text-left">
              <div>
                <p className="font-bold text-[20px]">Прізвище та ім’я:</p>
                <p>Коваленко Андрій</p>
              </div>
              <div>
                <p className="font-bold text-[20px]">Пошта:</p>
                <p>andriy@gmail.com</p>
              </div>
              <div>
                <p className="font-bold text-[20px]">Телефон:</p>
                <p>0958986953</p>
              </div>
              <div>
                <p className="font-bold text-[20px]">Область:</p>
                <p>Львівська</p>
              </div>
              <div>
                <p className="font-bold text-[20px]">Місто:</p>
                <p>Львів</p>
              </div>
            </div>

            <Link href="/profile/change">
              <Button className="mt-6 w-[150px] bg-yellow-400 hover:bg-yellow-500 text-white font-semibold rounded-md text-[20px]">
                Редагувати
              </Button>
            </Link>
          </div>

          {/* Right CarCards */}
          <div className="flex-1">
            <h2 className="text-[50px] font-semibold mb-4 max-sm:text-[30px] max-sm:mt-[30px]">
              Ваші оголошення :
            </h2>
            <div className="grid grid-cols-2 max-[1050px]:grid-cols-1 gap-y-[30px]">
              <CarCard />
              <CarCard />
              <CarCard />
              <CarCard />
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
};

export default Profile;