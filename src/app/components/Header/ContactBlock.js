import Image from "next/image";

export default function ContactBlock() {
  return (
    <div className="flex items-center gap-6">
      {/* Соцсети — видны ВСЕГДА (мобилка, планшет, десктоп) */}
      <div className="flex items-center gap-3">
        <a
          href="https://wa.me/78123363636"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="transition-opacity hover:opacity-70"
        >
          <Image src="/icons/whatsapp.svg" alt="WhatsApp" width={20} height={20} />
        </a>
        <a
          href="https://t.me/celestia"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Telegram"
          className="transition-opacity hover:opacity-70"
        >
          <Image src="/icons/telegram.svg" alt="Telegram" width={20} height={20} />
        </a>
      </div>

      {/* Телефон и кнопка — скрыты на мобилке, видны от 768px (md:) */}
      <div className="hidden items-center gap-6 md:flex">
        {/* Телефон */}
        <a
          href="tel:+78123363636"
          className="text-[15px] font-medium text-white transition-colors hover:text-brand-blue"
        >
          (812) 336 36 36
        </a>

        {/* Кнопка */}
        <button
          type="button"
          className="
            rounded-full px-5 py-2 text-[14px] transition-opacity hover:opacity-90
            bg-white text-brand-dark font-medium
            lg:bg-brand-blue lg:text-brand-dark lg:font-bold
          "
        >
          Купить билет
        </button>
      </div>
    </div>
  );
}