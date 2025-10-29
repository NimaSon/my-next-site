<<<<<<< HEAD

=======
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./globals.css";

export const metadata = {
  title: "Многостраничный сайт",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <Header />
        <main style={{ padding: 20 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
>>>>>>> 848a91a (Обновлена папка с новыми файлами)
