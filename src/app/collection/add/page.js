/* eslint-disable @next/next/no-img-element */
// "use server";
import CollectionAddForm from "@/component/CollectionAddForm";
import FormLoad from "@/component/FormLoad";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";
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
    // console.log(JSON.stringify(json));
    // const data = JSON.stringify(json.items.item[0]);
    // console.log(data);

    // console.log(JSON.stringify(json.items.item));

    return <CollectionAddForm json={json} handleSubmit={handleSubmit} />;

    // return (
    //     <div className="flex flex-col gap-4 justify-center items-center text-2xl font-mono mt-8">
    //         <h2>Add Game: </h2>
    //         <form
    //             action={handleSubmit}
    //             className="flex flex-col gap-8 items-center justify-center"
    //         >
    //             <div className="flex flex-row gap-8">
    //                 <div>
    //                     <label>Name: </label>
    //                     <input
    //                         id="name"
    //                         name="name"
    //                         list="nameList"
    //                         autoComplete="off"
    //                         className="bg-gray-500 border-2 border-black text-white rounded"
    //                         placeholder="name"
    //                         onChange={getAPI()}
    //                         required
    //                     />
    //                     <datalist id="nameList" name="nameList">
    //                         {json.items.item.map((item) => {
    //                             // console.log(JSON.stringify(item));
    //                             return (
    //                                 <option
    //                                     value={item.name[0].$.value}
    //                                     key={item.$.id}
    //                                     id={item.name[0].$.value}
    //                                 >
    //                                     {item.name[0].$.value}
    //                                 </option>
    //                             );
    //                         })}
    //                     </datalist>
    //                 </div>
    //                 <div>
    //                     <label htmlFor="condition">Condition: </label>
    //                     <select
    //                         id="condition"
    //                         name="condition"
    //                         className="border-2 border-black rounded"
    //                     >
    //                         <option>New</option>
    //                         <option>Used</option>
    //                         <option>Damaged</option>
    //                     </select>
    //                 </div>
    //             </div>
    //             <FormLoad />
    //         </form>
    //     </div>
    // );

    async function handleSubmit(formData, json) {
        "use server";
        // if (!json) {
        //     const res = await fetch(
        //         "https://www.boardgamegeek.com/xmlapi2/hot?boardgame"
        //     );
        //     const xml = await res.text();
        //     const parser = new xml2js.Parser();
        //     let json = "";
        //     parser.parseString(xml, function (err, result) {
        //         json = result;
        //     });
        // }

        const condition = formData.get("condition");
        const name = formData.get("name");
        const price = formData.get("price").replace("£", "");
        console.log("hi");

        json.items.item.map(async (item) => {
            if (item.name[0].$.value == name) {
                const { userId } = auth();
                const user = await db.query(
                    `SELECT * FROM profiles WHERE clerk_user_id='${userId}'`
                );
                const { rows } = await db.query(
                    `SELECT * FROM collection WHERE user_id=${user.rows[0].id} AND game_title=${name}`
                );
                await db.query(
                    `INSERT INTO collection(user_id, game_title, price_paid, condition, extras, active, api_id) VALUES (${user.rows[0].id}, '${name}', ${price}, '${condition}', false, true, ${item.$.id})`
                );
            }
        });
        revalidatePath("/collection");
    }
}
