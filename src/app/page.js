import Promo from "./components/Promo/Promo";
import Events from "./components/Events/Events";
import Promotions from "./components/Promotions/Promotions";
import Reviews from "./components/Reviews/Reviews";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-dark text-white">
      <Promo />
      <Events />
      <Promotions />
      <Reviews />
    </main>
  );
}