/* eslint-disable @next/next/no-img-element */
import { db } from "@/lib/db";
import Link from "next/link";
import NewListingFormBtn from "@/component/NewListingFormBtn.jsx";
import "@/app/marketplace/marketplace.css";
import { auth } from "@clerk/nextjs";
import { apiBoardGame } from "@/lib/apiCall";
import NewMarketplaceListingForm from "@/component/NewMarketplaceListingForm";

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
    <div className="grid" style={{ gridTemplateColumns: "1fr 2fr" }}>
      <NewMarketplaceListingForm profile_id={profile_id} />
      <div className="flex flex-col items-center justify-center gap-4">
        {listings.rows.map(async (listing) => {
          let src = await apiBoardGame(listing.api_id);
          return (
            <div
              className="flex gap-4 w-[80%] border-2 border-[#363E55] rounded-2xl"
              key={listing.id}
            >
              <div
                className="grid w-full"
                style={{ gridTemplateColumns: "80px 1fr" }}
              >
                <img
                  className="h-20 rounded-tl-xl rounded-bl-xl "
                  alt="Boardgame Image"
                  src={src.image[0]}
                />
                <div
                  className="grid w-full"
                  style={{
                    gridTemplateColumns: "1fr 1fr 1fr",
                  }}
                >
                  <p>£{listing.price}</p>
                  <Link
                    href={`/marketplace/listing/${listing.id}`}
                    className=""
                  >
                    <h3>{listing.game_title}</h3>
                  </Link>
                  <p>{listing.condition}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
