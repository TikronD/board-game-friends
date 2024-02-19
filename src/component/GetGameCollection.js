"use client";
// import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function GetGameCollection({ game, handleDelete }) {
    return (
        <div
            className="w-[75vw] max-w-[600px] bg-purple-500 rounded grid hover:scale-110 hover:text-blue-300 transition-all"
            style={{ gridTemplateColumns: `repeat(3, 1fr)` }}
        >
            <img
                alt="game"
                src="https://winpuzzles.com/wp-content/uploads/2022/10/uno-1.jpeg"
                className=" rounded-tl rounded-bl"
                style={{
                    maskImage:
                        "linear-gradient(90deg, rgb(0,0,0), transparent 95%)",
                }}
            />
            <Link
                href={`/collection/game/${game.game_title}/${game.game_id}`}
                className="justify-self-center text-2xl font-bold mt-2 hover:text-blue-300"
            >
                {game.game_title}
            </Link>
            <h2 className=" justify-self-end mr-4 text-white">
                ({game.condition})
            </h2>
            <img
                alt="Delete Icon"
                src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png"
                className="absolute w-[20px] justify-self-end place-self-end mb-2 mr-2 hover:invert"
                onClick={() => handleDelete(game)}
            />
        </div>
    );
}
