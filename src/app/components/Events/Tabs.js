const tabs = ["Программы", "Мероприятия", "Лекции"];

export default function Tabs() {
  return (
    <div className="flex items-center justify-center gap-1.5 px-2 md:gap-3">
      {tabs.map((tab, index) => (
        <button
          key={tab}
          type="button"
          className={`whitespace-nowrap rounded-full px-3 py-1.5 text-[11px] font-gilroy transition-colors md:px-6 md:py-2 md:text-[14px] ${
            index === 0
              ? "bg-brand-blue text-white"
              : "border border-white/30 text-white/70 hover:text-white"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}