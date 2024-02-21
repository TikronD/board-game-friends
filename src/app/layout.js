import { Montserrat } from "next/font/google";
import "./globals.css";
import { ClerkProvider, UserButton, auth } from "@clerk/nextjs";
import Link from "next/link";
import Burger from "@/component/BurgerMenu";

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
        <body className={montserrat.className}>
          <div className="user">
            {userId && <UserButton afterSignOutUrl="/" />}
            {!userId && <Link href="/sign-in">Sign in</Link>}
          </div>
          <Burger />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
