import Image from "next/image";

export default function EventCard({ event }) {
  return (
    <div className="group -my-4 rounded-[40px] p-4 transition-colors hover:bg-brand-blue">

      
      <div className="hidden lg:grid lg:grid-cols-[280px_220px_1fr] lg:items-center lg:gap-6">

        
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

        
        <div className="flex flex-col gap-2">
          <p className="font-gilroy text-[10px] uppercase leading-tight tracking-wide text-white/60">
            {event.category}
          </p>
          <h3 className="font-benzin text-[18px] font-bold uppercase leading-[1.05] text-white">
            {event.titleLines.map((line, index) => (
              <span key={index} className="block">{line}</span>
            ))}
          </h3>
        </div>

        
        <div className="flex flex-col gap-4">
          <p className="font-gilroy text-[12px] leading-[1.4] text-white/80">
            {event.description}
          </p>
          <div className="flex flex-nowrap items-center gap-3">
            <div className="mr-4 flex shrink-0 items-center gap-2">
              <Image src="/images/events/icon-child.svg" alt="Ребёнок" width={20} height={20} />
              <span className="font-gilroy text-[15px] text-white">{event.priceChild} ₽</span>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <Image src="/images/events/icon-adult.svg" alt="Взрослый" width={20} height={20} />
              <span className="font-gilroy text-[15px] text-white">{event.priceAdult} ₽</span>
            </div>
            <button
              type="button"
              className="ml-auto flex shrink-0 items-center gap-2 rounded-full border border-white/30 px-4 py-1.5 font-gilroy text-[12px] text-white/70 transition-colors hover:border-white/60 hover:text-white group-hover:border-white group-hover:text-white"
            >
              Выбрать дату
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              type="button"
              className="shrink-0 rounded-full bg-brand-blue px-5 py-1.5 font-gilroy text-[12px] font-bold text-white transition-colors hover:opacity-90 group-hover:bg-white group-hover:text-brand-blue"
            >
              Купить билет
            </button>
          </div>
        </div>
      </div>

      
      <div className="flex flex-col gap-4 lg:hidden">

        
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-6">
          <div className="relative shrink-0">
            <Image
              src={event.image}
              alt={event.titleLines.join(" ")}
              width={400}
              height={250}
              className="h-auto w-full rounded-[40px] md:w-[260px]"
            />
            <div className="absolute -right-1 -top-1 flex h-[26px] w-[26px] items-center justify-center rounded-full bg-white font-gilroy text-[11px] font-bold text-brand-dark">
              {event.age}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="font-gilroy text-[10px] uppercase leading-tight tracking-wide text-white/60">
              {event.category}
            </p>
            <h3 className="font-benzin text-[18px] font-bold uppercase leading-[1.05] text-white md:text-[18px]">
              {event.titleLines.map((line, index) => (
                <span key={index} className="block">{line}</span>
              ))}
            </h3>
          </div>
        </div>

        
        <p className="font-gilroy text-[12px] leading-[1.4] text-white/80">
          {event.description}
        </p>

        
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex shrink-0 items-center gap-2">
            <Image src="/images/events/icon-child.svg" alt="Ребёнок" width={20} height={20} />
            <span className="font-gilroy text-[15px] text-white">{event.priceChild} ₽</span>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <Image src="/images/events/icon-adult.svg" alt="Взрослый" width={20} height={20} />
            <span className="font-gilroy text-[15px] text-white">{event.priceAdult} ₽</span>
          </div>
          <button
            type="button"
            className="ml-auto flex shrink-0 items-center gap-2 rounded-full border border-white/30 px-4 py-1.5 font-gilroy text-[12px] text-white/70 transition-colors"
          >
            Выбрать дату
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            className="shrink-0 rounded-full bg-brand-blue px-5 py-1.5 font-gilroy text-[12px] font-bold text-white transition-colors hover:opacity-90"
          >
            Купить билет
          </button>
        </div>
      </div>
    </div>
  );
}