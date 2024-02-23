import { Montserrat } from "next/font/google";
import "./globals.css";
import { ClerkProvider, UserButton, auth } from "@clerk/nextjs";
import Link from "next/link";
import Header from "@/component/Header";
import Burger from "@/component/BurgerMenu";
import Footer from "@/component/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Norfolk Board Gamers",
  description: "Sell & Buy YOUR Boardgames",
};

export default function RootLayout({ children }) {
  const { userId } = auth();
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="">
          <Header />
          <div className="user">
            {userId && <UserButton afterSignOutUrl="/" />}
            {!userId && <Link href="/sign-in">Sign in</Link>}
          </div>
          {children}
          <Burger />
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
