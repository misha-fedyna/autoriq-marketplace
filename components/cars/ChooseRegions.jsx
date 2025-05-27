"use client";

import { Check, ChevronDown, X } from "lucide-react";
import { useState, useEffect } from "react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// Унікалізований масив міст України (без дублікатів)
const regions = [
  { value: "київ", label: "Київ" },
  { value: "харків", label: "Харків" },
  { value: "одеса", label: "Одеса" },
  { value: "дніпро", label: "Дніпро" },
  { value: "донецьк", label: "Донецьк" },
  { value: "запоріжжя", label: "Запоріжжя" },
  { value: "львів", label: "Львів" },
  { value: "кривий-ріг", label: "Кривий Ріг" },
  { value: "миколаїв", label: "Миколаїв" },
  { value: "маріуполь", label: "Маріуполь" },
  { value: "луганськ", label: "Луганськ" },
  { value: "вінниця", label: "Вінниця" },
  { value: "макіївка", label: "Макіївка" },
  { value: "севастополь", label: "Севастополь" },
  { value: "симферополь", label: "Сімферополь" },
  { value: "херсон", label: "Херсон" },
  { value: "полтава", label: "Полтава" },
  { value: "чернігів", label: "Чернігів" },
  { value: "черкаси", label: "Черкаси" },
  { value: "житомир", label: "Житомир" },
  { value: "суми", label: "Суми" },
  { value: "хмельницький", label: "Хмельницький" },
  { value: "чернівці", label: "Чернівці" },
  { value: "рівне", label: "Рівне" },
  { value: "кам'янське", label: "Кам'янське" },
  { value: "кропивницький", label: "Кропивницький" },
  { value: "івано-франківськ", label: "Івано-Франківськ" },
  { value: "тернопіль", label: "Тернопіль" },
  { value: "луцьк", label: "Луцьк" },
  { value: "бердянськ", label: "Бердянськ" },
  { value: "мелітополь", label: "Мелітополь" },
  { value: "керч", label: "Керч" },
  { value: "павлоград", label: "Павлоград" },
  { value: "євпаторія", label: "Євпаторія" },
  { value: "алчевськ", label: "Алчевськ" },
  { value: "сєвєродонецьк", label: "Сєвєродонецьк" },
  { value: "лисичанськ", label: "Лисичанськ" },
  { value: "біла-церква", label: "Біла Церква" },
  { value: "ужгород", label: "Ужгород" },
  { value: "дружківка", label: "Дружківка" },
  { value: "енергодар", label: "Енергодар" },
  { value: "коростень", label: "Коростень" },
  { value: "коломия", label: "Коломия" },
  { value: "новомосковськ", label: "Новомосковськ" },
  { value: "смела", label: "Сміла" },
  { value: "шостка", label: "Шостка" },
  { value: "бровари", label: "Бровари" },
  { value: "бориспіль", label: "Бориспіль" },
  { value: "фастів", label: "Фастів" },
  { value: "ірпінь", label: "Ірпінь" },
  { value: "боярка", label: "Боярка" },
  { value: "васильків", label: "Васильків" },
  { value: "обухів", label: "Обухів" },
  { value: "вишгород", label: "Вишгород" },
  { value: "вишневе", label: "Вишневе" },
  { value: "буча", label: "Буча" },
  { value: "гостомель", label: "Гостомель" },
  { value: "переяслав", label: "Переяслав" },
  { value: "сквира", label: "Сквира" },
  { value: "яготин", label: "Яготин" },
  { value: "чорнобиль", label: "Чорнобиль" },
  { value: "ананьїв", label: "Ананьїв" },
  { value: "апостолове", label: "Апостолове" },
  { value: "арциз", label: "Арциз" },
  { value: "балаклія", label: "Балаклія" },
  { value: "балта", label: "Балта" },
  { value: "бар", label: "Бар" },
  { value: "баранівка", label: "Баранівка" },
  { value: "баштанка", label: "Баштанка" },
  { value: "бершадь", label: "Бершадь" },
  { value: "богодухів", label: "Богодухів" },
  { value: "богуслав", label: "Богуслав" },
  { value: "болград", label: "Болград" },
  { value: "борзна", label: "Борзна" },
  { value: "броди", label: "Броди" },
  { value: "брянка", label: "Брянка" },
  { value: "буринь", label: "Буринь" },
  { value: "валки", label: "Валки" },
  { value: "варва", label: "Варва" },
  { value: "васильківка", label: "Васильківка" },
  { value: "велика-білозерка", label: "Велика Білозерка" },
  { value: "велика-новосілка", label: "Велика Новосілка" },
  { value: "великий-бурлук", label: "Великий Бурлук" },
  { value: "верхівцеве", label: "Верхівцеве" },
  { value: "верхньодніпровськ", label: "Верхньодніпровськ" },
  { value: "верховина", label: "Верховина" },
  { value: "вилкове", label: "Вилкове" },
  { value: "виноградів", label: "Виноградів" },
  { value: "вовчанськ", label: "Вовчанськ" },
  { value: "волноваха", label: "Волноваха" },
  { value: "володарка", label: "Володарка" },
  { value: "володимир", label: "Володимир" },
  { value: "володимир-волинський", label: "Володимир-Волинський" },
  { value: "волочиськ", label: "Волочиськ" },
  { value: "ворзель", label: "Ворзель" },
  { value: "вороніж", label: "Вороніж" },
  { value: "вугледар", label: "Вугледар" },
  { value: "гадяч", label: "Гадяч" },
  { value: "гайворон", label: "Гайворон" },
  { value: "гайсин", label: "Гайсин" },
  { value: "галич", label: "Галич" },
  { value: "гаспра", label: "Гаспра" },
  { value: "глобине", label: "Глобине" },
  { value: "глухів", label: "Глухів" },
  { value: "гнівань", label: "Гнівань" },
  { value: "гола-пристань", label: "Гола Пристань" },
  { value: "голубівка", label: "Голубівка" },
  { value: "горішні-плавні", label: "Горішні Плавні" },
  { value: "горлівка", label: "Горлівка" },
  { value: "гребінка", label: "Гребінка" },
  { value: "губиниха", label: "Губиниха" },
  { value: "гурзуф", label: "Гурзуф" },
  { value: "данилівка", label: "Данилівка" },
  { value: "дарниця", label: "Дарниця" },
  { value: "дебальцеве", label: "Дебальцеве" },
  { value: "делятин", label: "Делятин" },
  { value: "демидівка", label: "Демидівка" },
  { value: "дергачі", label: "Дергачі" },
  { value: "джанкой", label: "Джанкой" },
  { value: "добропілля", label: "Добропілля" },
  { value: "долина", label: "Долина" },
  { value: "драгобрат", label: "Драгобрат" },
  { value: "дунаївці", label: "Дунаївці" },
  { value: "жашків", label: "Жашків" },
  { value: "жидачів", label: "Жидачів" },
  { value: "жмеринка", label: "Жмеринка" },
  { value: "жовква", label: "Жовква" },
  { value: "жовті-води", label: "Жовті Води" },
  { value: "заводське", label: "Заводське" },
  { value: "заліщики", label: "Заліщики" },
  { value: "заставна", label: "Заставна" },
  { value: "збараж", label: "Збараж" },
  { value: "зборів", label: "Зборів" },
  { value: "згурівка", label: "Згурівка" },
  { value: "зміїв", label: "Зміїв" },
  { value: "знам'янка", label: "Знам'янка" },
  { value: "золотоноша", label: "Золотоноша" },
  { value: "золочів", label: "Золочів" },
  { value: "зугрес", label: "Зугрес" },
  { value: "ізмаїл", label: "Ізмаїл" },
  { value: "ізюм", label: "Ізюм" },
  { value: "іллічівськ", label: "Іллічівськ" },
  { value: "каменка", label: "Каменка" },
  { value: "канів", label: "Канів" },
  { value: "карлівка", label: "Карлівка" },
  { value: "каширське", label: "Каширське" },
  { value: "кировоград", label: "Кіровоград" },
  { value: "кобеляки", label: "Кобеляки" },
  { value: "козятин", label: "Козятин" },
  { value: "комсомольськ", label: "Комсомольськ" },
  { value: "констянтинівка", label: "Констянтинівка" },
  { value: "конотоп", label: "Конотоп" },
  { value: "корсунь-шевченківський", label: "Корсунь-Шевченківський" },
  { value: "костопіль", label: "Костопіль" },
  { value: "краматорськ", label: "Краматорськ" },
  { value: "красилів", label: "Красилів" },
  { value: "красноград", label: "Красноград" },
  { value: "краснодон", label: "Краснодон" },
  { value: "красноперекопськ", label: "Красноперекопськ" },
  { value: "красний-луч", label: "Красний Луч" },
  { value: "кременчук", label: "Кременчук" },
  { value: "кубишеве", label: "Кубишеве" },
  { value: "кузнецовськ", label: "Кузнецовськ" },
  { value: "куп'янськ", label: "Куп'янськ" },
  { value: "малин", label: "Малин" },
  { value: "марганець", label: "Марганець" },
  { value: "миргород", label: "Миргород" },
  { value: "міколаїв", label: "Миколаїв" },
  { value: "могилів-подільський", label: "Могилів-Подільський" },
  { value: "молодогвардійськ", label: "Молодогвардійськ" },
  { value: "моршин", label: "Моршин" },
  { value: "мукачево", label: "Мукачево" },
  { value: "нетішин", label: "Нетішин" },
  { value: "ніжин", label: "Ніжин" },
  { value: "нікополь", label: "Нікополь" },
  { value: "новгород-сіверський", label: "Новгород-Сіверський" },
  { value: "новий-розділ", label: "Новий Розділ" },
  { value: "нововолинськ", label: "Нововолинськ" },
  { value: "новоград-волинський", label: "Новоград-Волинський" },
  { value: "новомиргород", label: "Новомиргород" },
  { value: "новоукраїнка", label: "Новоукраїнка" },
  { value: "олександрія", label: "Олександрія" },
  { value: "оріхів", label: "Оріхів" },
  { value: "острог", label: "Острог" },
  { value: "первомайськ", label: "Первомайськ" },
  { value: "пирятин", label: "Пирятин" },
  { value: "покров", label: "Покров" },
  { value: "покровськ", label: "Покровськ" },
  { value: "прилуки", label: "Прилуки" },
  { value: "пустомити", label: "Пустомити" },
  { value: "радомишль", label: "Радомишль" },
  { value: "райгородок", label: "Райгородок" },
  { value: "ромни", label: "Ромни" },
  { value: "роздільна", label: "Роздільна" },
  { value: "саки", label: "Саки" },
  { value: "самбір", label: "Самбір" },
  { value: "сарни", label: "Сарни" },
  { value: "сімферополь", label: "Сімферополь" },
  { value: "славута", label: "Славута" },
  { value: "сніжне", label: "Сніжне" },
  { value: "сокаль", label: "Сокаль" },
  { value: "соледар", label: "Соледар" },
  { value: "соснівка", label: "Соснівка" },
  { value: "старобільськ", label: "Старобільськ" },
  { value: "стебник", label: "Стебник" },
  { value: "стрий", label: "Стрий" },
  { value: "тальне", label: "Тальне" },
  { value: "тарутине", label: "Тарутине" },
  { value: "татарбунари", label: "Татарбунари" },
  { value: "тлумач", label: "Тлумач" },
  { value: "токмак", label: "Токмак" },
  { value: "тростянець", label: "Тростянець" },
  { value: "трускавець", label: "Трускавець" },
  { value: "тульчин", label: "Тульчин" },
  { value: "турка", label: "Турка" },
  { value: "тячів", label: "Тячів" },
  { value: "умань", label: "Умань" },
  { value: "шепетівка", label: "Шепетівка" },
  { value: "шпола", label: "Шпола" },
  { value: "щастя", label: "Щастя" },
  { value: "южне", label: "Южне" },
  { value: "ялта", label: "Ялта" },
  { value: "яремче", label: "Яремче" },
  { value: "ясинувата", label: "Ясинувата" }
];

const ChooseRegions = ({ value, onChange }) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <h1 className="font-medium max-sm:flex max-sm:justify-start">Регіон</h1>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[250px] justify-between font-normal"
          >
            {value
              ? regions.find((region) => region.value === value)?.label
              : "Регіон"}
            <ChevronDown className="opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          {loading ? (
            <div className="flex items-center justify-center h-20 text-gray-500">
              Завантаження...
            </div>
          ) : (
            <Command>
              <CommandInput placeholder="Шукайте регіон..." className="h-9" />
              <CommandList>
                <CommandEmpty>Не знайдено такого регіону</CommandEmpty>
                <CommandGroup>
                  {regions.map((region) => (
                    <CommandItem
                      key={region.value}
                      value={region.value}
                      onSelect={(currentValue) => {
                        const newValue = currentValue === value ? "" : currentValue;
                        onChange(newValue);
                        setOpen(false);
                      }}
                    >
                      {region.label}
                      <Check
                        className={cn(
                          "ml-auto",
                          value === region.value ? "opacity-100" : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          )}
        </PopoverContent>
      </Popover>
    </>
  );
};

export default ChooseRegions;
