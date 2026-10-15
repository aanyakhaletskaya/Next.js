import FooterTitle from "./FooterTitle";
import FooterMap from "./FooterMap";
import FooterContacts from "./FooterContacts";
import FooterSubscribe from "./FooterSubscribe";

export default function Footer() {
  return (
    <footer className="w-full bg-brand-dark py-10 md:py-16">
      <div className="mx-auto flex max-w-[1000px] flex-col gap-8 px-3 md:gap-10 lg:max-w-[1180px]">
        <FooterTitle />
        <FooterMap />
        <FooterContacts />
        <FooterSubscribe />
      </div>
    </footer>
  );
}