export default function FAQItem({ item, isOpen, isActive, onToggle }) {
  return (
    <div className="flex flex-col gap-4">
      
      
      <button
  type="button"
  onClick={onToggle}
  className={`flex items-center justify-between gap-6 rounded-full bg-white px-8 py-3 text-left transition-opacity ${
    isActive ? "cursor-pointer hover:opacity-95" : "cursor-default"
  }`}
>
        <span
          className={`font-gilroy text-[14px] font-bold md:text-[16px] ${
            isOpen ? "text-brand-dark" : "text-brand-blue"
          }`}
        >
          {item.question}
        </span>

        
        <span
          className={`flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full transition-colors ${
            isOpen ? "bg-brand-dark" : "bg-brand-blue"
          }`}
        >
          {isOpen ? (
            
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M12 5v14M5 12h14" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </span>
      </button>

      
      {isOpen && (
        <p className="px-8 font-gilroy text-[13px] leading-[1.5] text-white/80 md:text-[14px]">
          {item.answer}
        </p>
      )}
    </div>
  );
}