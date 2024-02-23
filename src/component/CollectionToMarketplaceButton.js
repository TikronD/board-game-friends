/* eslint-disable @next/next/no-img-element */
"use client";
import { useFormStatus } from "react-dom";
// import { ToastApp } from "./toast";
export default function CollectionToMarketplaceButton({ handleAddMarket }) {
    const { pending } = useFormStatus();
    console.log(pending);
    return (
        <>
            <button
                disabled={pending}
                type="submit"
                className={`${
                    pending ? "text-black" : "hover:invert"
                } bg-white`}
            >
                {pending ? (
                    <img
                        src={`https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif`}
                        className="w-[25px]"
                    />
                ) : (
                    <img
                        src={`https://cdn-icons-png.flaticon.com/512/263/263142.png`}
                        alt="Add to marketplace button"
                        className="w-[25px]"
                    />
                )}
            </button>
        </>
    );
}
