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
import ChooseMarks from "./ChooseMarks";
import ChooseRegions from "./ChooseRegions";
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

const CarFilter = () => {
  const types = [
    "Кросовер",
    "Універсал",
    "Позашляховик",
    "Купе",
    "Седан",
    "Ліфтбек",
    "Кросовер-купе",
  ];

  const gearboxs = ["Автоматична", "Механічна"];

  const cardrives = ["Повний", "Передній", "Задній"];

  return (
    <>
      {/* Laptop */}
      {/* Laptop */}
      {/* Laptop */}
      <div className="flex flex-col w-[250px] max-sm:hidden">
        <Accordion type="multiple">
          {/* Тип кузова */}
          <AccordionItem value="item-1">
            <AccordionTrigger>Тип кузова</AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col gap-[10px]">
                {types.map((type, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Checkbox id={type} />
                    <Label
                      htmlFor={type}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {type}
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
                {gearboxs.map((gearbox, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Checkbox id={gearbox} />
                    <Label
                      htmlFor={gearbox}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {gearbox}
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
                {cardrives.map((cardrive, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Checkbox id={cardrive} />
                    <Label
                      htmlFor={cardrive}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {cardrive}
                    </Label>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        {/* Ціна, регіон, марка */}
        <div className="flex flex-col gap-[10px] mt-[16px]">
          {/* Марка */}
          <ChooseMarks />

          {/* Регіон */}
          <ChooseRegions />

          {/* Ціна */}
          <h1 className="font-medium">Ціна</h1>
          <div className="flex items-center space-x-2">
            <Input
              className="h-[30px] w-[90px] border-b-2"
              type="number"
              placeholder="8 500"
            />
            <Input
              className="h-[30px] w-[90px] border-b-2"
              type="number"
              placeholder="20 000"
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
        <div className="w-[100%] justify-items-center">
          <Button className="flex align-middle mt-[20px] text-2xl w-full bg-blue-700 hover:bg-blue-300">
            Застосувати
          </Button>
        </div>
      </div>

      {/* Mobile */}
      {/* Mobile */}
      {/* Mobile */}
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
                {/* Тип кузова */}
                <AccordionItem value="item-1">
                  <AccordionTrigger>Тип кузова</AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col gap-[10px]">
                      {types.map((type, index) => (
                        <div
                          key={`mob-${index}`}
                          className="flex items-center space-x-2"
                        >
                          <Checkbox id={type} />
                          <Label
                            htmlFor={type}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {type}
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
                      {gearboxs.map((gearbox, index) => (
                        <div
                          key={`mob-${index}`}
                          className="flex items-center space-x-2"
                        >
                          <Checkbox id={gearbox} />
                          <Label
                            htmlFor={gearbox}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {gearbox}
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
                      {cardrives.map((cardrive, index) => (
                        <div
                          key={`mob-${index}`}
                          className="flex items-center space-x-2"
                        >
                          <Checkbox id={cardrive} />
                          <Label
                            htmlFor={cardrive}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {cardrive}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              {/* Ціна, регіон, марка */}
              <div className="flex flex-col gap-[10px] mt-[16px]">
                {/* Марка */}
                <ChooseMarks />
                {/* Регіон */}
                <ChooseRegions />
                {/* Ціна */}
                <h1 className="font-medium max-sm:flex max-sm:justify-start">
                  Ціна
                </h1>
                <div className="flex items-center space-x-2">
                  <Input
                    className="h-[30px] w-[90px] border-b-2"
                    type="number"
                    placeholder="8 500"
                  />
                  <Input
                    className="h-[30px] w-[90px] border-b-2"
                    type="number"
                    placeholder="20 000"
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
                {/* <div className="w-[100%] justify-items-center"> */}
                <Button className="flex align-middle mt-[20px] text-2xl w-full bg-blue-700 hover:bg-blue-300">
                  Застосувати
                </Button>
                {/* </div> */}
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default CarFilter;
