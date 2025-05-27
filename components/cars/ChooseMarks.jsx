"use client";

import { Check, ChevronDown } from "lucide-react";
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
import { carBrands } from "./CarFilter";

const marks = carBrands.map((brand) => ({
  value: brand.toLowerCase().replace(/\s|-/g, "-"),
  label: brand,
}));

// Додаємо пропси для передачі вибраної марки та регіону
const ChooseMarks = ({ value, onChange }) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <h1 className="font-medium max-sm:flex max-sm:justify-start">Я шукаю авто</h1>
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
          {loading ? (
            <div className="flex items-center justify-center h-20 text-gray-500">
              Завантаження...
            </div>
          ) : (
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
                        const newValue = currentValue === value ? "" : currentValue;
                        onChange(newValue);
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
          )}
        </PopoverContent>
      </Popover>
    </>
  );
};

export default ChooseMarks;
