"use client";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../ui/accordion";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../ui/select";
import { Textarea } from "../ui/textarea";

const CarAddForm = () => {
  return (
    <form action="">
      <div className="h-[56px] w-[479px] max-sm:w-[280px] mx-auto max-sm:mt-[-20px]">
        <p className="text-white font-medium text-[50px] max-sm:text-[30px]">
          Додати автомобіль
        </p>
      </div>

      <div className="flex flex-col items-center mx-auto mt-[50px] max-sm:mt-0 w-max">
        <Accordion type="multiple">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-white">
              <div className="flex items-center flex-row">
                <div className="flex justify-center align-center w-[50px] h-[50px] bg-white rounded-full max-sm:w-[30px] max-sm:h-[30px] max-[320px]:h-[20px] max-[320px]:w-[20px]">
                  <p className="text-[#2196F3] font-normal text-[30px] max-sm:text-[20px] max-[320px]:text-[15px]">
                    1
                  </p>
                </div>
                <p className="text-white font-medium text-[40px] mx-[15px] max-sm:text-[20px] max-[375px]:text-[15px]">
                  Додайте фотографії автомобіля
                </p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid max-w-sm items-center gap-1.5 mt-[10px] max-[375px]:w-[300px] max-[320px]:w-[250px] max-[320px]:mx-auto">
                <Input
                  id="picture"
                  type="file"
                  accept="image/png, image/jpeg, image/jpg, image/webp"
                  className="max-[320px]:text-[10px]"
                />
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger className="text-white">
              <div className="flex items-center flex-row">
                <div className="flex justify-center align-center w-[50px] h-[50px] bg-white rounded-full max-sm:w-[30px] max-sm:h-[30px] max-[320px]:h-[20px] max-[320px]:w-[20px]">
                  <p className="text-[#2196F3] font-normal text-[30px] max-sm:text-[20px] max-[320px]:text-[15px]">
                    2
                  </p>
                </div>
                <p className="text-white font-medium text-[40px] mx-[15px] max-sm:text-[20px] max-[375px]:text-[15px]">
                  Основна інформація
                </p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-2 gap-x-[50px] gap-y-[20px] max-sm:grid-cols-2 max-sm:gap-x-[20px] max-[375px]:gap-y-[10px] max-[320px]:gap-x-[10px]">
                <Select>
                  <SelectTrigger className="w-[263px] max-sm:w-[170px] max-[375px]:text-[10px]">
                    <SelectValue placeholder="Тип автомобіля" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="universal">Універсал</SelectItem>
                    <SelectItem value="sedan">Седан</SelectItem>
                    <SelectItem value="cupe">Купе</SelectItem>
                    <SelectItem value="krosover">Кросовер</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="w-[263px] max-sm:w-[170px] max-[375px]:text-[10px]">
                    <SelectValue placeholder="Марка автомобіля" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bmw">BMW</SelectItem>
                    <SelectItem value="audi">Audi</SelectItem>
                    <SelectItem value="reno">Reno</SelectItem>
                    <SelectItem value="honda">Honda</SelectItem>
                    <SelectItem value="kia">Kia</SelectItem>
                    <SelectItem value="landrover">LandRover</SelectItem>
                    <SelectItem value="volkswagen">Volkswagen</SelectItem>
                    <SelectItem value="ford">Ford</SelectItem>
                  </SelectContent>
                </Select>

                <Input type="number" placeholder="Пробіг (тис.км)" className="w-[263px] max-sm:w-[170px] max-[375px]:text-[10px]" />
                <Input type="number" placeholder="Рік випуску" className="w-[263px] max-sm:w-[170px] max-[375px]:text-[10px]" />
                <Input type="text" placeholder="Область" className="w-[263px] max-sm:w-[170px] max-[375px]:text-[10px]" />
                <Input type="text" placeholder="Місто" className="w-[263px] max-sm:w-[170px] max-[375px]:text-[10px]" />
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger className="text-white">
              <div className="flex items-center flex-row">
                <div className="flex justify-center align-center w-[50px] h-[50px] bg-white rounded-full max-sm:w-[30px] max-sm:h-[30px] max-[320px]:h-[20px] max-[320px]:w-[20px]">
                  <p className="text-[#2196F3] font-normal text-[30px] max-sm:text-[20px] max-[320px]:text-[15px]">
                    3
                  </p>
                </div>
                <p className="text-white font-medium text-[40px] mx-[15px] max-sm:text-[20px] max-[375px]:text-[15px]">
                  Опис автомобіля
                </p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <Textarea placeholder="Опис українською" />
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger className="text-white">
              <div className="flex items-center flex-row">
                <div className="flex justify-center align-center w-[50px] h-[50px] bg-white rounded-full max-sm:w-[30px] max-sm:h-[30px] max-[320px]:h-[20px] max-[320px]:w-[20px]">
                  <p className="text-[#2196F3] font-normal text-[30px] max-sm:text-[20px] max-[320px]:text-[15px]">
                    4
                  </p>
                </div>
                <p className="text-white font-medium text-[40px] mx-[15px] max-sm:text-[20px] max-[375px]:text-[15px]">
                  Характеристики авто
                </p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-2 gap-x-[50px] gap-y-[20px] max-sm:gap-x-0">
                <Select>
                  <SelectTrigger className="w-[263px] max-sm:w-[180px] max-[375px]:text-[10px]">
                    <SelectValue placeholder="Коробка передач" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="avtomat">Автоматична</SelectItem>
                    <SelectItem value="mechanic">Механічна</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="w-[263px] max-sm:w-[180px] max-[375px]:text-[10px]">
                    <SelectValue placeholder="Паливо" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="disel">Дизельне</SelectItem>
                    <SelectItem value="benzyn">Бензин</SelectItem>
                    <SelectItem value="gas">Гас</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="w-[263px] max-sm:w-[180px] max-[375px]:text-[10px]">
                    <SelectValue placeholder="Привід" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="full">Повний</SelectItem>
                    <SelectItem value="frontwheeldrive">Передній</SelectItem>
                    <SelectItem value="backwheeldrive">Задній</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  <SelectTrigger className="w-[263px] max-sm:w-[180px] max-[375px]:text-[10px]">
                    <SelectValue placeholder="Участь у ДТП" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="yes">Так</SelectItem>
                    <SelectItem value="no">Ні</SelectItem>
                  </SelectContent>
                </Select>

                <Input type="number" placeholder="Потужність двигуна" className="w-[263px] max-sm:w-[180px] max-[375px]:text-[10px]" />
                <Input type="number" placeholder="О'єм двигуна" className="w-[263px] max-sm:w-[180px] max-[375px]:text-[10px]" />
                <Input type="number" placeholder="Кількість дверей" className="w-[263px] max-sm:w-[180px] max-[375px]:text-[10px]" />
                <Input type="text" placeholder="Колір" className="w-[263px] max-sm:w-[180px] max-[375px]:text-[10px]" />
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger className="text-white">
              <div className="flex items-center flex-row">
                <div className="flex justify-center align-center w-[50px] h-[50px] bg-white rounded-full max-sm:w-[30px] max-sm:h-[30px] max-[320px]:h-[20px] max-[320px]:w-[20px]">
                  <p className="text-[#2196F3] font-normal text-[30px] max-sm:text-[20px] max-[320px]:text-[15px]">
                    5
                  </p>
                </div>
                <p className="text-white font-medium text-[40px] mx-[15px] max-sm:text-[20px] max-[375px]:text-[15px]">
                  Вартість
                </p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex gap-[15px]">
                <Input type="number" placeholder="Ціна" className="w-[263px] max-[375px]:w-[200px] max-[375px]:h-[30px]" />
                <Select>
                  <SelectTrigger className="w-[58px] max-[375px]:h-[30px]">
                    <SelectValue placeholder="₴" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="euro">€</SelectItem>
                    <SelectItem value="dolar">$</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Button className="bg-white w-[468px] h-[67px] mt-[60px] font-medium text-[#2196F3] text-[30px] hover:bg-blue-300 hover:text-white max-sm:text-[20px] max-sm:h-[40px] max-sm:w-[300px] max-sm:mt-[30px]">
          Розмістити оголошення
        </Button>
      </div>
    </form>
  );
};

export default CarAddForm;
