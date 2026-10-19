import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer"; 

export const metadata = {
  title: "Celestia",
  description: "Планетарий Celestia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      
      <body className="flex min-h-screen flex-col bg-brand-dark text-white">
        <Header />
        
        
        <main className="flex-1">
          {children}
        </main>
        
        
        <Footer />
      </body>
    </html>
  );
}