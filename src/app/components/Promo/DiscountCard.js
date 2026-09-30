import ArrowButton from "./ArrowButton";

export default function DiscountCard() {
  return (
    <div className="relative flex h-full min-h-[110px] flex-col justify-between rounded-[40px] bg-brand-blue p-5 text-white md:min-h-[130px] md:p-6 lg:min-h-[160px] lg:p-8">
      <div>
        <h3 className="font-benzin text-[32px] font-bold leading-none md:text-[36px] lg:text-[56px]">
          20%
        </h3>
        <p className="mt-2 font-gilroy text-[12px] md:mt-3 md:text-[13px] lg:mt-4 lg:text-[15px]">
          скидка пенсионерам
        </p>
      </div>

      <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 lg:bottom-6 lg:right-6">
        <ArrowButton variant="white" />
      </div>
    </div>
  );
}