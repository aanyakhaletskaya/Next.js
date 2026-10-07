import EventsTitle from "./EventsTitle";
import Tabs from "./Tabs";
import EventCard from "./EventCard";
import ShowMoreButton from "./ShowMoreButton";
import { events } from "@/app/data/events";

export default function Events() {
  return (
    <section className="w-full bg-brand-dark py-10 md:py-16">
      <div className="mx-auto flex max-w-[1000px] flex-col gap-6 px-3 lg:max-w-[1180px]">
        <EventsTitle />
        <Tabs />

        <div className="flex flex-col gap-10">
          {events.map((event, index) => (
            <div
              key={event.id}
              className={index === 0 ? "" : "hidden md:block"}
            >
              <EventCard event={event} />
            </div>
          ))}
        </div>

        <ShowMoreButton />
      </div>
    </section>
  );
}