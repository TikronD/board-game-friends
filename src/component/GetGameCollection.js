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
            <div className="flex">
                <Link
                    href={`/collection/game/${game.game_title}/${game.api_id}`}
                    className="justify-self-center text-sm mt-2 "
                >
                    <div
                        className="w-[75vw] max-w-[600px] bg-[#f0f8ff] rounded-md grid pr-2  items-center "
                        style={{ gridTemplateColumns: `repeat(3, 1fr)` }}
                    >
                        <GameImage game={game} />
                        {game.game_title}
                        <h2 className=" justify-self-end text-sm">
                            ({game.condition})
                        </h2>
                    </div>
                </Link>
                <div className="self-center flex flex-row gap-2">
                    <DeleteButton game={game} handleDelete={handleDelete} />
                    <form action={handleAddMarket}>
                        <CollectionToMarketplaceButton
                            handleAddMarket={handleAddMarket}
                        />
                    </form>
                </div>
            </div>
        </>
    );

    async function handleAddMarket(event) {
        "use server";
        console.log("object");
        await db.query(
            "INSERT INTO marketplace(user_id, game_title, price, description, condition, extras, active, api_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)",
            [
                3,
                game.game_title,
                game.price_paid,
                "Uploaded from collection",
                game.condition,
                game.extras,
                game.active,
                game.api_id,
            ]
        );
    }
}
