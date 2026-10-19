import Promo from "./components/Promo/Promo";
import Events from "./components/Events/Events";
import Promotions from "./components/Promotions/Promotions";
import Reviews from "./components/Reviews/Reviews";
import FAQ from "./components/FAQ/FAQ";
import Booking from "./components/Booking/Booking";

export default function Home() {
  return (
    
    <main>
      <Promo />
      <Events />
      <Promotions />
      <Reviews />
      <FAQ />
      <Booking />
    </main>
  );
}