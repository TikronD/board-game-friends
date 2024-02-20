import { db } from "@/lib/db";
import parse from "node-html-parser";
import xml2js from "xml2js";

export default async function userGame({ params }) {
    const reg = new RegExp("<br/>");
    const res = await fetch(
        `https://api.geekdo.com/xmlapi/boardgame/${params.id}`
    );
    const xml = await res.text();
    const parser = new xml2js.Parser();
    let json;
    parser.parseString(xml, (err, result) => {
        json = result;
    });
    console.log(JSON.stringify(json.boardgames.boardgame[0].maxplayers));
    let game = json.boardgames.boardgame[0];
    const description = game.description.toString();
    return (
        <div className="flex flex-col gap-4 justify-center items-center mt-4 mr-40 ml-40">
            <h2 className="text-4xl font-bold">{`Players (${game.minplayers} - ${game.maxplayers})`}</h2>
            <h2>{`Playtime: ${game.minplaytime} - ${game.maxplaytime} mins`}</h2>
            <div dangerouslySetInnerHTML={{ __html: description }} />
        </div>
    );
}
