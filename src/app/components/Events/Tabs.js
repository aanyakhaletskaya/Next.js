const tabs = ["Программы", "Мероприятия", "Лекции"];

export default function Tabs() {
  return (
    <div className="flex items-center justify-center gap-3">
      {tabs.map((tab, index) => (
        <button
          key={tab}
          type="button"
          className={`rounded-full px-6 py-2 text-[14px] font-gilroy transition-colors ${
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