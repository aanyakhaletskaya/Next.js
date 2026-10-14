import Image from "next/image";

export default function PromotionCard({ promo }) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-[40px] transition-colors">
      
      {/* Фото — фиксированной высоты */}
      <div className="relative h-[240px] w-full overflow-hidden">
        <Image
          src={promo.image}
          alt={promo.titleLines.join(" ")}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Плашка — растягивается на оставшееся место */}
      <div className="relative flex-1 bg-brand-blue p-6 transition-colors duration-300 group-hover:bg-white">
        <h3 className="font-benzin text-[18px] font-bold uppercase leading-[1.1] text-white transition-colors duration-300 group-hover:text-brand-blue md:text-[20px]">
          {promo.titleLines.map((line, index) => (
            <span key={index} className="block">
              {line}
            </span>
          ))}
        </h3>
        <p className="mt-3 max-w-[80%] font-gilroy text-[12px] leading-[1.4] text-white/80 transition-colors duration-300 group-hover:text-brand-blue/80">
          {promo.description}
        </p>

        {/* Кружок со стрелкой */}
        <div className="absolute bottom-4 right-4 flex h-[46px] w-[46px] items-center justify-center rounded-full bg-white transition-colors duration-300 group-hover:bg-brand-blue">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-transform duration-300 group-hover:scale-110"
          >
            <path
              d="M6 18L18 6M18 6H9M18 6V15"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-brand-blue transition-colors duration-300 group-hover:text-white"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}