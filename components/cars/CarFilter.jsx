import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Text } from "lucide-react";
import { useState } from "react";

import dynamic from "next/dynamic";

// Lazy loading компонентів з індикаторами завантаження
const ChooseMarks = dynamic(() => import("./ChooseMarks"), {
  loading: () => <div>Завантаження марок...</div>,
});
const ChooseRegions = dynamic(() => import("./ChooseRegions"), {
  loading: () => <div>Завантаження регіонів...</div>,
});

const CarFilter = ({ onFilter }) => {
  const bodyTypes = [
    { value: "sedan", label: "Седан" },
    { value: "hatchback", label: "Хетчбек" },
    { value: "suv", label: "Позашляховик" },
    { value: "wagon", label: "Універсал" },
    { value: "coupe", label: "Купе" },
    { value: "convertible", label: "Кабріолет" },
    { value: "van", label: "Мінівен" },
    { value: "pickup", label: "Пікап" },
  ];

  const driveTypes = [
    { value: "fwd", label: "Передній" },
    { value: "rwd", label: "Задній" },
    { value: "awd", label: "Повний" },
    { value: "4wd", label: "4WD" },
  ];

  const transmissionTypes = [
    { value: "manual", label: "Механічна" },
    { value: "automatic", label: "Автоматична" },
    { value: "cvt", label: "Варіатор" },
    { value: "semi-auto", label: "Роботизована" },
  ];

  const colorTypes = [
    { value: "white", label: "Білий" },
    { value: "black", label: "Чорний" },
    { value: "silver", label: "Срібний" },
    { value: "gray", label: "Сірий" },
    { value: "red", label: "Червоний" },
    { value: "blue", label: "Синій" },
    { value: "green", label: "Зелений" },
    { value: "yellow", label: "Жовтий" },
    { value: "brown", label: "Коричневий" },
    { value: "orange", label: "Помаранчевий" },
    { value: "purple", label: "Фіолетовий" },
    { value: "beige", label: "Бежевий" },
  ];

  const fuelTypes = [
    { value: "petrol", label: "Бензин" },
    { value: "diesel", label: "Дизель" },
    { value: "gas", label: "Газ" },
    { value: "hybrid", label: "Гібрид" },
    { value: "electric", label: "Електро" },
    { value: "gas_petrol", label: "Газ/Бензин" },
  ];

  // СТАНИ для фільтрів
  const [selectedBody, setSelectedBody] = useState([]);
  const [selectedDrive, setSelectedDrive] = useState([]);
  const [selectedTransmission, setSelectedTransmission] = useState([]);
  const [selectedColor, setSelectedColor] = useState([]);
  const [selectedFuel, setSelectedFuel] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  // Додаємо стани для марки та регіону
  const [selectedMark, setSelectedMark] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  // Обробники чекбоксів
  const handleCheckbox = (value, selected, setSelected) => {
    setSelected((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  // Збір фільтрів і виклик onFilter
  const handleApply = () => {
    onFilter &&
      onFilter({
        body: selectedBody,
        drive: selectedDrive,
        transmission: selectedTransmission,
        color: selectedColor,
        fuel: selectedFuel,
        min_price: minPrice,
        max_price: maxPrice,
        mark: selectedMark,
        region: selectedRegion,
      });
  };

  // Додаємо функцію для скидання всіх фільтрів
  const handleReset = () => {
    setSelectedBody([]);
    setSelectedDrive([]);
    setSelectedTransmission([]);
    setSelectedColor([]);
    setSelectedFuel([]);
    setMinPrice("");
    setMaxPrice("");
    setSelectedMark("");
    setSelectedRegion("");
    onFilter && onFilter({}); // Показати всі авто
  };

  return (
    <>
      {/* Desktop версія */}
      <div className="flex flex-col w-[250px] max-sm:hidden">
        <Accordion type="multiple">
          {/* Тип кузова */}
          <AccordionItem value="item-1">
            <AccordionTrigger>Тип кузова</AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col gap-[10px]">
                {bodyTypes.map((type) => (
                  <div key={type.value} className="flex items-center space-x-2">
                    <Checkbox
                      id={type.value}
                      checked={selectedBody.includes(type.value)}
                      onCheckedChange={() =>
                        handleCheckbox(type.value, selectedBody, setSelectedBody)
                      }
                    />
                    <Label
                      htmlFor={type.value}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {type.label}
                    </Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
          {/* Коробка передач */}
          <AccordionItem value="item-2">
            <AccordionTrigger>Коробка передач</AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col gap-[10px]">
                {transmissionTypes.map((gearbox) => (
                  <div key={gearbox.value} className="flex items-center space-x-2">
                    <Checkbox
                      id={gearbox.value}
                      checked={selectedTransmission.includes(gearbox.value)}
                      onCheckedChange={() =>
                        handleCheckbox(
                          gearbox.value,
                          selectedTransmission,
                          setSelectedTransmission
                        )
                      }
                    />
                    <Label
                      htmlFor={gearbox.value}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {gearbox.label}
                    </Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
          {/* Привід */}
          <AccordionItem value="item-3">
            <AccordionTrigger>Привід</AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col gap-[10px]">
                {driveTypes.map((drive) => (
                  <div key={drive.value} className="flex items-center space-x-2">
                    <Checkbox
                      id={drive.value}
                      checked={selectedDrive.includes(drive.value)}
                      onCheckedChange={() =>
                        handleCheckbox(drive.value, selectedDrive, setSelectedDrive)
                      }
                    />
                    <Label
                      htmlFor={drive.value}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {drive.label}
                    </Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
          {/* Колір */}
          <AccordionItem value="item-4">
            <AccordionTrigger>Колір</AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col gap-[10px]">
                {colorTypes.map((color) => (
                  <div key={color.value} className="flex items-center space-x-2">
                    <Checkbox
                      id={color.value}
                      checked={selectedColor.includes(color.value)}
                      onCheckedChange={() =>
                        handleCheckbox(color.value, selectedColor, setSelectedColor)
                      }
                    />
                    <Label
                      htmlFor={color.value}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {color.label}
                    </Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
          {/* Тип пального */}
          <AccordionItem value="item-5">
            <AccordionTrigger>Тип пального</AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col gap-[10px]">
                {fuelTypes.map((fuel) => (
                  <div key={fuel.value} className="flex items-center space-x-2">
                    <Checkbox
                      id={fuel.value}
                      checked={selectedFuel.includes(fuel.value)}
                      onCheckedChange={() =>
                        handleCheckbox(fuel.value, selectedFuel, setSelectedFuel)
                      }
                    />
                    <Label
                      htmlFor={fuel.value}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {fuel.label}
                    </Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        {/* Ціна, регіон, марка */}
        <div className="flex flex-col gap-[10px] mt-[16px]">
          <ChooseMarks value={selectedMark} onChange={setSelectedMark} />
          <ChooseRegions value={selectedRegion} onChange={setSelectedRegion} />
          <h1 className="font-medium">Ціна</h1>
          <div className="flex items-center space-x-2">
            <Input
              className="h-[30px] w-[90px] border-b-2"
              type="number"
              placeholder="8 500"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />
            <Input
              className="h-[30px] w-[90px] border-b-2"
              type="number"
              placeholder="20 000"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <Select>
              <SelectTrigger className="w-[50px] h-[30px]">
                <SelectValue placeholder="$" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="dolar">$</SelectItem>
                <SelectItem value="euro">€</SelectItem>
                <SelectItem value="hrn">₴</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="w-[100%] flex flex-col gap-2 justify-items-center">
          <Button
            className="flex align-middle mt-[20px] text-2xl w-full bg-blue-700 hover:bg-blue-300"
            onClick={handleApply}
          >
            Застосувати
          </Button>
          <Button
            className="flex align-middle mt-[20px] text-2xl w-full bg-blue-700 hover:bg-blue-300 hover:text-white text-white"
            variant="outline"
            onClick={handleReset}
          >
            Скинути
          </Button>
        </div>
      </div>

      {/* Mobile версія */}
      <div className="md:hidden max-sm:ml-[20px]">
        <Sheet>
          <SheetTrigger className="flex items-center gap-x-3 border-2 p-1 rounded-[8px] shadow-xl">
            <Text /> <p>Фільтр</p>
          </SheetTrigger>
          <SheetContent className="overflow-y-auto">
            <SheetHeader>
              <SheetTitle className="text-blue-500 text-3xl w-5 mb-2">
                Фільтр
              </SheetTitle>
              {/* <SheetDescription> */}
              <Accordion type="multiple">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Тип кузова</AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col gap-[10px]">
                      {bodyTypes.map((type) => (
                        <div
                          key={`mob-${type.value}`}
                          className="flex items-center space-x-2"
                        >
                          <Checkbox
                            id={type.value}
                            checked={selectedBody.includes(type.value)}
                            onCheckedChange={() =>
                              handleCheckbox(type.value, selectedBody, setSelectedBody)
                            }
                          />
                          <Label
                            htmlFor={type.value}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {type.label}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Коробка передач</AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col gap-[10px]">
                      {transmissionTypes.map((gearbox) => (
                        <div
                          key={`mob-${gearbox.value}`}
                          className="flex items-center space-x-2"
                        >
                          <Checkbox
                            id={gearbox.value}
                            checked={selectedTransmission.includes(gearbox.value)}
                            onCheckedChange={() =>
                              handleCheckbox(
                                gearbox.value,
                                selectedTransmission,
                                setSelectedTransmission
                              )
                            }
                          />
                          <Label
                            htmlFor={gearbox.value}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {gearbox.label}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>Привід</AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col gap-[10px]">
                      {driveTypes.map((drive) => (
                        <div
                          key={`mob-${drive.value}`}
                          className="flex items-center space-x-2"
                        >
                          <Checkbox
                            id={drive.value}
                            checked={selectedDrive.includes(drive.value)}
                            onCheckedChange={() =>
                              handleCheckbox(drive.value, selectedDrive, setSelectedDrive)
                            }
                          />
                          <Label
                            htmlFor={drive.value}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {drive.label}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Колір</AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col gap-[10px]">
                      {colorTypes.map((color) => (
                        <div
                          key={`mob-${color.value}`}
                          className="flex items-center space-x-2"
                        >
                          <Checkbox
                            id={color.value}
                            checked={selectedColor.includes(color.value)}
                            onCheckedChange={() =>
                              handleCheckbox(color.value, selectedColor, setSelectedColor)
                            }
                          />
                          <Label
                            htmlFor={color.value}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {color.label}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>Тип пального</AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col gap-[10px]">
                      {fuelTypes.map((fuel) => (
                        <div
                          key={`mob-${fuel.value}`}
                          className="flex items-center space-x-2"
                        >
                          <Checkbox
                            id={fuel.value}
                            checked={selectedFuel.includes(fuel.value)}
                            onCheckedChange={() =>
                              handleCheckbox(fuel.value, selectedFuel, setSelectedFuel)
                            }
                          />
                          <Label
                            htmlFor={fuel.value}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {fuel.label}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              <div className="flex flex-col gap-[10px] mt-[16px]">
                <ChooseMarks value={selectedMark} onChange={setSelectedMark} />
                <ChooseRegions value={selectedRegion} onChange={setSelectedRegion} />
                <h1 className="font-medium max-sm:flex max-sm:justify-start">
                  Ціна
                </h1>
                <div className="flex items-center space-x-2">
                  <Input
                    className="h-[30px] w-[90px] border-b-2"
                    type="number"
                    placeholder="8 500"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                  />
                  <Input
                    className="h-[30px] w-[90px] border-b-2"
                    type="number"
                    placeholder="20 000"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                  />
                  <Select>
                    <SelectTrigger className="w-[50px] h-[30px]">
                      <SelectValue placeholder="$" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dolar">$</SelectItem>
                      <SelectItem value="euro">€</SelectItem>
                      <SelectItem value="hrn">₴</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <SheetDescription>
                <Button
                  className="flex align-middle mt-[20px] text-2xl w-full bg-blue-700 hover:bg-blue-300"
                  onClick={handleApply}
                >
                  Застосувати
                </Button>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export const carBrands = [
  "Abarth",
  "Acura",
  "Alfa Romeo",
  "Alpina",
  "Aston Martin",
  "Audi",
  "BAIC",
  "Bentley",
  "BMW",
  "Brilliance",
  "Bugatti",
  "Buick",
  "BYD",
  "Cadillac",
  "Changan",
  "Chery",
  "Chevrolet",
  "Chrysler",
  "Citroen",
  "Cupra",
  "Dacia",
  "Daewoo",
  "Daihatsu",
  "Datsun",
  "DeLorean",
  "Dodge",
  "Dongfeng",
  "DS Automobiles",
  "FAW",
  "Ferrari",
  "Fiat",
  "Fisker",
  "Ford",
  "Foton",
  "Geely",
  "Genesis",
  "GMC",
  "Great Wall",
  "Haval",
  "Honda",
  "Hongqi",
  "Hummer",
  "Hyundai",
  "Infiniti",
  "Iran Khodro",
  "Isuzu",
  "Iveco",
  "JAC",
  "Jaguar",
  "Jeep",
  "JMC",
  "Kia",
  "Koenigsegg",
  "Lada",
  "Lamborghini",
  "Lancia",
  "Land Rover",
  "Lexus",
  "Lifan",
  "Lincoln",
  "Lotus",
  "Lucid",
  "Maserati",
  "Maybach",
  "Mazda",
  "McLaren",
  "Mercedes-Benz",
  "Mercury",
  "MG",
  "Mini",
  "Mitsubishi",
  "Nio",
  "Nissan",
  "Opel",
  "Pagani",
  "Peugeot",
  "Plymouth",
  "Polestar",
  "Pontiac",
  "Porsche",
  "Proton",
  "RAM",
  "Ravon",
  "Renault",
  "Rimac",
  "Roewe",
  "Rolls-Royce",
  "Rover",
  "Saab",
  "Saipa",
  "Saturn",
  "Scion",
  "SEAT",
  "Seres",
  "Shuanghuan",
  "Škoda",
  "Smart",
  "Soueast",
  "SsangYong",
  "Subaru",
  "Suzuki",
  "Tata",
  "Tesla",
  "Toyota",
  "VinFast",
  "Volkswagen",
  "Volvo",
  "Vortex",
  "Wuling",
  "ZAZ",
  "Zotye",
  "ВАЗ",
  "ГАЗ",
  "ЗАЗ",
  "ІЖ",
  "ЛУАЗ",
  "Москвич",
  "УАЗ",
];

export default CarFilter;
