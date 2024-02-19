import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/component/Header";
import Footer from "@/component/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Norfolk Board Gamers",
  description: "Meet People, See & Buy YOUR Boardgames",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        {/* <Header /> */}
        <main>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
