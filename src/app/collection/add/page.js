import FormLoad from "@/component/FormLoad";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import xml2js from "xml2js";

export default async function AddCollection() {
    const res = await fetch(
        "https://www.boardgamegeek.com/xmlapi2/hot?boardgame"
    );
    const xml = await res.text();
    const parser = new xml2js.Parser();
    let json = "";
    parser.parseString(xml, function (err, result) {
        json = result;
    });
    // const data = JSON.stringify(json.items.item[0]);
    // console.log(data);

    // console.log(JSON.stringify(json.items.item));

    return (
        <div className="flex flex-col gap-4 justify-center items-center text-2xl font-mono mt-8">
            <h2>Add Game: </h2>
            <form
                action={handleSubmit}
                className="flex flex-col gap-8 items-center justify-center"
            >
                <div className="flex flex-row gap-8">
                    <div>
                        <label>Name: </label>
                        <input
                            id="name"
                            name="name"
                            list="nameList"
                            autoComplete="off"
                            className="bg-gray-500 border-2 border-black text-white rounded"
                            placeholder="name"
                            required
                        />
                        <datalist id="nameList" name="nameList">
                            {json.items.item.map((item) => {
                                return (
                                    <option
                                        value={item.name[0].$.value}
                                        key={item.$.id}
                                        id={item.name[0].$.value}
                                    >
                                        {item.name[0].$.value}
                                    </option>
                                );
                            })}
                        </datalist>
                    </div>
                    <div>
                        <label htmlFor="condition">Condition: </label>
                        <select
                            id="condition"
                            name="condition"
                            className="border-2 border-black rounded"
                        >
                            <option>New</option>
                            <option>Used</option>
                            <option>Damaged</option>
                        </select>
                    </div>
                </div>
                {json.items.item.map((item) => {
                    // console.log(item);
                    // return (
                    //     <>
                    //         {/* <h2>{item}</h2> */}
                    //         <img
                    //             key={item.$.id}
                    //             alt={`${item.name[0].$.value}`}
                    //             src={`${item.thumbnail[0].$.value}`}
                    //         />
                    //     </>
                    // );
                })}
                <FormLoad />
            </form>
        </div>
    );

    async function handleSubmit(formData) {
        "use server";

        const res = await fetch(
            "https://www.boardgamegeek.com/xmlapi2/hot?boardgame"
        );
        const xml = await res.text();
        const parser = new xml2js.Parser();
        let json = "";
        parser.parseString(xml, function (err, result) {
            json = result;
        });

        const condition = formData.get("condition");
        const name = formData.get("name");
        json.items.item.map(async (item) => {
            if (item.name[0].$.value == name) {
                await db.query(
                    `INSERT INTO collection(user_id, game_title, price_paid, condition, extras, active, api_id) VALUES (1, '${name}', 10, '${condition}', false, true, ${item.$.id})`
                );
            }
        });
        revalidatePath("/collection");
    }
}
