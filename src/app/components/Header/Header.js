"use client";

import { useState } from "react";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import ContactBlock from "./ContactBlock";
import BurgerButton from "./BurgerButton";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="w-full bg-brand-dark">
        <div className="mx-auto flex h-[88px] items-center justify-between gap-4 px-6 md:max-w-[900px] md:px-8 lg:max-w-[1200px] lg:px-10">
          <Logo />

          <div className="hidden lg:block">
            <NavMenu />
          </div>

          <div className="flex items-center gap-4">
            <ContactBlock />
            <div className="lg:hidden">
              <BurgerButton onClick={() => setMenuOpen(true)} />
            </div>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}