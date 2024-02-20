/* eslint-disable @next/next/no-img-element */
import xml2js from "xml2js";
export default async function GameImage({ game }) {
    const res = await fetch(
        `https://api.geekdo.com/xmlapi/boardgame/${game.api_id}`
    );
    const xml = await res.text();
    const parser = new xml2js.Parser();
    let json = "";
    parser.parseString(xml, function (err, result) {
        json = result;
    });
    console.log(JSON.stringify(json.boardgames.boardgame[0].thumbnail));

    return (
        <img
            alt="game"
            src={`${json.boardgames.boardgame[0].thumbnail}`}
            className=" rounded-tl rounded-bl h-[50px]"
            style={{
                maskImage:
                    "linear-gradient(90deg, rgb(0,0,0) 80%, transparent)",
            }}
        />
    );
}
