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
            {userId && user.rowCount !== 0 && (
                <div>
                    <Link href="/profile">My profile</Link>
                    {/* <CssGrid /> */}
                </div>
            )}
            <Carousel />
            <Footer />
        </>
    );
}
