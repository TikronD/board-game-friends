/* eslint-disable @next/next/no-img-element */
// "use server";
import apiCall from "@/lib/apiCall";
import CollectionAddForm from "@/component/CollectionAddForm";
import FormLoad from "@/component/FormLoad";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import xml2js from "xml2js";

export default async function AddCollection() {
  const api = await apiCall();
  // TODO black spot of shame
  return (
    <>
      <Link
        href="./"
        className="bg-orange-500 border-2 border-black text-white underline hover:bg-orange-600 hover:text-black transition-colors absolute top-5 right-5 p-2"
      >
        Back to collection
      </Link>
      <CollectionAddForm api={api} handleSubmit={handleSubmit} />
    </>
  );

  async function handleSubmit(formData, api) {
    "use server";

    const condition = formData.get("condition");
    const name = formData.get("name");
    const price = formData.get("price").replace("£", "");

    api.map(async (item) => {
      if (item.name[0].$.value == name) {
        const { userId } = auth();
        const user = await db.query(
          `SELECT * FROM profiles WHERE clerk_user_id='${userId}'`
        );
        const { rows } = await db.query(
          `SELECT * FROM collection WHERE user_id='${user.rows[0].id}' AND game_title='${name}'`
        );
        if (rows.length == 0) {
          await db.query(
            `INSERT INTO collection(user_id, game_title, price_paid, condition, extras, active, api_id) VALUES (${user.rows[0].id}, '${name}', ${price}, '${condition}', false, true, ${item.$.id})`
          );
        }
      }
    });
    revalidatePath("/collection");
  }
}
