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
          let src = await apiBoardGame(listing.api_id);
          return (
            <Link href={`/marketplace/listing/${listing.id}`}>
              <div className="listingCard" key={listing.id}>
                <div className="listingInfo">
                  <h3>{listing.game_title}</h3>
                  <p>£{listing.price}</p>
                  <p>{listing.condition}</p>
                </div>
                <div className="imgContainer">
                  <img className="listingImg" src={src.image[0]} />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}
