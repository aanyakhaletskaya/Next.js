import Link from "next/link"; 
import Image from "next/image";
import { notFound } from "next/navigation";
import { events } from "@/app/data/events";

export default function EventDetailPage({ params }) {
  const event = events.find((e) => e.slug === params.slug);

  if (!event) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-brand-dark py-10 md:py-16 text-white">
      <div className="mx-auto flex max-w-[1000px] flex-col gap-8 px-3 lg:max-w-[1180px]">
        
        
        <Link 
          href="/events" 
          className="inline-flex items-center gap-2 font-gilroy text-[14px] text-white/70 transition-colors hover:text-white"
        >
          ← Все события
        </Link>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center lg:gap-12">
          
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[40px]">
            <Image
              src={event.image}
              alt={event.titleLines.join(" ")}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute right-4 top-4 flex h-[44px] w-[44px] items-center justify-center rounded-full bg-white font-gilroy text-[14px] font-bold text-brand-dark">
              {event.age}
            </div>
          </div>

          
          <div className="flex flex-col gap-6">
            <p className="font-gilroy text-[12px] uppercase tracking-wide text-white/60">
              {event.category}
            </p>
            
            <h1 className="font-benzin text-[32px] font-black uppercase leading-[1.05] text-white md:text-[44px]">
              {event.titleLines.join(" ")}
            </h1>

            <p className="font-gilroy text-[14px] leading-[1.6] text-white/80 md:text-[16px]">
              {event.description}
            </p>

            
            <div className="flex items-center gap-6 border-t border-white/10 pt-6">
              <div className="flex items-center gap-2">
                <span className="font-gilroy text-[14px] text-white/60">Детский:</span>
                <span className="font-benzin text-[20px] font-bold text-white">{event.priceChild} ₽</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-gilroy text-[14px] text-white/60">Взрослый:</span>
                <span className="font-benzin text-[20px] font-bold text-white">{event.priceAdult} ₽</span>
              </div>
            </div>

            
            <div className="flex flex-col gap-3 pt-4 sm:flex-row">
              <button className="flex-1 rounded-full bg-brand-blue py-4 font-gilroy text-[16px] font-bold text-white transition-opacity hover:opacity-90">
                Купить билет
              </button>
            </div>
          </div>
        </div>

        
        <div className="mt-8 border-t border-white/10 pt-8 text-center">
          <Link 
            href="/" 
            className="font-gilroy text-[14px] text-white/60 transition-colors hover:text-white"
          >
            ← Вернуться на главную
          </Link>
        </div>

      </div>
    </main>
  );
}