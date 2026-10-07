import EventsTitle from "./EventsTitle";
import Tabs from "./Tabs";
import EventCard from "./EventCard";
import ShowMoreButton from "./ShowMoreButton";
import { events } from "@/app/data/events";

export default function Events() {
  return (
    <section className="w-full bg-brand-dark py-16">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-8 px-3">
        {/* Заголовок со звёздочками */}
        <EventsTitle />

        {/* Табы */}
        <Tabs />

        {/* Список карточек */}
        <div className="flex flex-col gap-6">
          {events.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {/* Кнопка «Показать ещё» */}
        <ShowMoreButton />
      </div>
    </section>
  );
}