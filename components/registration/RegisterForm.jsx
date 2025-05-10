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


export default function RegisterForm({ show, onOpenChange, onShowLogin }) {
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

  return (
    <Dialog open={show} onOpenChange={onOpenChange}>
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
                <Label htmlFor="name">Прізвіще та ім'я</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Вкажіть прізвище та ім'я..."
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Електрона пошта</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Введіть електрону пошту..."
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Номер телефону</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="phone"
                  placeholder="Введіть номер телефону..."
                  value={form.phone}
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
            </form>
            <p className="text-sm text-center text-muted-foreground">
              Вже маєте акаунт?{" "}
              <Button
                variant="link"
                className="underline p-0"
                onClick={onShowLogin}
              >
                Увійти
              </Button>
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
