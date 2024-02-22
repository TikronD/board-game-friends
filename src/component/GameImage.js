/* eslint-disable @next/next/no-img-element */
import { apiSearch } from "@/lib/apiCall";
import xml2js from "xml2js";
export default async function GameImage({ game }) {
    const api = await apiSearch(game.api_id);
    return (
        <img
            alt="game"
            src={`${api[0].thumbnail}`}
            className=" rounded-tl rounded-bl h-[50px]"
            style={{
                maskImage:
                    "linear-gradient(90deg, rgb(0,0,0) 80%, transparent)",
            }}
        />
    );
}
