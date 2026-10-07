import Image from "next/image";

export default function EventCard({ event }) {
  return (
    <div className="group grid grid-cols-[280px_220px_1fr] items-center gap-6 rounded-[40px] px-4 py-2 transition-colors hover:bg-brand-blue">

      {/* Колонка 1: картинка с бейджем */}
      <div className="relative">
        <Image
          src={event.image}
          alt={event.titleLines.join(" ")}
          width={280}
          height={180}
          className="h-auto w-full rounded-[40px]"
        />
        <div className="absolute -right-1 -top-1 flex h-[26px] w-[26px] items-center justify-center rounded-full bg-white font-gilroy text-[11px] font-bold text-brand-dark">
          {event.age}
        </div>
      </div>

      {/* Колонка 2: категория + заголовок */}
      <div className="flex flex-col gap-2">
        <p className="font-gilroy text-[10px] uppercase leading-tight tracking-wide text-white/60">
          {event.category}
        </p>
        <h3 className="font-benzin text-[18px] font-bold uppercase leading-[1.05] text-white">
          {event.titleLines.map((line, index) => (
            <span key={index} className="block">
              {line}
            </span>
          ))}
        </h3>
      </div>

      {/* Колонка 3: описание + цены + кнопки */}
      <div className="flex flex-col gap-4">
        <p className="font-gilroy text-[12px] leading-[1.4] text-white/80">
          {event.description}
        </p>

        <div className="flex flex-nowrap items-center gap-3">
          {/* Цена — ребёнок */}
          <div className="mr-4 flex shrink-0 items-center gap-2">
            <Image src="/images/events/icon-child.svg" alt="Ребёнок" width={20} height={20} />
            <span className="font-gilroy text-[15px] text-white">
                {event.priceChild} ₽
            </span>
          </div>

          {/* Цена — взрослый */}
          <div className="flex shrink-0 items-center gap-2">
            <Image src="/images/events/icon-adult.svg" alt="Взрослый" width={20} height={20} />
            <span className="font-gilroy text-[15px] text-white">
                {event.priceAdult} ₽
            </span>
          </div>

          {/* Кнопка «Выбрать дату» */}
          <button
        type="button"
        className="ml-auto flex shrink-0 items-center gap-2 rounded-full border border-white/30 px-4 py-1.5 font-gilroy text-[12px] text-white/70 transition-colors hover:border-white/60 hover:text-white"
        >
        Выбрать дату
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
            d="M6 9l6 6 6-6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            />
        </svg>
        </button>

          {/* Кнопка «Купить билет» */}
          <button
            type="button"
            className="shrink-0 rounded-full bg-brand-blue px-5 py-1.5 font-gilroy text-[12px] font-bold text-white transition-opacity hover:opacity-90"
          >
            Купить билет
          </button>
        </div>
      </div>
    </div>
  );
}