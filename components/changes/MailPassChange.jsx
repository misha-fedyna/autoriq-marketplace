"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import useUser from "@/hooks/useUser"

export default function SecuritySettings() {
    const { user } = useUser();
    const [currentPassword, setCurrentPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

  const handleChangePassword = () => {
    if (newPassword !== confirmPassword) {
      alert("Новий пароль і підтвердження не співпадають.");
      return;
    }
    alert("Пароль успішно змінено!");
  };

    return (
        <div className="space-y-6 max-w-xl">
            <div>
                <label className="block text-sm font-medium mb-1">Електронна пошта:</label>
                <div className="flex items-center space-x-2">
                    <Input value={user?.email || ''} readOnly />
                    <Button variant="outline" size="icon">
                        ✏️
                    </Button>
                </div>
            </div>
            <div>
                <label className="block text-sm font-medium mb-1">Поточний пароль</label>
                <Input
                    type="password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    placeholder="Введіть поточний пароль"
                />
            </div>
            <div>
                <label className="block text-sm font-medium mb-1">Новий пароль</label>
                <Input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="Введіть новий пароль"
                />
            </div>
            <div>
                <label className="block text-sm font-medium mb-1">Підтвердження пароля</label>
                <Input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Повторіть новий пароль"
                />
            </div>
            <Button className="bg-blue-700 hover:bg-blue-800" onClick={handleChangePassword}>
                Змінити пароль
            </Button>
        </div>
    )
}
