/* eslint-disable @next/next/no-img-element */
import { apiBoardGame } from "@/lib/apiCall";
import Link from "next/link";

export default async function CarouselMap({ game, index }) {
    const boardGameData = await apiBoardGame(game.api_id);
    return (
        <Link href={`/marketplace/listing/${game.id}`}>
            <div className="slide" key={index}>
                <img
                    className="image"
                    src={boardGameData.image[0]}
                    alt={`board-game${index + 1}`}
                />
                <h3 className="game-title-carousel">{game.game_title}</h3>
                <p className="price">£{game.price}</p>
            </div>
        </Link>
    );
}
