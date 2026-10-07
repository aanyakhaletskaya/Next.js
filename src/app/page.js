import Promo from "./components/Promo/Promo";
import Events from "./components/Events/Events";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-dark text-white">
      <Promo />
      <Events />
    </main>
  );
}