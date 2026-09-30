export default function ArrowButton({ variant = "blue" }) {
  const bgColor = variant === "blue" ? "bg-brand-blue" : "bg-white";
  const arrowColor = variant === "blue" ? "#FFFFFF" : "#3805F2";

  return (
    <div
      className={`flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full ${bgColor} lg:h-[50px] lg:w-[50px]`}
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-[18px] w-[18px] lg:h-[22px] lg:w-[22px]"
      >
        <path
          d="M7 7L17 17M17 17H8M17 17V8"
          stroke={arrowColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}