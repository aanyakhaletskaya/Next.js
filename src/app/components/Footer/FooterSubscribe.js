"use client";

import { useState } from "react";

export default function FooterSubscribe() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      setError("Введите email");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Неверный формат email");
      return;
    }

    setError("");
    alert("Спасибо за подписку!");
    setEmail("");
  };

  return (
    <div className="flex flex-col items-center gap-6 md:items-stretch lg:flex-row lg:items-center lg:justify-between">
      
    
      <a
        href="#"
        className="order-2 whitespace-nowrap text-center font-gilroy text-[12px] text-white/60 transition-colors hover:text-white lg:order-1 lg:text-left"
      >
        Политика конфиденциальности
      </a>

      
      <form
        onSubmit={handleSubmit}
        className="order-1 flex w-full flex-col gap-4 rounded-[40px] bg-white p-6 md:gap-5 lg:order-2 lg:w-auto lg:flex-row lg:items-center lg:gap-4 lg:rounded-full lg:py-3 lg:pl-8 lg:pr-3 lg:ml-auto"
      >
        
        <p className="font-benzin text-[20px] font-black uppercase leading-[1.1] text-brand-blue md:text-[22px] lg:text-[18px] lg:whitespace-nowrap lg:leading-tight xl:text-[20px]">
          Подписаться на рассылку
        </p>

        <div className="flex w-full flex-col gap-3 md:flex-row md:items-center md:gap-4 lg:w-auto">
          <input
            type="email"
            placeholder="Электронная почта"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) setError("");
            }}
            className={`w-full rounded-full border px-6 py-3 font-gilroy text-[14px] text-brand-dark placeholder:text-gray-400 focus:outline-none lg:w-[200px] lg:py-2 ${
              error ? "border-red-500" : "border-gray-300 focus:border-brand-blue"
            }`}
          />

          <button
            type="submit"
            className="rounded-full bg-brand-blue px-6 py-3 font-gilroy text-[14px] font-bold uppercase text-white transition-opacity hover:opacity-90 lg:py-3 lg:text-[14px]"
          >
            Подписаться
          </button>
        </div>

        {error && (
          <p className="font-gilroy text-[11px] text-red-500">
            {error}
          </p>
        )}
      </form>
    </div>
  );
}