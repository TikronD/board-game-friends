"use server";

import { revalidatePath } from "next/cache";
import { db } from "./db";

export async function handleSubmitListing(profile_id, formData) {
  const gameTitle = formData.get("game_title");
  const price = formData.get("price");
  const description = formData.get("description");
  const condition = formData.get("condition");
  const extras = formData.get("extras");

  await db.query(
    `INSERT INTO marketplace (user_id, game_title, price, description, condition, extras)
    VALUES ($1, $2, $3, $4, $5, $6)`,
    [profile_id, gameTitle, price, description, condition, extras]
  );

  revalidatePath("/marketplace");
}
