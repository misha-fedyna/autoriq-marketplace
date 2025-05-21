import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { FaGoogle } from "react-icons/fa";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, CarFront, SquarePlus, House } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
} from "../ui/dropdown-menu";
import Image from "next/image";
import profileDefault from "@/assets/images/profile.png";
import RegisterForm from "../registration/RegisterForm";

const MenuMobile = () => {
  const pathname = usePathname();

  const session = true;
  // const session = false;

  return (
    <div className="block md:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu className="text-white" />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="text-blue-500 text-3xl w-5">Меню</SheetTitle>
            <SheetDescription className="w-5">
              <Link href="/">
                <Button
                  variant="ghost"
                  className={`${
                    pathname === "/"
                      ? "bg-blue-200 text-blue-500 hover:bg-blue-300 hover:text-white"
                      : "text-blue-500 hover:bg-blue-300 hover:text-white"
                  }`}
                >
                  <House /> Головна
                </Button>
              </Link>
            </SheetDescription>
            <SheetDescription className="w-5">
              <Link href="/cars">
                <Button
                  variant="ghost"
                  className={`${
                    pathname === "/cars"
                      ? "bg-blue-200 text-blue-500 hover:bg-blue-300 hover:text-white"
                      : "text-blue-500 hover:bg-blue-300 hover:text-white"
                  }`}
                >
                  <CarFront /> Автомобілі
                </Button>
              </Link>
            </SheetDescription>

            <SheetDescription className="w-5">
              {session && (
                <Link href="/cars/add-car">
                  <Button
                    variant="ghost"
                    className={`${
                      pathname === "/add-car"
                        ? "bg-blue-200 text-blue-500 hover:bg-blue-300 hover:text-white"
                        : "text-blue-500 hover:bg-blue-300 hover:text-white"
                    }`}
                  >
                    <SquarePlus /> Додати автомобіль
                  </Button>
                </Link>
              )}
            </SheetDescription>
            <SheetDescription className="w-5">
              {!session && <RegisterForm />}
            </SheetDescription>

            <SheetDescription className="w-5">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  {session && (
                    <Image
                      src={profileDefault}
                      alt="Profile image"
                      width={30}
                      height={30}
                      className="cursor-pointer ml-2"
                      loading="lazy" // <-- додано lazy loading
                    />
                  )}
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <Link href="/profile">
                    <DropdownMenuCheckboxItem>Профіль</DropdownMenuCheckboxItem>
                  </Link>

                  <Link href="/cars/saved">
                    <DropdownMenuCheckboxItem>
                      Збережені авто
                    </DropdownMenuCheckboxItem>
                  </Link>

                  <DropdownMenuCheckboxItem>Log Out</DropdownMenuCheckboxItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MenuMobile;
