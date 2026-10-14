"use client";

import { useState } from "react";

export default function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Введите имя";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Введите номер телефона";
    } else if (!/^\+7 \d{3} \d{3}-\d{2}-\d{2}$/.test(formData.phone)) {
      newErrors.phone = "Формат: +7 XXX XXX-XX-XX";
    }

    if (!formData.date) {
      newErrors.date = "Выберите дату";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    alert("Спасибо! Мы свяжемся с вами для подтверждения.");
    setFormData({ name: "", phone: "", date: "" });
  };

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: "" });
    }
  };

  const handlePhoneChange = (value) => {
    const digits = value.replace(/\D/g, "");

    let formatted = "";
    if (digits.length > 0) {
      formatted = "+7";
      if (digits.length > 1) formatted += " " + digits.slice(1, 4);
      if (digits.length > 4) formatted += " " + digits.slice(4, 7);
      if (digits.length > 7) formatted += "-" + digits.slice(7, 9);
      if (digits.length > 9) formatted += "-" + digits.slice(9, 11);
    }

    handleChange("phone", formatted);
  };

  return (
    <section className="w-full bg-brand-dark py-10 md:py-16">
      <div className="mx-auto flex max-w-[1000px] flex-col gap-10 px-3 lg:max-w-[1180px]">
        {/* Заголовок */}
        <h2 className="mx-auto max-w-[900px] text-center font-benzin text-[15px] font-black uppercase leading-[1.15] text-white md:text-[34px] lg:text-[48px]">
  <span className="whitespace-nowrap">Ваш билет в космос —</span>
  <br />
  <span className="whitespace-nowrap">быстрая запись на</span>
  <br />
  <span className="whitespace-nowrap">экскурсию</span>
</h2>

        {/* Форма + картинка */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
          
          {/* Левая — форма */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <p className="font-gilroy text-[13px] leading-[1.5] text-white/80 md:text-[14px]">
              Запишитесь на экскурсию в планетарий. Просто укажите ваше имя,
              электронную почту и дату, и мы свяжемся с вами для подтверждения
            </p>

            {/* Имя */}
            <div className="flex flex-col gap-1">
              <input
                type="text"
                placeholder="Введите ваше имя"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className={`rounded-full border bg-transparent px-6 py-4 font-gilroy text-[14px] text-white placeholder:text-white/50 focus:outline-none ${
                  errors.name
                    ? "border-red-500"
                    : "border-white/30 focus:border-white"
                }`}
              />
              {errors.name && (
                <span className="px-4 font-gilroy text-[12px] text-red-500">
                  {errors.name}
                </span>
              )}
            </div>

            {/* Телефон */}
            <div className="flex flex-col gap-1">
              <input
                type="tel"
                placeholder="+7 ___ ___-__-__"
                value={formData.phone}
                onChange={(e) => handlePhoneChange(e.target.value)}
                className={`rounded-full border bg-transparent px-6 py-4 font-gilroy text-[14px] text-white placeholder:text-white/50 focus:outline-none ${
                  errors.phone
                    ? "border-red-500"
                    : "border-white/30 focus:border-white"
                }`}
              />
              {errors.phone && (
                <span className="px-4 font-gilroy text-[12px] text-red-500">
                  {errors.phone}
                </span>
              )}
            </div>

            {/* Дата */}
            <div className="flex flex-col gap-1">
              <div className="relative">
                <select
                  value={formData.date}
                  onChange={(e) => handleChange("date", e.target.value)}
                  className={`w-full cursor-pointer appearance-none rounded-full border bg-transparent px-6 py-4 font-gilroy text-[14px] focus:outline-none ${
                    errors.date
                      ? "border-red-500"
                      : "border-white/30 focus:border-white"
                  } ${!formData.date ? "text-white/50" : "text-white"}`}
                >
                  <option value="" disabled className="bg-brand-dark text-white">
                    Дата посещения
                  </option>
                  <option value="2025-11-15" className="bg-brand-dark text-white">
                    15 ноября 2025
                  </option>
                  <option value="2025-11-16" className="bg-brand-dark text-white">
                    16 ноября 2025
                  </option>
                  <option value="2025-11-17" className="bg-brand-dark text-white">
                    17 ноября 2025
                  </option>
                  <option value="2025-11-18" className="bg-brand-dark text-white">
                    18 ноября 2025
                  </option>
                </select>

                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2"
                >
                  <path
                    d="M6 9l6 6 6-6"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              {errors.date && (
                <span className="px-4 font-gilroy text-[12px] text-red-500">
                  {errors.date}
                </span>
              )}
            </div>

            {/* Кнопка */}
            <button
              type="submit"
              className="rounded-full bg-brand-blue py-4 font-gilroy text-[16px] font-bold text-white transition-opacity hover:opacity-90"
            >
              Отправить
            </button>

            {/* Подпись */}
            <p className="font-gilroy text-[11px] text-white/50">
              *Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности.
            </p>
          </form>

          {/* Правая — картинка */}
          <div className="h-[400px] overflow-hidden rounded-[40px] md:h-[500px] lg:h-[350px]">
            <img
              src="/images/booking/astronauts.png"
              alt="Космонавты"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}