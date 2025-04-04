import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
} from "../ui/dropdown-menu";
import Image from "next/image";
import profileDefault from "@/assets/images/profile.png";
import Link from "next/link";

const AccountImageAndDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Image
          src={profileDefault}
          alt="Profile image"
          width={30}
          height={30}
          className="cursor-pointer"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <Link href="/profile">
          <DropdownMenuCheckboxItem>Профіль</DropdownMenuCheckboxItem>
        </Link>

        <Link href="/cars/saved">
          <DropdownMenuCheckboxItem>Збережені авто</DropdownMenuCheckboxItem>
        </Link>

        <DropdownMenuCheckboxItem>Log Out</DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AccountImageAndDropdown;
