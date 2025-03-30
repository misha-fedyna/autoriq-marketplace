"use client";

import { Check, ChevronDown } from "lucide-react";

import { useState } from "react";

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

const marks = [
  {
    value: "audi",
    label: "Audi",
  },
  {
    value: "bmw",
    label: "BMW",
  },
  {
    value: "mercedes-benz",
    label: "Mercedes-Benz",
  },
  {
    value: "porsche",
    label: "Porsche",
  },
  {
    value: "volkswagen",
    label: "Volkswagen",
  },
  {
    value: "toyota",
    label: "Toyota",
  },
  {
    value: "honda",
    label: "Honda",
  },
  {
    value: "nissan",
    label: "Nissan",
  },
  {
    value: "ford",
    label: "Ford",
  },
  {
    value: "chevrolet",
    label: "Chevrolet",
  },
  {
    value: "ferrari",
    label: "Ferrari",
  },
  {
    value: "lamborghini",
    label: "Lamborghini",
  },
  {
    value: "maserati",
    label: "Maserati",
  },
  {
    value: "bugatti",
    label: "Bugatti",
  },
  {
    value: "tesla",
    label: "Tesla",
  },
  {
    value: "volvo",
    label: "Volvo",
  },
  {
    value: "subaru",
    label: "Subaru",
  },
  {
    value: "mazda",
    label: "Mazda",
  },
  {
    value: "jaguar",
    label: "Jaguar",
  },
  {
    value: "land-rover",
    label: "Land Rover",
  },
];

const ChooseMarks = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <>
      <h1 className="font-medium">Я шукаю авто</h1>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-[250px] justify-between font-normal"
          >
            {value
              ? marks.find((mark) => mark.value === value)?.label
              : "Марка"}
            <ChevronDown className="opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <Command>
            <CommandInput placeholder="Шукайте марку..." className="h-9" />
            <CommandList>
              <CommandEmpty>Не знайдено такої марки</CommandEmpty>
              <CommandGroup>
                {marks.map((mark) => (
                  <CommandItem
                    key={mark.value}
                    value={mark.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    {mark.label}
                    <Check
                      className={cn(
                        "ml-auto",
                        value === mark.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default ChooseMarks;
