"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ImagesIcon } from "lucide-react";

const CaruselImg = ({ images, mainPhoto }) => {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);

  // Combine main photo with additional photos
  const allPhotos = [
    mainPhoto,
    ...images.map((img) => img.photo),
  ];

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="relative w-[770px] h-[577px] max-sm:w-[425px] max-sm:h-[100%] max-[375px]:!w-[375px] max-[320px]:!w-[320px]">
      <Carousel setApi={setApi}>
        <CarouselContent>
          {allPhotos.map((photo, index) => (
            <CarouselItem key={index}>
              <Image
                src={photo}
                alt={`Car image ${index + 1}`}
                layout="responsive"
                width={770}
                height={577}
                className="rounded-[8px]"
                loading="lazy"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="text-white absolute top-1/2 left-0 transform -translate-y-1/2 z-10 rounded-[8px] rounded-l-none bg-black/50 hover:bg-white/50 w-[50px] h-[60px] max-sm:w-[30px] max-sm:h-[40px]" />
        <CarouselNext className="text-white absolute top-1/2 right-0 transform -translate-y-1/2 z-10 rounded-[8px] rounded-r-none bg-black/50 hover:bg-white/50 w-[50px] h-[60px] max-sm:w-[30px] max-sm:h-[40px]" />
      </Carousel>
      <div className="flex gap-[10px] absolute top-[520px] right-4 bg-black/50 text-white px-4 py-2 rounded-[8px] z-10 max-sm:top-[260px] max-[375px]:!top-[230px] max-sm:right-2 max-[320px]:!top-[190px]">
        <ImagesIcon />
        {current + 1} із {allPhotos.length}
      </div>
    </div>
  );
};

export default CaruselImg;
