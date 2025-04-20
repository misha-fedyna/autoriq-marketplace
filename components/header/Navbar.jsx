"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo.png";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { FaGoogle } from "react-icons/fa";
import { CarFront, SquarePlus, House, MessageSquareMore } from "lucide-react";
import MenuMobile from "@/components/header/MenuMobile";
import AccountImageAndDropdown from "./AccountImageAndDropdown";
import RegisterForm from "@/components/registration/RegisterForm";

const Navbar = () => {
  const pathname = usePathname();

  const session = true;
  // const session = false;

  return (
    <nav className="bg-blue-700 p-2 flex justify-between items-center border-b border-blue-500">
      <div className="flex items-center pl-10 space-x-6">
        <Link href="/">
          <Image
            src={logo}
            alt="Logo"
            className="p-0"
            height={100}
            width={100}
          />
        </Link>

        <span className="hidden md:block text-3xl text-white font-bold">
          Autoriq
        </span>

        <div className="hidden md:block space-x-2">
          <Link href="/">
            <Button
              variant="ghost"
              className={`${
                pathname === "/"
                  ? "bg-white text-blue-500 hover:bg-blue-300 hover:text-white"
                  : "text-white hover:bg-blue-300 hover:text-white"
              }`}
            >
              <House /> Головна
            </Button>
          </Link>
          <Link href="/cars">
            <Button
              variant="ghost"
              className={`${
                pathname === "/cars"
                  ? "bg-white text-blue-500 hover:bg-blue-300 hover:text-white"
                  : "text-white hover:bg-blue-300 hover:text-white"
              }`}
            >
              <CarFront /> Автомобілі
            </Button>
          </Link>

          {session && (
            <Link href="/cars/add-car">
              <Button
                variant="ghost"
                className={`${
                  pathname === "/cars/add-car"
                    ? "bg-white text-blue-500 hover:bg-blue-300 hover:text-white"
                    : "text-white hover:bg-blue-300 hover:text-white"
                }`}
              >
                <SquarePlus /> Додати автомобіль
              </Button>
            </Link>
          )}
        </div>
      </div>

      <div className="max-sm:hidden flex justify-end items-center pr-10 space-x-5">
        {session && <AccountImageAndDropdown />}

        {!session && <RegisterForm />}
      </div>
      <MenuMobile />
    </nav>
  );
};

export default Navbar;
