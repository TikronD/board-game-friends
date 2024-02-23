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

  // .listingCard {
  //   background-color: #ff914d;
  //   width: 250px;
  //   height: max-content;
  //   margin: 10px;
  //   display: flex;
  //   padding: 5px;
  //   border-radius: 5px;
  //   justify-content: space-between;
  // }

  return (
    <>
      <NewListingFormBtn profile_id={profile_id} />
      <div className="flex place-content-center">
        <div className="flex flex-col w-[70%] m-2 p-2 border-2 border-[#363e55] border-solid rounded-md ">
          {listings.rows.map(async (listing) => {
            let src = await apiBoardGame(listing.api_id);
            return (
              <Link href={`/marketplace/listing/${listing.id}`}>
                <div
                  className="flex m-1 justify-between"
                  style={{ height: "max-content" }}
                  key={listing.id}
                >
                  <div className="flex w-full justify-between pr-2 items-center rounded-md bg-[#F0F8FF]">
                    <img
                      className="w-[70px] h-[70px] rounded-md"
                      src={src.image[0]}
                    />
                    <h3 className="w-1/6">
                      {listing.game_title} <span className="mr-2 "></span>£
                      {listing.price}
                    </h3>

                    <p className="w-1/6">{listing.condition}</p>
                  </div>
                  <div className="flex"></div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
