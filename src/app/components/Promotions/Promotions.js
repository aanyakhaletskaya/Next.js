"use client";

import { useState } from "react";
import PromotionsTitle from "./PromotionsTitle";
import PromotionCard from "./PromotionCard";
import { promotions } from "@/app/data/promotions";

export default function Promotions() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? promotions.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev === promotions.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full bg-brand-dark py-10 md:py-16">
      <div className="mx-auto flex max-w-[1000px] flex-col gap-6 px-3 md:gap-10 lg:max-w-[1180px]">
        <PromotionsTitle />

        {/* ====== МОБИЛКА: одна карточка + стрелки ====== */}
        <div className="flex flex-col gap-4 md:hidden">
          {/* Одна карточка по индексу */}
          <PromotionCard promo={promotions[currentIndex]} />

          {/* Кнопки ← → — обе белые с синими стрелками */}
          <div className="flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={goPrev}
              aria-label="Предыдущая акция"
              className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-white text-brand-blue transition-opacity hover:opacity-80"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15 18l-6-6 6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button
              type="button"
              onClick={goNext}
              aria-label="Следующая акция"
              className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-white text-brand-blue transition-opacity hover:opacity-80"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path
                  d="M9 18l6-6-6-6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* ====== ПЛАНШЕТ и ДЕСКТОП: сетка ====== */}
        <div className="hidden grid-cols-2 gap-6 md:grid lg:grid-cols-3">
          {promotions.map((promo) => (
            <PromotionCard key={promo.id} promo={promo} />
          ))}
        </div>
      </div>
    </section>
  );
}