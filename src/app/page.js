import { db } from "../lib/db";
import { auth } from "@clerk/nextjs";
import Link from "next/link";

import Footer from "@/component/Footer";
import Carousel from "@/component/Carousel";
import Banner from "@/component/Banner";

export default async function Home() {
    const { userId } = auth();
    const user = await db.query(
        `SELECT * FROM profiles where clerk_user_id = $1`,
        [userId]
    );
    return (
        <>
            {userId && user.rowCount === 0 && (
                <div>
                    <Link href="/profile">
                        <p>Create Profile</p>
                    </Link>
                </div>
            )}
            {userId && user.rowCount !== 0 && (
                <div>
                    <Link href="/profile"></Link>
                </div>
            )}
            <p className="herotext">
                Experience buying and selling YOUR board games with our unique
                method: store your collection upon account creation, sell items
                to the marketplace anytime, and never miss out on a game again -
                simply add desired titles to your wishlist and get notified upon
                availability!
            </p>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <Carousel />
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <Banner />
            <Footer />
        </>
    );
}
