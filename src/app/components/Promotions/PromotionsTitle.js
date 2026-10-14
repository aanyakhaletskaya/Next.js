import Image from "next/image";

export default function PromotionsTitle() {
  return (
    <div className="flex items-center justify-center gap-2 md:gap-4 lg:gap-6">
      <Image
        src="/images/events/star.svg"
        alt=""
        width={40}
        height={40}
        className="h-auto w-[24px] md:w-[40px] lg:w-[50px]"
      />
      <h2 className="text-center font-benzin text-[24px] font-black uppercase leading-none text-white md:text-[40px] lg:text-[48px]">
        Акции и скидки
      </h2>
      <Image
        src="/images/events/star.svg"
        alt=""
        width={40}
        height={40}
        className="hidden h-auto w-[24px] md:block md:w-[40px] lg:w-[50px]"
      />
    </div>
  );
}