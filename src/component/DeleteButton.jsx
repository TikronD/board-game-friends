/* eslint-disable @next/next/no-img-element */
"use client";
export default function DeleteButton({ game, handleDelete }) {
  return (
    <img
      alt="Delete Icon"
      src="https://cdn-icons-png.flaticon.com/512/1345/1345874.png"
      className="w-[20px] cursor-pointer "
      onClick={() => handleDelete(game)}
    />
  );
}
