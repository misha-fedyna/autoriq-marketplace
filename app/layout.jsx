import { Geist, Geist_Mono } from "next/font/google"; 
import "@/assets/styles/globals.css";
import Navbar from "@/components/header/Navbar";
import Footer from "@/components/footer/Footer";
import { AuthProvider } from "@/context/AuthContext";
import ProtectedRoutes from "@/components/ProtectedRoutes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Autoriq",
  description: "The best car marketplace",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="uk" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AuthProvider>
          <ProtectedRoutes>
            <div className="min-h-screen flex flex-col">
              <Navbar />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
          </ProtectedRoutes>
        </AuthProvider>
      </body>
    </html>
  );
};

export default MainLayout;
