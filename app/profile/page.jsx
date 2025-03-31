import Image from "next/image";
import profileImg from "../../assets/images/profile.png";
import carCardImg from "../../assets/images/DefaultCarImg.png";
import CarCard from "./carCards.jsx";

const Profile = () => {
    const cars = [
        {
            image: carCardImg,
            title: "NISSAN Qashqai",
            year: 2018,
            priceUSD: 12200,
            priceUAH: 446124,
            km: 20000,
            location: "Lviv",
            fuel: "Diesel 1.6",
            transmission: "Mechanical"
        },
        {
            image: carCardImg,
            title: "NISSAN Qashqai",
            year: 2018,
            priceUSD: 12200,
            priceUAH: 446124,
            km: 20000,
            location: "Lviv",
            fuel: "Diesel 1.6",
            transmission: "Mechanical"
        },
        {
            image: carCardImg,
            title: "NISSAN Qashqai",
            year: 2018,
            priceUSD: 12200,
            priceUAH: 446124,
            km: 20000,
            location: "Lviv",
            fuel: "Diesel 1.6",
            transmission: "Mechanical"
        },
        {
            image: carCardImg,
            title: "NISSAN Qashqai",
            year: 2018,
            priceUSD: 12200,
            priceUAH: 446124,
            km: 20000,
            location: "Lviv",
            fuel: "Diesel 1.6",
            transmission: "Mechanical"
        }
    ];

    return (
        <div className="flex flex-col lg:flex-row p-6">

            <div className="w-full lg:w-1/4 p-4 ">
                <h2 className="text-3xl font-bold mb-4 text-center ">Профіль</h2>

                <div className="flex justify-center mb-4 md:justify-left">
                    <Image
                        src={profileImg}
                        alt="Profile"
                        className="w-20 h-20 rounded-full border shadow-md"
                    />
                </div>

                <div className="text-center space-y-3 md:text-left ">
                    <div >
                        <p className="font-semibold">Прізвище та ім’я:</p>
                        <p>Коваленко Андрій</p>
                    </div>
                    <div>
                        <p className="font-semibold">Пошта:</p>
                        <p>andriy@gmail.com</p>
                    </div>
                    <div>
                        <p className="font-semibold">Телефон:</p>
                        <p>0958986953</p>
                    </div>
                    <div>
                        <p className="font-semibold">Область:</p>
                        <p>Львівська</p>
                    </div>
                    <div>
                        <p className="font-semibold">Місто:</p>
                        <p>Львів</p>
                    </div>
                </div>

                <button className="mt-6 px-6 py-2 bg-yellow-500 text-white font-bold rounded-md w-full">
                    Редагувати
                </button>
            </div>

            {/* Car cards */}
            <div className="flex-1 p-4">
                <h2 className="text-3xl font-bold mb-4">Ваші оголошення :</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                    {cars.map((car, index) => (
                        <CarCard key={index} {...car} />
                    ))}

                </div>
            </div>
        </div>
    );
};
export  default  Profile;