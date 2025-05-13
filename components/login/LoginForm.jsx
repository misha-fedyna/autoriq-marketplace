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
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import RegisterForm from "../registration/RegisterForm";
import axios from "axios";
import { useAuth } from '@/context/AuthContext';

export default function LoginForm() {
    const [form, setForm] = useState({
        email: "",
        password: "",
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const [error, setError] = useState("");
    const { setIsAuthenticated } = useAuth();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const response = await axios.post('http://localhost:8008/api/users/auth/jwt/create/', {
                email: form.email,
                password: form.password
            });

            // Store the tokens
            localStorage.setItem('access_token', response.data.access);
            localStorage.setItem('refresh_token', response.data.refresh);

            // Set authenticated state
            setIsAuthenticated(true);

            // Close the login dialog
            setShowLogin(false);
        } catch (err) {
            setError(err.response?.data?.detail || "Невірні дані для входу");
        }
    };

    return (
        <>
            <Dialog open={showLogin} onOpenChange={setShowLogin}>
                <DialogTrigger asChild>
                    <Button
                        variant="ghost"
                        className={"bg-white text-blue-500 hover:bg-blue-300 hover:text-white"}
                        onClick={() => setShowLogin(true)}
                    >
                        Увійти
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
                                <DialogTitle className="text-2xl text-blue-700">Вхід в акаунт</DialogTitle>
                                <DialogDescription>
                                    Введіть ваші дані для входу в обліковий запис
                                </DialogDescription>
                            </DialogHeader>
                            <form onSubmit={handleSubmit} className="space-y-4">
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
                                <Button
                                    type="submit"
                                    className="w-full bg-blue-700 hover:bg-blue-300"
                                >
                                    Увійти
                                </Button>
                            </form>
                            <p className="text-sm text-center text-muted-foreground">
                                Не маєте акаунту?{" "}
                                <Button
                                    variant="link"
                                    className="underline p-0"
                                    onClick={() => {
                                        setShowLogin(false);
                                        setShowRegister(true);
                                    }}
                                >
                                    Зареєструватися
                                </Button>
                            </p>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
            <RegisterForm
                show={showRegister}
                onOpenChange={setShowRegister}
                onShowLogin={() => {
                    setShowRegister(false);
                    setShowLogin(true);
                }}
            />
        </>
    );
}
