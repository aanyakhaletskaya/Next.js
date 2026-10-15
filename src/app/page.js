import Promo from "./components/Promo/Promo";
import Events from "./components/Events/Events";
import Promotions from "./components/Promotions/Promotions";
import Reviews from "./components/Reviews/Reviews";
import FAQ from "./components/FAQ/FAQ";
import Booking from "./components/Booking/Booking";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-dark text-white">
      <Promo />
      <Events />
      <Promotions />
      <Reviews />
      <FAQ />
      <Booking />
      <Footer />
    </main>
  );
}