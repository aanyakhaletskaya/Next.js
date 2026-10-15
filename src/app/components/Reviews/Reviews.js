import ReviewsTitle from "./ReviewsTitle";

export default function Reviews() {
  const cards = [
    "/images/reviews/card-1.jpg",
    "/images/reviews/card-2.jpg",
    "/images/reviews/card-3.jpg",
    "/images/reviews/card-4.jpg",
  ];

  return (
    <section className="w-full bg-brand-dark py-10 md:py-16">
      <div className="mx-auto flex max-w-[1000px] flex-col gap-6 px-3 md:gap-8 lg:max-w-[1180px]">
        <ReviewsTitle />

        
        <div className="flex flex-col gap-4 md:hidden">
          <div className="overflow-hidden rounded-[53px]">
            <img
              src={cards[0]}
              alt="Отзыв 1"
              className="h-auto w-full"
            />
          </div>

          
          <div className="flex items-center justify-center gap-3">
            <button
              type="button"
              aria-label="Назад"
              className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-white transition-opacity hover:opacity-80"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M15 18l-6-6 6-6" stroke="#131313" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <button
              type="button"
              aria-label="Вперёд"
              className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-brand-blue transition-opacity hover:opacity-90"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M9 18l6-6-6-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        
        <div className="hidden grid-cols-3 gap-4 md:grid lg:grid-cols-4 lg:gap-6">
          {cards.map((src, index) => (
            <div
              key={index}
              className={`overflow-hidden rounded-[53px] ${
                index === 3 ? "hidden lg:block" : ""
              }`}
            >
              <img
                src={src}
                alt={`Отзыв ${index + 1}`}
                className="h-auto w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}