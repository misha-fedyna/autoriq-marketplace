import Image from "next/image";
import HeroInfo from "./HeroInfo";
import HeroImage from "../../assets/images/HeroCarImg.png";

const Hero = () => {
  return (
      <section className="px-10 max-sm:px-0 max-sm:pt-0">
        <div className="flex justify-center">
          <div className="flex flex-col md:flex-row items-center mb-[100px] max-sm:mb-[50px] max-w-[1280px] w-full">


            <div className="w-full md:w-1/2 mt-[60px] max-sm:mt-0">

              <div className="max-sm:flex max-sm:flex-col max-sm:items-center max-sm:bg-[url('../../assets/images/MainImgOnMob.png')] max-sm:bg-cover max-sm:bg-center max-sm:w-full max-sm:min-h-[300px] max-sm:justify-center max-sm:p-4">
                <h1 className="text-center text-5xl font-bold text-blue-500 mb-[60px]  lg:w-[828px]  w-[37.5rem] max-sm:w-full max-sm:font-semibold max-sm:text-white max-sm:mb-0 max-sm:text-[28px] max-sm:leading-tight  px-4">
                  Ваш ідеальний автомобіль — на <br /> відстані одного кліка!
                </h1>
              </div>

              {/* First HeroInfo block */}
              <div className="flex justify-center max-sm:mb-[30px]">
                <div className="bg-gray-100 p-6 rounded-xl shadow-md mb-[30px] w-full max-w-[592px] md:w-[90%] max-sm:px-4">
                  <HeroInfo
                      name="Для покупців"
                      description="Знайдіть автомобіль мрії. Зберігай авто і контактуй із власниками."
                      link="/cars"
                      linkDescription="Перейти до автомобілів"
                      nameStyles="text-[32px] text-black mb-[20px] font-semibold max-sm:text-[24px] max-sm:mb-[10px] max-sm:w-full"
                      pStyle="text-[18px] md:text-xl mb-[20px] max-sm:text-[16px] max-sm:w-full"
                      btnStyle="text-base bg-black text-white px-4 py-2 rounded-lg"
                  />
                </div>
              </div>


              {/* Second HeroInfo block */}
              <div className="flex justify-center max-sm:mb-[30px]">
                <div className="bg-blue-100 p-6 rounded-xl shadow-md w-full max-w-[592px] md:w-[90%] max-sm:px-4">
                  <HeroInfo
                      name="Для власників авто"
                      description="Укажіть своє авто і зв’яжіться із потенційними покупцями."
                      link="/cars/add-car"
                      linkDescription="Додати авто"
                      nameStyles="text-[32px] text-blue-500 mb-[20px] font-semibold max-sm:text-[24px] max-sm:mb-[10px] max-sm:w-full"
                      pStyle="text-[18px] md:text-xl mb-[20px] max-sm:text-[16px] max-sm:w-full"
                      btnStyle="text-base bg-blue-500 text-white px-4 py-2 rounded-lg"
                  />
                </div>
              </div>

            </div>


            <div className="relative hidden xl:grid h-full rounded-xl place-items-center mt-[60px]">
              <div className="absolute w-[85%] aspect-square bg-blue-500 rounded-full -z-10"></div>
              <div className="absolute w-[100%] aspect-square bg-blue-500 rounded-full -z-10 opacity-30"></div>
              <Image src={HeroImage} alt="Car" className="w-[700px] z-10" />
            </div>

          </div>
        </div>
      </section>
  );
};

export default Hero;