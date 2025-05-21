"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import logo from "@/assets/images/logo.png";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Image src={logo} width={48} height={48} alt="Autoriq logo" priority={true} />
      <div className="p-6 lg:w-1/3 rounded-lg shadow-md text-center sm:w-full">
        <h1 className="text-3xl font-bold mb-4">Не знайдено</h1>
        <p className="text-destructive">Не вдалося знайти запитану сторінку</p>
        <Button variant="outline" className="mt-4 ml-2" onClick={() => (window.location.href = "/")}>
          На головну
        </Button>
      </div>
    </div>
  );
};

export default NotFoundPage;
