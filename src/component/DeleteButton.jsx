/* eslint-disable @next/next/no-img-element */
"use client";
export default function DeleteButton({ game, handleDelete }) {
    return (
        <img
            alt="Delete Icon"
            src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png"
            className="absolute w-[20px] justify-self-end place-self-end mb-2 mr-2 hover:invert"
            onClick={() => handleDelete(game)}
        />
    );
}
