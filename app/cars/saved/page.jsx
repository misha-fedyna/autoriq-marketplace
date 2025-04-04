import CarCart from "../../../components/saved/carCardFav";
import HomePage from "@/app/page";


const favoriteCars = () => {
    return (
        <div className="mt-[3.125rem] ml-[5rem] mr-[5rem]">
            <h2 className="text-4xl mb-[3.75rem]">Збережені оголошення :</h2>
            <div className="flex justify-between gap-6 mb-[6.25rem]">
                <CarCart/>
                <CarCart/>
                <CarCart/>
            </div>

        </div>
    )
};
export default favoriteCars;