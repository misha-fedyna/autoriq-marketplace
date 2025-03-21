import Image from "next/image";
import HeroInfo from "./HeroInfo";
import HeroImage from "../../assets/images/HeroCarImg.png";

const Hero = () => {
  return (
    <section className="px-10 py-10 max-sm:px-0 max-sm:pt-0">
      <div className="flex flex-col md:flex-row items-center justify-between mb-[140px]">
        <div className="w-full md:w-1/2 mt-[60px] max-sm:mt-0">
          <div className="max-sm:flex max-sm:flex-col max-sm:items-center max-sm:bg-[url('../../assets/images/MainImgOnMob.png')] max-sm:bg-cover max-sm:bg-center max-sm:p-10 max-sm:mb-[50px]">
            <h1 className="text-center text-5xl font-bold text-blue-500 mb-[60px] w-[828px] max-sm:w-[425px] max-sm:font-semibold max-sm:text-white max-sm:mb-0">
              Ваш ідеальний автомобіль — на <br /> відстані одного кліка!
            </h1>
          </div>

          <div className="bg-gray-100 p-6 rounded-xl shadow-md mb-[100px] w-[592px] max-sm:w-[397px] max-sm:mb-[50px] max-sm:mx-3">
            <HeroInfo
              name="Для покупців"
              description="Знайдіть автомобіль мрії. Зберігай авто і контактуй із власниками."
              link="/cars"
              linkDescription="Перейти до автомобілів"
              nameStyles="text-[50px] text-black mb-[20px] font-semibold max-sm:text-[30px] max-sm:mb-[10px] max-sm:w-[200px]"
              pStyle="text-[20px] md:text-xl mb-[20px] max-sm:w-[335px]"
              btnStyle="text-base bg-black text-white px-4 py-2 rounded-lg"
            />
          </div>

          <div className="bg-blue-100 p-6 rounded-xl shadow-md w-[592px] max-sm:w-[397px] max-sm:mx-3">
            <HeroInfo
              name="Для власників авто"
              description="Укажіть своє авто і зв’яжіться із потенційними покупцями."
              link="/cars/add-car"
              linkDescription="Додати авто"
              nameStyles="text-[50px] text-blue-500 mb-[20px] font-semibold max-sm:text-[30px] max-sm:mb-[10px] max-sm:w-[300px]"
              pStyle="text-[20px] md:text-xl mb-[20px] max-sm:w-[335px]"
              btnStyle="text-base bg-blue-500 text-white px-4 py-2 rounded-lg"
            />
          </div>
        </div>

        <div className="relative hidden md:grid h-full rounded-xl place-items-center mt-[60px]">
          <div className="absolute w-[85%] aspect-square bg-blue-500 rounded-full -z-10"></div>
          <div className="absolute w-[100%] aspect-square bg-blue-500 rounded-full -z-10 opacity-30"></div>
          <Image src={HeroImage} alt="Car" className="w-[700px] z-10" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
