import GetGameCollection from "@/component/GetGameCollection";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import Link from "next/link";

export default async function CollectionPage() {
    const collection = await db.query(
        "SELECT collection.api_id, collection.id AS game_id, collection.game_title, collection.condition, collection.price_paid, profiles.id FROM collection JOIN profiles ON collection.user_id = profiles.id ORDER BY collection.game_title"
    );
    return (
        <div className="flex flex-col gap-4 mt-4 justify-center items-center">
            <Link
                href="./collection/add"
                className="bg-orange-500 border-2 border-black text-white underline hover:bg-orange-600 hover:text-black transition-colors absolute top-10 right-5 p-2"
            >
                Add to collection
            </Link>
            {collection.rows.length != 0 &&
                collection.rows.map((game) => {
                    return (
                        <GetGameCollection
                            key={game.game_title}
                            game={game}
                            handleDelete={handleDelete}
                        />
                    );
                })}
        </div>
    );

    async function handleDelete(game) {
        "use server";
        await db.query(`DELETE FROM collection WHERE id= ${game.game_id}`);
        revalidatePath("./");
    }
}
