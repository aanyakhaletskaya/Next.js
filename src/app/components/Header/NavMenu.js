const links = [
  { label: "Главная", href: "/" },
  { label: "События", href: "/events" },
  { label: "Акции", href: "/promo" },
  { label: "Отзывы", href: "/reviews" },
  { label: "FAQ", href: "/faq" },
  { label: "Контакты", href: "/contacts" },
];

export default function NavMenu() {
  return (
    <nav>
      <ul className="flex items-center gap-7">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-[13px] text-white/80 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}