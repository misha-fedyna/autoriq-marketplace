"use client";
import { useState } from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../ui/accordion";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { createAdvertisement } from "@/app/actions/adverticment";
import { toast } from "react-toastify";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../ui/select";
import { useRouter } from "next/navigation";

const CarAddForm = () => {
  // СТАНИ для всіх полів
  const [form, setForm] = useState({
    title: "",
    description: "",
    price: "",
    brand: "",
    model_name: "",
    year: "",
    body_type: "",
    drive_type: "",
    power: "",
    transmission: "",
    color: "",
    mileage: "",
    door_count: "",
    had_accidents: "",
    vin_code: "",
    fuel_type: "",
    engine_capacity: "",
    city: "",
  });
  const [picture, setPicture] = useState(null);
  const [uploadedPhotos, setUploadedPhotos] = useState([]);

  const router = useRouter();

  // Обробник зміни
  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  // Сабміт форми
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting form with data:", form);

    if (!form.title || !form.price || !form.brand || !form.model_name) {
      toast.error("Заповніть всі обов'язкові поля!");
      return;
    }
    try {
      const formData = new FormData();
      Object.entries(form).forEach(([key, value]) => {
        if (value !== "") formData.append(key, value);
      });
      if (picture) formData.append("main_photo", picture);
      if (uploadedPhotos.length > 0) {
        uploadedPhotos.forEach((file) => formData.append("uploaded_photos", file));
      }
      console.log("Calling createAdvertisement", formData);
      await createAdvertisement(formData);
      toast.success("Оголошення додано!");
      setForm({
        title: "",
        description: "",
        price: "",
        brand: "",
        model_name: "",
        year: "",
        body_type: "",
        drive_type: "",
        power: "",
        transmission: "",
        color: "",
        mileage: "",
        door_count: "",
        had_accidents: "",
        vin_code: "",
        fuel_type: "",
        engine_capacity: "",
        city: "",
      });
      setPicture(null);
      setUploadedPhotos([]);
      router.push("/cars");
    } catch (e) {
      toast.error("Помилка при додаванні оголошення: " + (e.message || e));
    }
  };

  // Додаємо списки для вибору (тільки для drive_type, transmission, fuel_type, had_accidents, body_type)
  const DRIVE_OPTIONS = [
    { value: "awd", label: "Повний (AWD)" },
    { value: "fwd", label: "Передній (FWD)" },
    { value: "rwd", label: "Задній (RWD)" },
  ];
  const TRANSMISSION_OPTIONS = [
    { value: "automatic", label: "Автоматична" },
    { value: "manual", label: "Механічна" },
    { value: "cvt", label: "Варіатор" },
    { value: "semi-auto", label: "Роботизована" },
  ];
  const FUEL_OPTIONS = [
    { value: "petrol", label: "Бензин" },
    { value: "diesel", label: "Дизель" },
    { value: "gas", label: "Газ" },
    { value: "hybrid", label: "Гібрид" },
    { value: "electric", label: "Електро" },
    { value: "gas_petrol", label: "Газ/Бензин" },
  ];
  const ACCIDENT_OPTIONS = [
    { value: "yes", label: "Так" },
    { value: "no", label: "Ні" },
  ];
  const BODY_OPTIONS = [
    { value: "suv", label: "Позашляховик (SUV)" },
    { value: "sedan", label: "Седан" },
    { value: "hatchback", label: "Хетчбек" },
    { value: "wagon", label: "Універсал" },
    { value: "coupe", label: "Купе" },
    { value: "convertible", label: "Кабріолет" },
    { value: "van", label: "Мінівен" },
    { value: "pickup", label: "Пікап" },
  ];
  const COLOR_OPTIONS = [
    { value: "black", label: "Чорний" },
    { value: "white", label: "Білий" },
    { value: "gray", label: "Сірий" },
    { value: "silver", label: "Сріблястий" },
    { value: "blue", label: "Синій" },
    { value: "red", label: "Червоний" },
    { value: "green", label: "Зелений" },
    { value: "yellow", label: "Жовтий" },
    { value: "orange", label: "Оранжевий" },
    { value: "brown", label: "Коричневий" },
    { value: "beige", label: "Бежевий" },
    { value: "purple", label: "Фіолетовий" },
    { value: "gold", label: "Золотий" },
    { value: "bronze", label: "Бронзовий" },
    { value: "light_blue", label: "Блакитний" },
    { value: "other", label: "Інший" }
  ];

  return (
    <form onSubmit={handleSubmit}>
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
                  onChange={e => setPicture(e.target.files[0])}
                />
                <Input
                  id="uploaded_photos"
                  type="file"
                  accept="image/png, image/jpeg, image/jpg, image/webp"
                  multiple
                  className="max-[320px]:text-[10px] mt-2"
                  onChange={e => setUploadedPhotos(Array.from(e.target.files))}
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
                <Select value={form.body_type} onValueChange={val => handleChange("body_type", val)}>
                  <SelectTrigger className="w-[263px] max-sm:w-[170px] max-[375px]:text-[10px]">
                    <SelectValue placeholder="Тип кузова" />
                  </SelectTrigger>
                  <SelectContent>
                    {BODY_OPTIONS.map(opt => <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>)}
                  </SelectContent>
                </Select>
                <Input
                  placeholder="Назва оголошення (наприклад: Land Rover Range Rover)"
                  value={form.title}
                  onChange={(e) => handleChange("title", e.target.value)}
                />
                <Input
                  placeholder="Марка (наприклад: Land Rover)"
                  value={form.brand}
                  onChange={(e) => handleChange("brand", e.target.value)}
                />
                <Input
                  placeholder="Модель (наприклад: Range Rover)"
                  value={form.model_name}
                  onChange={(e) => handleChange("model_name", e.target.value)}
                />
                <Input
                  type="number"
                  placeholder="Пробіг (км)"
                  value={form.mileage}
                  onChange={(e) => handleChange("mileage", e.target.value)}
                />
                <Input
                  type="number"
                  placeholder="Рік випуску"
                  value={form.year}
                  onChange={(e) => handleChange("year", e.target.value)}
                />
                <Input
                  placeholder="Місто"
                  value={form.city}
                  onChange={(e) => handleChange("city", e.target.value)}
                />
                <Input
                  placeholder="VIN-код"
                  value={form.vin_code}
                  onChange={(e) => handleChange("vin_code", e.target.value)}
                />
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
              <Textarea
                placeholder="Опис українською"
                value={form.description}
                onChange={(e) => handleChange("description", e.target.value)}
              />
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
                <Select value={form.transmission} onValueChange={val => handleChange("transmission", val)}>
                  <SelectTrigger className="w-[263px] max-sm:w-[180px] max-[375px]:text-[10px]">
                    <SelectValue placeholder="Коробка передач" />
                  </SelectTrigger>
                  <SelectContent>
                    {TRANSMISSION_OPTIONS.map(opt => <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>)}
                  </SelectContent>
                </Select>
                <Select value={form.fuel_type} onValueChange={val => handleChange("fuel_type", val)}>
                  <SelectTrigger className="w-[263px] max-sm:w-[180px] max-[375px]:text-[10px]">
                    <SelectValue placeholder="Паливо" />
                  </SelectTrigger>
                  <SelectContent>
                    {FUEL_OPTIONS.map(opt => <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>)}
                  </SelectContent>
                </Select>
                <Select value={form.drive_type} onValueChange={val => handleChange("drive_type", val)}>
                  <SelectTrigger className="w-[263px] max-sm:w-[180px] max-[375px]:text-[10px]">
                    <SelectValue placeholder="Привід" />
                  </SelectTrigger>
                  <SelectContent>
                    {DRIVE_OPTIONS.map(opt => <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>)}
                  </SelectContent>
                </Select>
                <Select value={form.had_accidents} onValueChange={val => handleChange("had_accidents", val)}>
                  <SelectTrigger className="w-[263px] max-sm:w-[180px] max-[375px]:text-[10px]">
                    <SelectValue placeholder="Участь у ДТП" />
                  </SelectTrigger>
                  <SelectContent>
                    {ACCIDENT_OPTIONS.map(opt => <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>)}
                  </SelectContent>
                </Select>
                <Input
                  type="number"
                  placeholder="Потужність (к.с.)"
                  value={form.power}
                  onChange={(e) => handleChange("power", e.target.value)}
                />
                <Input
                  type="number"
                  placeholder="Об'єм двигуна (л)"
                  value={form.engine_capacity}
                  onChange={(e) => handleChange("engine_capacity", e.target.value)}
                />
                <Select value={form.color} onValueChange={val => handleChange("color", val)}>
                  <SelectTrigger className="w-[263px] max-sm:w-[180px] max-[375px]:text-[10px]">
                    <SelectValue placeholder="Колір" />
                  </SelectTrigger>
                  <SelectContent>
                    {COLOR_OPTIONS.map(opt => <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>)}
                  </SelectContent>
                </Select>
                <Input
                  type="number"
                  placeholder="Кількість дверей (2-5)"
                  min={2}
                  max={5}
                  value={form.door_count}
                  onChange={(e) => handleChange("door_count", e.target.value)}
                />
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
                <Input
                  type="number"
                  placeholder="Ціна ($)"
                  className="w-[263px] max-[375px]:w-[200px] max-[375px]:h-[30px]"
                  value={form.price}
                  onChange={(e) => handleChange("price", e.target.value)}
                />
                <span className="text-white text-xl ml-2">$</span>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Button type="submit" className="bg-white w-[468px] h-[67px] mt-[60px] font-medium text-[#2196F3] text-[30px] hover:bg-blue-300 hover:text-white max-sm:text-[20px] max-sm:h-[40px] max-sm:w-[300px] max-sm:mt-[30px]">
          Розмістити оголошення
        </Button>
      </div>
    </form>
  );
};

export default CarAddForm;
