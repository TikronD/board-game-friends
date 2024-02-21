import CssGrid from "@/component/CssGrid";
import { db } from "../lib/db";
import { auth } from "@clerk/nextjs";
import Link from "next/link";
import Header from "@/component/Header";
import Footer from "@/component/Footer";
import Carousel from "@/component/Carousel";

export default async function Home() {
  const { userId } = auth();
  const user = await db.query(
    `SELECT * FROM profiles where clerk_user_id = $1`,
    [userId]
  );

  return (
    <>
      <Header />
      {userId && user.rowCount === 0 && (
        <div>
          <Link href="/profile">
            <p>Create Profile</p>
          </Link>
        </div>
      )}
      {/* {userId && user.rowCount !== 0 && (
        <div>
          <Link href="/profile">My Profile</Link>
        </div>
      )} */}
      <p className="herotext">
        Experience buying and selling YOUR board games with our unique method:
        store your collection upon account creation, sell items to the
        marketplace anytime, and never miss out on a game again - simply add
        desired titles to your wishlist and get notified upon availability!"
      </p>
      <Carousel />
      <Footer />
    </>
  );
}
