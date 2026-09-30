import MainCard from "./MainCard";
import CouplesCard from "./CouplesCard";
import DiscountCard from "./DiscountCard";
import OnlineCard from "./OnlineCard";

export default function Promo() {
  return (
    <section className="w-full bg-brand-dark pt-2 pb-10">
      <div className="mx-auto flex max-w-[900px] flex-col gap-3 px-3 lg:max-w-[1180px]">
        <MainCard />

        {/* Мобилка: столбик. Планшет+: 2 колонки */}
        <div className="flex flex-col gap-3 md:grid md:grid-cols-[1fr_2fr]">
          <div className="flex flex-col gap-3">
            <CouplesCard />
            <DiscountCard />
          </div>
          <OnlineCard />
        </div>
      </div>
    </section>
  );
}