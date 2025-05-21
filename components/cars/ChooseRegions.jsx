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

const regions = [
  { value: "автономна-республіка-крим", label: "Автономна Республіка Крим" },
  { value: "вінницька", label: "Вінницька" },
  { value: "волинська", label: "Волинська" },
  { value: "дніпропетровська", label: "Дніпропетровська" },
  { value: "донецька", label: "Донецька" },
  { value: "житомирська", label: "Житомирська" },
  { value: "закарпатська", label: "Закарпатська" },
  { value: "запорізька", label: "Запорізька" },
  { value: "івано-франківська", label: "Івано-Франківська" },
  { value: "київська", label: "Київська" },
  { value: "кіровоградська", label: "Кіровоградська" },
  { value: "луганська", label: "Луганська" },
  { value: "львівська", label: "Львівська" },
  { value: "миколаївська", label: "Миколаївська" },
  { value: "одеська", label: "Одеська" },
  { value: "полтавська", label: "Полтавська" },
  { value: "рівненська", label: "Рівненська" },
  { value: "сумська", label: "Сумська" },
  { value: "тернопільська", label: "Тернопільська" },
  { value: "харківська", label: "Харківська" },
  { value: "херсонська", label: "Херсонська" },
  { value: "хмельницька", label: "Хмельницька" },
  { value: "черкаська", label: "Черкаська" },
  { value: "чернівецька", label: "Чернівецька" },
  { value: "чернігівська", label: "Чернігівська" },
];

const ChooseRegions = () => {
  const [open, setOpen] = useState(false);
  const [selectedRegions, setSelectedRegions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); // Імітація завантаження 1 сек
    return () => clearTimeout(timer);
  }, []);

  const toggleRegion = (regionValue) => {
    setSelectedRegions((prev) =>
      prev.includes(regionValue)
        ? prev.filter((val) => val !== regionValue)
        : [...prev, regionValue]
    );
  };

  const clearSelection = () => {
    setSelectedRegions([]);
  };

  const removeRegion = (regionValue) => {
    setSelectedRegions((prev) => prev.filter((val) => val !== regionValue));
  };

  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-medium max-sm:flex max-sm:justify-start">
        Виберіть регіони
      </h1>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[250px] justify-between font-normal"
          >
            {selectedRegions.length === 0
              ? "Оберіть регіон"
              : selectedRegions.length === 1
              ? regions.find((r) => r.value === selectedRegions[0])?.label
              : "Змінити вибір"}
            <ChevronDown className="opacity-50 ml-2" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[250px] p-0">
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
                      onSelect={() => toggleRegion(region.value)}
                    >
                      {region.label}
                      <Check
                        className={cn(
                          "ml-auto",
                          selectedRegions.includes(region.value)
                            ? "opacity-100"
                            : "opacity-0"
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

      {selectedRegions.length > 1 && (
        <div className="border p-2 rounded-md">
          <h2 className="text-sm font-medium mb-2">Вибрані регіони:</h2>
          <div className="flex flex-col gap-1">
            {selectedRegions.map((regionValue) => {
              const region = regions.find((r) => r.value === regionValue);
              return (
                <div
                  key={regionValue}
                  className="flex items-center justify-between bg-white p-1 rounded-md shadow-sm"
                >
                  <span className="text-sm">{region?.label}</span>
                  <Button
                    className="bg-transparent p-2 text-red-500 hover:bg-gray-50"
                    onClick={() => removeRegion(regionValue)}
                  >
                    <X size={16} />
                  </Button>
                </div>
              );
            })}
          </div>
          <Button
            variant="ghost"
            className="mt-1 justify-self-center text-red-500 hover:text-red-500 hover:bg-gray-50 flex items-center gap-2"
            onClick={clearSelection}
          >
            <X size={16} /> Очистити вибір
          </Button>
        </div>
      )}
    </div>
  );
};

export default ChooseRegions;
