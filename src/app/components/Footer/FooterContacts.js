import Image from "next/image";
import { socialLinks, footerContacts } from "@/app/data/footer";

export default function FooterContacts() {
  return (
    <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between md:gap-4">
      
      
      <div className="flex items-center gap-2">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"
            fill="#3805F2"
          />
        </svg>
        <span className="font-gilroy text-[13px] text-white md:text-[14px]">
          {footerContacts.address}
        </span>
      </div>

      
      <div className="flex items-center gap-3">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            className="flex h-[40px] w-[40px] items-center justify-center transition-opacity hover:opacity-70"
          >
            <Image
              src={social.icon}
              alt={social.name}
              width={40}
              height={40}
            />
          </a>
        ))}
      </div>

      
      <div className="flex items-center gap-4">
        <a
          href={footerContacts.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="transition-opacity hover:opacity-70"
        >
          <Image src="/icons/whatsapp.svg" alt="WhatsApp" width={22} height={22} />
        </a>
        <a
          href={footerContacts.telegram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Telegram"
          className="transition-opacity hover:opacity-70"
        >
          <Image src="/icons/telegram.svg" alt="Telegram" width={22} height={22} />
        </a>
        <a
          href={footerContacts.phoneHref}
          className="font-gilroy text-[13px] text-white transition-colors hover:text-brand-blue md:text-[14px]"
        >
          {footerContacts.phone}
        </a>
      </div>
    </div>
  );
}