/* eslint-disable @next/next/no-img-element */
import { apiBoardGame, apiSearch } from "@/lib/apiCall";
export default async function GameImage({ game }) {
    const api = await apiBoardGame(game.api_id);
    console.log(api);
    return (
        <img
            alt="game"
            src={`${api.thumbnail}`}
            className=" rounded-tl rounded-bl h-[50px]"
            style={{
                maskImage:
                    "linear-gradient(90deg, rgb(0,0,0) 80%, transparent)",
            }}
        />
    );
}
