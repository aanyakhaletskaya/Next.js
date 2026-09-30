import ArrowButton from "./ArrowButton";

export default function CouplesCard() {
  return (
    <div className="relative flex h-full min-h-[130px] flex-col justify-between rounded-[40px] bg-white p-5 text-brand-dark md:min-h-[170px] md:p-6 lg:min-h-[240px] lg:p-8">
      <div>
        <h3 className="font-benzin text-[24px] font-black leading-[0.95] scale-y-110 origin-left md:text-[26px] lg:text-[40px]">
          для
          <br />
          парочек
        </h3>
        <p className="mt-2 font-gilroy text-[12px] text-[#1E1E1E] md:mt-3 md:text-[13px] lg:mt-4 lg:text-[15px]">
          ночи наблюдения
          <br />
          за звездами
        </p>
      </div>

      <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 lg:bottom-6 lg:right-6">
        <ArrowButton variant="blue" />
      </div>
    </div>
  );
}