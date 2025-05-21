import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
} from "../ui/dropdown-menu";
import Image from "next/image";
import profileDefault from "@/assets/images/profile.png";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const AccountImageAndDropdown = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      // Clear all authentication data
      localStorage.clear();
      sessionStorage.clear();

      // Remove any cookies if present
      document.cookie.split(";").forEach(cookie => {
        document.cookie = cookie
          .replace(/^ +/, "")
          .replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`);
      });

      // Force a page reload to clear any in-memory state
      window.location.href = '/';
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Image
          src={profileDefault}
          alt="Profile image"
          width={30}
          height={30}
          className="cursor-pointer"
          loading="lazy" 
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <Link href="/profile">
          <DropdownMenuCheckboxItem>Профіль</DropdownMenuCheckboxItem>
        </Link>

        <Link href="/cars/saved">
          <DropdownMenuCheckboxItem>Збережені авто</DropdownMenuCheckboxItem>
        </Link>

        <DropdownMenuCheckboxItem onClick={handleLogout}>
          Log Out
        </DropdownMenuCheckboxItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AccountImageAndDropdown;
