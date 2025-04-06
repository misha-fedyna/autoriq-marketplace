import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo.png";
import { FaInstagram, FaFacebook, FaPaperPlane } from "react-icons/fa";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import ContactUsForm from "./ContactUsForm";
import { Button } from "../ui/button";
import { X } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-700 text-white py-2 px-16">
      <div className="m-0">
        <div className="flex flex-col-2 justify-between items-center max-sm:block max-sm:space-y-5">
          <div className="flex flex-col-2 items-center max-lg:gap-16">
            <div className="flex flex-col items-center">
              <Link href="/">
                <Image src={logo} alt="Autoriq logo" height={100} width={100} />
              </Link>

              <p className="max-sm:text-[10px]">{`© ${currentYear} Autoriq`}</p>
            </div>

            <div className="ml-28 max-lg:mb-2 max-lg:ml-4">
              <h4 className="m-0 mb-2 text-2xl font-bold max-sm:text-2xl">
                Follow us
              </h4>
              <div className="flex gap-4">
                <FaFacebook className="w-5 h-5" />
                <FaInstagram className="w-5 h-5" />
                <FaPaperPlane className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* <div className="w-full">
            <div className="m-0 mb-2 w-[200px] mt-4">
              <h4 className="m-0 mb-2 text-3xl font-bold">Contact Us</h4>
              <p className="m-0 mb-2">Email: info@autoriq.com</p>
              <p className="m-0 mb-2">Phone: +123 456 7890</p>
            </div>
          </div> */}

          <AlertDialog>
            <AlertDialogTrigger
              className="flex justify-self-center rounded-[8px] px-7 bg-white m-0 text-blue-300 text-[30px] h-12 w-[300px] 
              max-sm:font-medium max-sm:text-[25px] max-sm:py-1 max-sm:px-8 max-sm:w-[280px] hover:bg-blue-300 hover:text-white"
            >
              Зв'язатися з нами
            </AlertDialogTrigger>
            <AlertDialogContent>
              <div className="flex justify-between items-center">
                <AlertDialogTitle className="w-[260px] font-medium text-[30px] ml-[110px] text-blue-500 max-sm:ml-[40px]">
                  Зв'язатися з нами
                </AlertDialogTitle>
                <AlertDialogCancel className="px-3 rounded-full hover:bg-gray-200 transition">
                  <X className="w-5 h-5" />
                </AlertDialogCancel>
              </div>
              <ContactUsForm />
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
