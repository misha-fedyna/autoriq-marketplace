import CarCardFav from "../../../components/saved/carCardFav";

const FavoriteCars = () => {
    return (
        <div className="mt-[3.125rem] mx-auto max-w-[1024px]">
            <h2 className="text-[2rem] mb-[3.75rem] text-left text-1xl m-1 ml-1 md:ml-6 lg:(text-4xl m-5)">Збережені оголошення :</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 lg:gap-[6rem] mb-[5rem] m-5">
                <CarCardFav />
                <CarCardFav />
                <CarCardFav />
            </div>
        </div>
    );
};

export default FavoriteCars;
