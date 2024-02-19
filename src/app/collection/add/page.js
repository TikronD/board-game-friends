import { parse } from "node-html-parser";

export default async function AddCollection() {
    const res = await fetch(
        "https://api.geekdo.com/xmlapi/search?search=frika"
    );

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
                            className="bg-gray-500 border-2 border-black text-white rounded"
                            placeholder="name"
                            required
                        />
                    </div>
                    <div>
                        <label>Condition: </label>
                        <select>
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
    }
}
