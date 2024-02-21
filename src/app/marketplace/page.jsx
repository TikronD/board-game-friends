import { db } from "@/lib/db";
import Link from "next/link";
import NewListingFormBtn from "@/component/NewListingFormBtn";
import "@/app/marketplace/marketplace.css";
import { auth } from "@clerk/nextjs";

export default async function Marketplace({ handleSubmitListing }) {
    const listings = await db.query(`SELECT * from marketplace`);

    const { userId } = auth();
    const profileRes = await db.query(
        `SELECT * from profiles
      WHERE clerk_user_id = $1`,
        [userId]
    );
    const profile_id = profileRes.rows[0].id;

  return (
    <>
      <NewListingFormBtn profile_id={profile_id} />
      <div className="listingArea">
        {listings.rows.map((listing) => {
          return (
            <div className="listingCard" key={listing.game_title}>
              <Link href={`/marketplace/${listing.listing_id}`}>
                <h3>{listing.game_title}</h3>
              </Link>
              <p>£{listing.price}</p>
              <p>{listing.condition}</p>
            </div>
        </>
    );
}
