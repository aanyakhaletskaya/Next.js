import Image from "next/image";

export default function OnlineCard() {
  return (
    <div className="relative flex flex-col items-center justify-center md:min-h-[300px] md:overflow-hidden md:rounded-[40px] md:bg-[#0d0d0d] md:p-6 md:text-white lg:min-h-[420px] lg:p-8">

      
      <div className="pointer-events-none absolute inset-x-0 bottom-12 z-0 hidden md:block lg:bottom-0">
        <Image
          src="/images/planet.png"
          alt=""
          width={1600}
          height={600}
          priority
          className="h-auto w-full scale-150"
        />
      </div>

      
      <div className="relative z-10 flex w-full flex-col items-center">

        
        <div className="hidden items-center justify-center gap-3 md:flex lg:gap-4">
          <Image
            src="/icons/logo-online.svg"
            alt=""
            width={50}
            height={50}
            className="h-auto w-[42px] lg:w-[60px]"
          />
          <h2 className="font-benzin text-[22px] font-bold uppercase leading-[0.95] lg:text-[32px]">
            Онлайн-
            <br />
            прогулка
          </h2>
        </div>

        
        <div className="flex w-full items-start justify-between gap-2 px-2 md:mt-8 md:justify-center md:gap-3 md:px-0 lg:mt-12 lg:gap-6">

          
          <div className="order-1 flex flex-col items-center md:order-3 md:h-[100px] md:w-[100px] md:-translate-y-4 md:justify-center md:rounded-full md:bg-white md:text-brand-dark lg:h-[140px] lg:w-[140px] lg:-translate-y-6">
            <span className="font-benzin text-[18px] font-bold text-white md:text-[20px] md:text-brand-dark lg:text-[28px]">
              &gt;20
            </span>
            <span className="mt-1 font-gilroy text-[11px] text-white/70 md:text-brand-dark lg:text-[13px]">
              телескопов
            </span>
          </div>

          
          <div className="order-2 flex flex-col items-center md:h-[130px] md:w-[130px] md:justify-center md:rounded-full md:bg-brand-blue md:text-white lg:h-[180px] lg:w-[180px]">
            <span className="font-benzin text-[20px] font-bold text-white md:text-[26px] lg:text-[36px]">
              &gt;100
            </span>
            <span className="mt-1 text-center font-gilroy text-[11px] text-white/70 md:text-white lg:text-[13px]">
              программ
            </span>
          </div>

          
          <div className="order-3 flex flex-col items-center md:order-1 md:h-[100px] md:w-[100px] md:-translate-y-4 md:justify-center md:rounded-full md:bg-white md:text-brand-dark lg:h-[140px] lg:w-[140px] lg:-translate-y-6">
            <span className="font-benzin text-[18px] font-bold text-white md:text-[20px] md:text-brand-dark lg:text-[28px]">
              &gt;50
            </span>
            <span className="mt-1 font-gilroy text-[11px] text-white/70 md:text-brand-dark lg:text-[13px]">
              залов
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}