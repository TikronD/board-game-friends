import { db } from "@/lib/db";
import Link from "next/link";
import NewListingFormBtn from "@/component/NewListingFormBtn";
import "@/app/marketplace/marketplace.css";
import { auth } from "@clerk/nextjs";

export default function Marketplace({ handleSubmitListing }) {
  const fetchData = async () => {
    const listings = await db.query(`SELECT * from marketplace`);
    const { userId } = auth();
    const profileRes = await db.query(
      `SELECT * from profiles
        WHERE clerk_user_id = $1`,
      [userId]
    );
    const profile_id = profileRes.rows[0].id;

    return { listings, profile_id };
  };

  const { listings, profile_id } = fetchData();

  return (
    <>
      <NewListingFormBtn profile_id={profile_id} />
      <div className="listingArea">
        {listings.rows.map((listing) => (
          <div className="listingCard" key={listing.listing_id}>
            <Link href={`/marketplace/${listing.listing_id}`}>
              <h3>{listing.game_title}</h3>
            </Link>
            <p>£{listing.price}</p>
            <p>{listing.condition}</p>
          </div>
        ))}
      </div>
    </>
  );
}
