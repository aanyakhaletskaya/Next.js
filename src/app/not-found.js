import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] flex-col items-center justify-start bg-brand-dark px-3 pt-4 text-center text-white md:pt-25">
      <h1 className="font-benzin text-[100px] font-black leading-none text-brand-blue md:text-[160px]">
        404
      </h1>
      <h2 className="mt-4 font-benzin text-[24px] font-bold uppercase md:text-[32px]">
        Страница не найдена
      </h2>
      <p className="mt-4 font-gilroy text-[16px] text-white/60">
        Кажется, вы заблудились в космосе. Такой страницы не существует.
      </p>
      <Link 
        href="/" 
        className="mt-8 rounded-full bg-brand-blue px-8 py-3 font-gilroy text-[16px] font-bold text-white transition-opacity hover:opacity-90"
      >
        Вернуться на главную
      </Link>
    </main>
  );
}