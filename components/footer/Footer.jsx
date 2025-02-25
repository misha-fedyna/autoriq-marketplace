import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo.png";
import { FaInstagram, FaFacebook, FaPaperPlane } from "react-icons/fa";
import ContactUsForm from "./ContactUsForm";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-700 text-white p-8 border-t-4 border-white">
      <div className="m-0">
        <div className="max-lg:flex flex-col-2 justify-between">
          <div className="flex flex-col-2 items-center max-lg:gap-16">
            <div className="mb-4">
              <Link href="/">
                <Image
                  src={logo}
                  alt="Autoriq logo"
                  height={60}
                  width={60}
                  className="mb-4"
                />
              </Link>

              <p>{`© ${currentYear} Autoriq`}</p>
            </div>

            <div className="ml-28 max-lg:mb-2 max-lg:ml-4">
              <h4 className="m-0 mb-2 text-3xl font-bold">Follow us</h4>
              <div className="flex gap-4">
                <FaFacebook className="w-8 h-8" />
                <FaInstagram className="w-8 h-8" />
                <FaPaperPlane className="w-6 h-6 mt-1" />
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
          <ContactUsForm />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
