"use server";
import { apiSearchStrict, apiBoardGame } from "./apiCall";
import { revalidatePath } from "next/cache";
import { db } from "./db";
// function to submit listing into marketplace //
// export async function handleSubmitListing(profile_id, formData) {
//   const gameTitle = formData.get("game_title");
//   const price = formData.get("price");
//   const description = formData.get("description");
//   const condition = formData.get("condition");
//   const extras = formData.get("extras");
//   console.log([profile_id, gameTitle, price, description, condition, extras]);
//   await db.query(
//     `INSERT INTO marketplace (user_id, game_title, price, description, condition, extras)
//     VALUES ($1, $2, $3, $4, $5, $6)`,
//     [profile_id, gameTitle, price, description, condition, extras]
//   );

//   revalidatePath("/marketplace");
// }
export async function handleSubmitListing(profile_id, formData) {
  const gameTitle = formData.get("game_title");
  const price = formData.get("price");
  const description = formData.get("description");
  const condition = formData.get("condition");
  const extras = formData.get("extras");
  // const apiTitle = gameTitle.replace(" ", "+");

  const api = await apiSearchStrict(gameTitle);

  const id = api[0].$.id;
  await db.query(
    `INSERT INTO marketplace (user_id, game_title, price, description, condition, extras, api_id)
    VALUES ($1, $2, $3, $4, $5, $6, $7)`,
    [profile_id, gameTitle, price, description, condition, extras, id]
  );
  revalidatePath("/marketplace");
}
// function to GET all listings from marketplace //

export async function getListings(id) {
  const listings = await db.query(
    `SELECT marketplace.id AS listing_id, user_id, game_title, price, description, condition, extras FROM marketplace WHERE marketplace.id = $1`,
    [id]
  );

  return listings;
}
