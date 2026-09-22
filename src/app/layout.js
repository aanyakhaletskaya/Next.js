import "./globals.css";
import Header from "./components/Header/Header";

export const metadata = {
  title: "Celestia",
  description: "Планетарий Celestia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}