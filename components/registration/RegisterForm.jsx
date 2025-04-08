"use client";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function RegisterForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    acceptTerms: false,
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.acceptTerms) {
      alert("Щоб продовжити, потрібно прийняти умови використання.");
      return;
    }
    console.log("Форма реєстрації:", form);
    // TODO: реалізувати реєстрацію через бекенд
  };

  const handleGoogleSignup = () => {
    console.log("Реєстрація через Google");
    // TODO: реалізувати Google OAuth
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className={
            "bg-white text-blue-500 hover:bg-blue-300 hover:text-white"
          }
        >
          Зареєструватися
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl p-0 overflow-hidden border-none">
        <div className="grid grid-cols-1 sm:grid-cols-2 w-full h-full">
          <div
            className="hidden sm:block bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/register-img.jpg')" }}
          ></div>
          <div className="p-8 flex flex-col justify-center space-y-6">
            <DialogHeader>
              <DialogTitle className="text-2xl text-blue-700">
                Створіть Ваш акаунт
              </DialogTitle>
              <DialogDescription>
                Введіть ваші дані для створення облікового запису
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Ім’я користувача</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Вкажіть ім'я..."
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Електронна пошта</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Введіть електронну пошту..."
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2 relative">
                <Label htmlFor="password">Пароль</Label>
                <Input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Введіть пароль..."
                  value={form.password}
                  onChange={handleChange}
                  required
                  className="pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-3 top-9 text-gray-500 hover:text-gray-700"
                  tabIndex={-1}
                >
                  {showPassword ? (
                    <Eye className="w-5 h-5" />
                  ) : (
                    <EyeOff className="w-5 h-5" />
                  )}
                </button>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  name="acceptTerms"
                  checked={form.acceptTerms}
                  onCheckedChange={(checked) =>
                    setForm((prev) => ({ ...prev, acceptTerms: !!checked }))
                  }
                />
                <label
                  htmlFor="terms"
                  className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Продовжуючи, ви приймаєте умови використання Autoriq.
                </label>
              </div>
              <Button
                type="submit"
                className="w-full bg-blue-700 hover:bg-blue-300"
              >
                Зареєструватися
              </Button>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="flex-1 h-px bg-gray-300" />
                або
                <div className="flex-1 h-px bg-gray-300" />
              </div>
              <Button
                type="button"
                variant="outline"
                className="w-full"
                onClick={handleGoogleSignup}
              >
                <Image
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="Google"
                  width={20}
                  height={20}
                  className="w-5 h-5 mr-2"
                />{" "}
                Зареєструватися за допомогою Google
              </Button>
            </form>
            <p className="text-sm text-center text-muted-foreground">
              Вже маєте акаунт?{" "}
              <Link href="#" className="underline">
                Увійти
              </Link>
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
