import CarSearchForm from "./CarSearchForm";
import Image from "next/image";
import HeroInfo from "./HeroInfo";
import HeroImage from "../../assets/images/HeroCarImg.png";

const Hero = () => {
    return (
        // Тут хіба зі стилями погратися ще та і все наче
        <section className="px-10 py-10">
            <div className="flex flex-col md:flex-row items-center justify-between mb-32">
                <div className="w-full md:w-1/2">
                    <h1 className="text-5xl font-bold text-blue-500 mb-6 ">
                        Ваш ідеальний автомобіль — на відстані одного кліка!
                    </h1>
                    <div className="bg-gray-100 p-6 rounded-xl shadow-md mb-4">
                        <HeroInfo
                            name="Для покупців"
                            description="Знайдіть автомобіль мрії. Зберігай авто і контактуй із власниками."
                            link="/cars"
                            linkDescription="Перейти до автомобілів"
                            nameStyles="text-2xl md:text-5xl text-black mb-2 font-semibold"
                            pStyle="text-lg md:text-xl mb-4"
                            btnStyle="text-base bg-black text-white px-4 py-2 rounded-lg"
                        />
                    </div>

                    <div className="bg-blue-100 p-6 rounded-xl shadow-md">
                        <HeroInfo
                            name="Для власників авто"
                            description="Укажіть своє авто і зв’яжіться із потенційними покупцями."
                            link="/add-car"
                            linkDescription="Додати авто"
                            nameStyles="text-2xl md:text-5xl text-blue-500 mb-2 font-semibold"
                            pStyle="text-lg md:text-xl mb-4"
                            btnStyle="text-base bg-blue-500 text-white px-4 py-2 rounded-lg"
                        />
                    </div>
                </div>

                <div className="relative hidden md:grid h-full p-4 rounded-xl place-items-center">
                    <div className="absolute w-[75%] aspect-square bg-blue-500 rounded-full -z-10"></div>
                    <div className="absolute w-[90%] aspect-square bg-blue-500 rounded-full -z-10 opacity-30"></div>
                    <Image src={HeroImage} alt="Car" className="w-[600px] z-10" />
                </div>
            </div>
        </section>
    );
}

export default Hero;
