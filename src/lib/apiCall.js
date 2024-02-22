import xml2js from "xml2js";

export default async function apiCall() {
  const res = await fetch(
    "https://www.boardgamegeek.com/xmlapi2/hot?boardgame"
  );
  const xml = await res.text();
  const parser = new xml2js.Parser();
  let json = "";
  parser.parseString(xml, function (err, result) {
    json = result;
  });
  return json.items.item;
}

export async function apiBoardGame(id) {
  const res = await fetch(`https://api.geekdo.com/xmlapi/boardgame/${id}`);
  const xml = await res.text();
  const parser = new xml2js.Parser();
  let json = "";
  parser.parseString(xml, function (err, result) {
    json = result;
  });
  return json.boardgames.boardgame;
}

export async function apiSearch(name) {
  const res = await fetch(
    `https://api.geekdo.com/xmlapi2/search?query=${name}`
  );
  const xml = await res.text();
  const parser = new xml2js.Parser();
  let json = "";
  parser.parseString(xml, function (err, result) {
    json = result;
  });
  return json.items.item;
}

export async function apiSearchStrict(name) {
  const res = await fetch(
    `https://api.geekdo.com/xmlapi2/search?query=${name}&exact=1`
  );
  const xml = await res.text();
  const parser = new xml2js.Parser();
  let json = "";
  parser.parseString(xml, function (err, result) {
    json = result;
  });
  return json.items.item;
}
