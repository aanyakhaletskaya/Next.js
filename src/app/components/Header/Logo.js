import Image from "next/image";

export default function Logo() {
  return (
    <a href="/" className="flex items-center">
      <Image
        src="/icons/logo.svg"
        alt="Celestia"
        width={140}
        height={32}
        priority
      />
    </a>
  );
}