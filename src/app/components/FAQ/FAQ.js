"use client";

import { useState } from "react";
import FAQTitle from "./FAQTitle";
import FAQItem from "./FAQItem";
import { faqItems } from "@/app/data/faq";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(-1); // все закрыты

  const handleToggle = (index) => {
    // Только первый работает
    if (index !== 0) return;
    setOpenIndex(openIndex === 0 ? -1 : 0);
  };

  return (
    <section className="w-full bg-brand-dark py-10 md:py-16">
      <div className="mx-auto flex max-w-[1000px] flex-col gap-10 px-3 lg:max-w-[1180px]">
        <FAQTitle />

        {/* Список */}
        <div className="flex flex-col gap-6">
          {faqItems.map((item, index) => (
            <FAQItem
              key={item.id}
              item={item}
              isOpen={openIndex === index}
              isActive={index === 0}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>

        {/* Показать ещё — визуально */}
        <button
          type="button"
          className="w-full rounded-full bg-brand-blue py-4 font-gilroy text-[16px] font-bold text-white transition-opacity hover:opacity-90"
        >
          Показать ещё
        </button>
      </div>
    </section>
  );
}