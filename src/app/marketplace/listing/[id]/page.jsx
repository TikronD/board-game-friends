import { getListings } from "@/lib/actions";
import { auth } from "@clerk/nextjs";

export default async function individualListing({ params }) {
  "use server";
  // const { userId } = auth();
  //  db query to GET all profile info from profiles table.
  // const profileRes = await db.query(`SELECT * FROM profiles
  //   WHERE clerk_user_id = ${userId}`);
  // const profile_username = profileRes.rows[0].username;
  // const profile_id = profileRes.rows[0].profile_id;

  const listings = await getListings(params.id);

  console.log(listings);

  return (
    <div className="listingContainer">
      <h3>{listings.rows[0].game_title}</h3>
      <p>{listings.rows[0].price}</p>
      <p>Seller: </p>
      <p>{listings.rows[0].description}</p>
      <p>{listings.rows[0].condition}</p>
    </div>
  );
}
