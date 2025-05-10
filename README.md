# 🚗 AutoRIQ Market

**AutoRIQ Market** — зручний маркетплейс автомобілів, де користувачі можуть переглядати авто, а зареєстровані учасники отримують додаткові можливості: додавання оголошень та спілкування з власниками автомобілів. Це маркетплейс для продажу автомобілів, створений на базі **Next.js**, **Tailwind CSS**, **shadcn/ui**, **lucide-react** та **react-icons**.

Посилання на дизайн
https://www.figma.com/design/GkRLxmuJXEovVnA6aO6V1o/Autoriq?node-id=0-1&p=f&t=GzCulgIatW6hUpBl-0

---

## 📦 Стек технологій

- [**Next.js**](https://nextjs.org/) — фреймворк для React з SSR та CSR підтримкою.
- [**Tailwind CSS**](https://tailwindcss.com/) — утилітарний CSS фреймворк.
- [**shadcn/ui**](https://ui.shadcn.com/) — набір кастомізованих UI-компонентів.
- [**lucide-react**](https://lucide.dev/) — сучасні SVG-іконки.
- [**react-icons**](https://react-icons.github.io/react-icons/) — популярні іконки в одному пакеті.

---

## 🛠 Встановлення та запуск проєкту

### 1. Встановлення Node.js та npm

Завантажте [Node.js (v20.18.3)](https://nodejs.org/dist/v20.18.3/node-v20.18.3-x64.msi) та встановіть.

Після встановлення перевірте версії:

```bash
node -v # Повинно вивести "v20.18.3"
npm -v  # Повинно вивести "10.8.2"
```

---

### 2. Клонування проєкту

```bash
mkdir Team-Project
cd Team-Project
git clone https://github.com/misha-fedyna/autoriq-marketplace.git
cd autoriq-market
```

> ⚠️ **ВАЖЛИВО:** Після клонування перейдіть на гілку `dev`:

```bash
git checkout dev        # Переходите з main на dev
git pull origin dev     # Завантаження останніх змін з dev
```

---

### 3. Встановлення залежностей

```bash
npm install
```

---

### 4. Запуск проєкту в режимі розробки

```bash
npm run dev
```

Відкрийте [http://localhost:3000](http://localhost:3000) у браузері.

---

### 5. Додаткові команди

| Команда               | Опис                             |
|-----------------------|----------------------------------|
| `npm run build`       | Збірка проєкту для продакшену    |
| `npm run start`       | Запуск продакшен-сервера         |
| `npm run lint`        | Аналіз коду за допомогою ESLint  |

---

## 📁 Структура проєкту

```
.
├── app/              # App Router сторінки та layout'и
├── components/       # Повторно використовувані компоненти
├── lib/              # API-клієнти, утиліти, хелпери
├── styles/           # Глобальні стилі та Tailwind конфіг
├── public/           # Зображення, фавікони тощо
└── ...
```

---

## 🎨 Стилізація та UI

- **Tailwind CSS** — швидке стилювання через класи.
- **shadcn/ui** — UI-компоненти з підтримкою теми та Radix.
- **lucide-react**, **react-icons** — SVG-іконки.

### Приклад імпорту іконок:

```tsx
import { ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
```

---

## 🧱 Додавання нових компонентів з shadcn/ui

```bash
npx shadcn-ui@latest add <component-name>
```

> Наприклад:

```bash
npx shadcn-ui@latest add button
```

---

## 🧑‍💻 Розробники

👦 https://github.com/misha-fedyna
👦 https://github.com/Ivan-Synchuk
👧 https://github.com/elizabethzherebetska

---
