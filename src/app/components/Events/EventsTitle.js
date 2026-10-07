import Image from "next/image";

export default function EventsTitle() {
  return (
    <div className="flex items-center justify-center gap-6">
      <Image
        src="/images/events/star.svg"
        alt=""
        width={50}
        height={50}
        className="h-auto w-[50px]"
      />
      <h2 className="font-benzin text-[48px] font-black uppercase leading-none text-white">
        События
      </h2>
      <Image
        src="/images/events/star.svg"
        alt=""
        width={50}
        height={50}
        className="h-auto w-[50px]"
      />
    </div>
  );
}