// "use client";
// "use server";
// import { db } from "@/lib/db"
import { revalidatePath } from "next/cache";
import Link from "next/link";
import GameImage from "./GameImage";
import DeleteButton from "./DeleteButton";
import { db } from "@/lib/db";
import CollectionToMarketplaceButton from "./CollectionToMarketplaceButton";

/* eslint-disable @next/next/no-img-element */
export default async function GetGameCollection({ game, handleDelete }) {
    return (
        <>
            <div
                className="w-[75vw] max-w-[600px] bg-[#f0f8ff] rounded grid hover:scale-110 hover:text-blue-300 transition-all"
                style={{ gridTemplateColumns: `repeat(3, 1fr)` }}
            >
                <GameImage game={game} />
                <Link
                    href={`/collection/game/${game.game_title}/${game.api_id}`}
                    className="justify-self-center text-sm font-bold font-serif mt-2 hover:text-blue-300"
                >
                    {game.game_title}
                </Link>
                <h2 className=" justify-self-end text-sm font-bold font-serif">
                    ({game.condition})
                </h2>
                <DeleteButton game={game} handleDelete={handleDelete} />
            </div>
            <CollectionToMarketplaceButton handleAddMarket={handleAddMarket} />
        </>
    );

    async function handleAddMarket(event) {
        "use server";
        // await db.query("INSERT INTO marketplace(user_id, game_title, price, description, condition, extras, active, api_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)", [3, ])
    }
}
