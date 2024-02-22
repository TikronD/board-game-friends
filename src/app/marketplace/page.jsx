import { db } from "@/lib/db";
import Link from "next/link";
import NewListingFormBtn from "@/component/NewListingFormBtn.jsx";
import "@/app/marketplace/marketplace.css";
import { auth } from "@clerk/nextjs";
import { apiBoardGame } from "@/lib/apiCall";

export default async function Marketplace({ handleSubmitListing }) {
  // const fetchData = async () => {
  const listings = await db.query(`SELECT * from marketplace`);
  const { userId } = auth();
  const profileRes = await db.query(
    `SELECT * from profiles
        WHERE clerk_user_id = $1`,
    [userId]
  );
  const profile_id = profileRes.rows[0].id;

  // return { listings, profile_id };
  // };

  // const { listings, profile_id } = fetchData();

  return (
    <>
      <NewListingFormBtn profile_id={profile_id} />
      <div className="listingArea">
        {listings.rows.map(async (listing) => {
          console.log(listing.api_id);
          let src = await apiBoardGame(listing.api_id);
          return (
            <div className="listingCard" key={listing.id}>
              <Link href={`/marketplace/listing/${listing.id}`}>
                <h3>{listing.game_title}</h3>
              </Link>
              <p>£{listing.price}</p>
              <p>{listing.condition}</p>
              <img src={src[0].image[0]} />
            </div>
          );
        })}
      </div>
    </>
  );
}
