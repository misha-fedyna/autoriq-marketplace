"use client";

import axios from "axios";
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
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";

export default function RegisterForm({ show, onOpenChange, onShowLogin }) {
  const [form, setForm] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    re_password: "",
    phone: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (form.password !== form.re_password) {
      setError("Паролі не співпадають");
      return;
    }

    try {
      const response = await axios.post("http://localhost:8008/api/users/auth/users/", {
        email: form.email,
        username: form.username,
        phone: form.phone,
        password: form.password,
        re_password: form.re_password,
      });

      console.log("Registration successful:", response.data);
      onShowLogin();
    } catch (err) {
      console.error("Registration error:", err.response?.data);
      const errorMessage =
        err.response?.data?.detail ||
        Object.values(err.response?.data || {})[0]?.[0] ||
        "Помилка при реєстрації";
      setError(errorMessage);
    }
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
              {error && <p className="text-red-500 text-sm">{error}</p>}
              <DialogTitle className="text-2xl text-blue-700">
                Створіть Ваш акаунт
              </DialogTitle>
              <DialogDescription>
                Введіть ваші дані для створення облікового запису
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Ім'я користувача</Label>
                <Input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="Вкажіть ім'я користувача..."
                  value={form.username}
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
                  placeholder="Введіть електрону пошту..."
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Номер телефону</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
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
              <div className="space-y-2 relative">
                <Label htmlFor="repeat-password">Повторіть пароль</Label>
                <Input
                  id="repeat-password"
                  name="re_password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Повторіть пароль..."
                  value={form.re_password}
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
              <Button
                type="submit"
                className="w-full bg-blue-700 hover:bg-blue-300"
                onSubmit={handleSubmit}
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
