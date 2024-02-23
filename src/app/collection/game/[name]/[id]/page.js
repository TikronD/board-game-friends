import { apiBoardGame } from "@/lib/apiCall";

export default async function userGame({ params }) {
  let game = await apiBoardGame(params.id);
  const description = game.description.toString();
  return (
    <div className="flex flex-col gap-4 justify-center items-center mt-4 mr-60 ml-60 text-center">
      <div className="border-2 border-[#5f9bdb] rounded-2xl p-2 shadow-lg text-center">
        <h2 className="text-4xl font-bold">{game.name[0]._}</h2>
        <h2 className="font-bold">{`Players (${game.minplayers} - ${game.maxplayers})`}</h2>
        <h2>{`Playtime: ${game.minplaytime} - ${game.maxplaytime} mins`}</h2>
      </div>
      <div dangerouslySetInnerHTML={{ __html: description }} />
    </div>
  );
}
