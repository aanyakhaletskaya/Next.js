export default function ReviewsTitle() {
  return (
    <div className="relative flex items-center justify-center">
      <h2 className="text-center font-benzin text-[24px] font-black uppercase leading-none text-white md:text-[36px] lg:text-[48px]">
        Отзывы и отметки
      </h2>

      <div className="absolute right-0 hidden items-center gap-2 md:flex">
        <button
          type="button"
          aria-label="Назад"
          className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-white transition-opacity hover:opacity-80"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M15 18l-6-6 6-6" stroke="#131313" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <button
          type="button"
          aria-label="Вперёд"
          className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-white transition-opacity hover:opacity-80"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M9 18l6-6-6-6" stroke="#131313" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}