import { CartProvider } from "@/app/context/CartContext";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}