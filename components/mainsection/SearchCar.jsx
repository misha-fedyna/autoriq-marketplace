// Breack line and search component with text - Знайдіть свій ідеальний автомобіль
const SearchCar = () => {
    return (
        <div className="min-w-[542px] p-2 border rounded-lg shadow-xl flex items-center justify-between gap-2">
            <input type="text" className="w-full border-none h-full focus:outline-none" placeholder="Введіть марку або модель..." />
            <button className="p-2 bg-blue-500 text-white rounded-lg">Пошук</button>
        </div>
    )
}

export default SearchCar;