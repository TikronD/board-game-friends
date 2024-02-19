// import { parse } from "node-html-parser";
import { db } from "@/lib/db";

export default async function AddCollection() {
    // const res = await fetch(
    //     "https://api.geekdo.com/xmlapi/search?search=frika"
    // );

    return (
        <div className="flex flex-col gap-4 justify-center items-center text-2xl font-mono mt-8">
            <h2>Add Game: </h2>
            <form
                action={handleSubmit}
                className="flex flex-col gap-8 items-center justify-center"
            >
                <div className="flex flex-row gap-8">
                    <div>
                        <label htmlFor="name">Name: </label>
                        <input
                            id="name"
                            name="name"
                            className="bg-gray-500 border-2 border-black text-white rounded"
                            placeholder="name"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="condition">Condition: </label>
                        <select id="condition" name="condition">
                            <option>New</option>
                            <option>Used</option>
                            <option>Damaged</option>
                        </select>
                    </div>
                </div>
                <button
                    type="submit"
                    className="bg-green-500 text-white border-2 border-black w-fit p-2 hover:bg-green-600 hover:text-gray-400 transition-colors duration-200 rounded"
                >
                    Submit
                </button>
            </form>
        </div>
    );

    async function handleSubmit(formData) {
        "use server";
        const condition = formData.get("condition");
        const name = formData.get("name");
        console.log(name, condition);
        await db.query(
            `INSERT INTO collection(user_id, game_title, price_paid, condition, extras, active) VALUES (1, '${name}', 10, '${condition}', false, true)`
        );
    }
}
