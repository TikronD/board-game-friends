// "use client";
"use server";
// import { db } from "@/lib/db"
import { revalidatePath } from "next/cache";
import Link from "next/link";
import GameImage from "./GameImage";
import DeleteButton from "./DeleteButton";

/* eslint-disable @next/next/no-img-element */
export default async function GetGameCollection({ game, handleDelete }) {
    return (
        <div
            className="w-[75vw] max-w-[600px] bg-purple-500 rounded grid hover:scale-110 hover:text-blue-300 transition-all"
            style={{ gridTemplateColumns: `repeat(3, 1fr)` }}
        >
            <GameImage game={game} />
            <Link
                href={`/collection/game/${game.game_title}/${game.api_id}`}
                className="justify-self-center text-sm font-bold font-mono mt-2 hover:text-blue-300"
            >
                {game.game_title}
            </Link>
            <h2 className=" justify-self-end mr-4 text-white">
                ({game.condition})
            </h2>
            <DeleteButton game={game} handleDelete={handleDelete} />
            {/* <div></div>
            <button className="bg-orange-500 text-white border-2 border-black hover:bg-orange-600 hover:text-black transition-colors underline absolute">
                Add to marketplace
            </button> */}
        </div>
    );
}
