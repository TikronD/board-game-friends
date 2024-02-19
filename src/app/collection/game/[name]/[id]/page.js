import { db } from "@/lib/db";

export default async function userGame({ params }) {
    const { rows } = await db.query(
        `SELECT collection.game_title, collection.condition, collection.price_paid, profiles.id FROM collection JOIN profiles ON collection.user_id = profiles.id WHERE collection.id = ${params.id}`
    );
    const game = rows[0];
    return (
        <div className="flex flex-col gap-4 justify-center items-center mt-4">
            {/* <h2>{params.name}</h2> */}
            <h2 className="text-4xl font-bold">{game.game_title}</h2>
        </div>
    );
}
