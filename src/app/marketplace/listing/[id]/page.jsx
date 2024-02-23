import { getListings } from "@/lib/actions";
import "@/app/marketplace/marketplace.css";
import { apiBoardGame } from "@/lib/apiCall";

// import { auth } from "@clerk/nextjs";
import { db } from "@/lib/db";

export default async function individualListing({ params }) {
  "use server";
  // const { userId } = auth();
  //  db query to GET all profile info from profiles table.
  // const profileRes = await db.query(`SELECT * FROM profiles
  //   WHERE clerk_user_id = ${userId}`);
  // const profile_username = profileRes.rows[0].username;
  // const profile_id = profileRes.rows[0].profile_id;

  const apiId = await db.query(
    `SELECT api_id from marketplace WHERE marketplace.id = $1`,
    [params.id]
  );

  const listings = await getListings(params.id);

  let src = await apiBoardGame(apiId.rows[0].api_id);

  return (
    <div className="listingContainer">
      <h2>{listings.rows[0].game_title}</h2>
      <p>£{listings.rows[0].price}</p>
      <p>Seller: </p>
      <p>Description: {listings.rows[0].description}</p>
      <p>Condition: {listings.rows[0].condition}</p>
      <img className="listingImg" src={src.image[0]} />
    </div>
  );
}
