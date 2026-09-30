import Image from "next/image";

export default function MainCard() {
  return (
    <div className="relative overflow-hidden rounded-[40px] bg-white p-6 text-brand-dark lg:p-10">
      <div className="relative z-10">
        <h1 className="font-benzin text-[32px] font-black leading-[0.95] scale-y-110 origin-left md:text-[36px] lg:text-[56px]">
          Раскройте тайны звёзд
          <br />
          с помощью <span className="text-brand-blue">Celestia</span>
        </h1>

        <p className="mt-4 max-w-[600px] font-gilroy text-[12px] text-[#1E1E1E] md:text-[13px] lg:mt-6 lg:text-[14px]">
          Мы проводим специальные мероприятия, такие как ночи наблюдения за звездами,
          <br />
          лекции и многое другое
        </p>

        <button
          type="button"
          className="mt-5 inline-flex h-[44px] items-center justify-center rounded-full bg-brand-blue px-8 font-benzin text-[14px] font-bold text-white transition-opacity hover:opacity-90 md:mt-6 md:h-[48px] md:px-10 md:text-[16px] lg:mt-8 lg:h-[56px] lg:px-14 lg:text-[20px]"
        >
          Подробнее
        </button>
      </div>

      {/* SVG-иллюстрация — только от 768px и выше */}
      <div className="pointer-events-none absolute bottom-0 right-0 z-0 hidden w-[450px] max-w-[80%] md:block lg:w-[600px]">
        <Image
          src="/images/orbits.svg"
          alt=""
          width={900}
          height={300}
          priority
          className="h-auto w-full"
        />
      </div>
    </div>
  );
}