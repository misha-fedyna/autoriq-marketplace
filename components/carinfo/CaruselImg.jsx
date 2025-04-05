"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import img1 from "../../public/carusel/img-1.webp";
import img2 from "../../public/carusel/img-2.webp";
import img3 from "../../public/carusel/img-3.webp";
import img4 from "../../public/carusel/img-4.webp";
import img5 from "../../public/carusel/img-5.webp";
import img6 from "../../public/carusel/img-6.webp";
import img7 from "../../public/carusel/img-7.webp";
import img8 from "../../public/carusel/img-8.webp";
import img9 from "../../public/carusel/img-9.webp";
import img10 from "../../public/carusel/img-10.webp";
import img11 from "../../public/carusel/img-11.webp";
import img12 from "../../public/carusel/img-12.webp";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ImagesIcon } from "lucide-react";

const CaruselImg = () => {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);
  const images = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
  ];

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="relative w-[770px] h-[577px]">
      <Carousel setApi={setApi}>
        <CarouselContent>
          {images.map((img, index) => (
            <CarouselItem key={index}>
              <Image
                src={img}
                alt="car image"
                layout="responsive"
                width={770}
                height={577}
                className="rounded-[8px]"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="text-white absolute top-1/2 left-0 transform -translate-y-1/2 z-10 rounded-[8px] rounded-l-none bg-black/50 hover:bg-white/50 w-[50px] h-[60px]" />
        <CarouselNext className="text-white absolute top-1/2 right-0 transform -translate-y-1/2 z-10 rounded-[8px] rounded-r-none bg-black/50 hover:bg-white/50 w-[50px] h-[60px]" />
      </Carousel>
      <div className="flex gap-[10px] absolute top-[520px] right-4 bg-black/50 text-white px-4 py-2 rounded-[8px] z-10">
        <ImagesIcon />
        {current + 1} із {images.length}
      </div>
    </div>
  );
};

export default CaruselImg;
