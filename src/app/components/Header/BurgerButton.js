export default function BurgerButton({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Открыть меню"
      className="flex h-[35px] w-[35px] shrink-0 items-center justify-center rounded-full bg-brand-blue transition-opacity hover:opacity-90"
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 7h18M3 12h18M3 17h18"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </button>
  );
}