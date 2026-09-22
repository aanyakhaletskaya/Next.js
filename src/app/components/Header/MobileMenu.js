import Image from "next/image";

const links = [
  { label: "Главная", href: "/" },
  { label: "События", href: "/events" },
  { label: "Акции", href: "/promo" },
  { label: "Отзывы", href: "/reviews" },
  { label: "FAQ", href: "/faq" },
  { label: "Контакты", href: "/contacts" },
];

export default function MobileMenu({ isOpen, onClose }) {
  return (
    <>
      {/* Затемнение фона */}
      <div
        onClick={onClose}
        className={`
          fixed inset-0 z-40 bg-black/60 transition-opacity duration-300
          ${isOpen ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      />

      {/* Панель меню — выезжает справа */}
      <aside
        className={`
          fixed top-0 right-0 z-50 h-full w-[320px] max-w-[85%] bg-brand-dark
          transition-transform duration-300
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Кнопка закрытия */}
        <div className="flex justify-end p-4">
          <button
            type="button"
            onClick={onClose}
            aria-label="Закрыть меню"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-blue text-white"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M6 6l12 12M6 18L18 6"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>

        {/* Навигация */}
        <nav className="px-6 py-4">
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={onClose}
                  className="block text-[18px] text-white transition-colors hover:text-brand-blue"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Контакты */}
        <div className="mt-6 flex flex-col gap-4 border-t border-white/10 px-6 pt-6">
          <div className="flex items-center gap-4">
            <a href="https://wa.me/78123363636" aria-label="WhatsApp">
              <Image src="/icons/whatsapp.svg" alt="WhatsApp" width={22} height={22} />
            </a>
            <a href="https://t.me/celestia" aria-label="Telegram">
              <Image src="/icons/telegram.svg" alt="Telegram" width={22} height={22} />
            </a>
          </div>

          <a
            href="tel:+78123363636"
            className="text-[16px] font-medium text-white"
          >
            (812) 336 36 36
          </a>

          <button
            type="button"
            className="rounded-full bg-white px-5 py-3 text-[14px] font-medium text-brand-dark"
          >
            Купить билет
          </button>
        </div>
      </aside>
    </>
  );
}