"use client";

// import { db } from "../lib/db";
import { useState } from "react";
import { apiSearch, apiSearchStrict } from "../lib/apiCall";

export default function PopulateMarketplaceForm({ handleSubmitListingWID }) {
    const [data, setData] = useState("");
    const [open, setOpen] = useState(true);
    let i = 0;

    //   async function handleSubmitListing(formData) {
    //     const gameTitle = formData.get("game_title");
    //     const price = formData.get("price");
    //     const description = formData.get("description");
    //     const condition = formData.get("condition");
    //     const extras = formData.get("extras");
    //     const api = await apiSearchStrict(gameTitle);
    //     console.log(api);
    //   }

    // await db.query(`INSERT INTO marketplace (game_title, price, description, condition, extras, api_id)
    //   VALUES (${gameTitle}, ${price}, ${description}, ${condition}, ${extras}, ${2})`);

    async function handleChange(event) {
        const name = event.target.value;
        const apiData = await apiSearch(name);
        console.log(apiData);
        if (apiData != undefined) {
            setData(apiData);
        }
    }

    return (
        <div className="text-center border-2 border-[#363E55] rounded-2xl h-fit p-10">
            <h2
                onClick={() => setOpen(!open)}
                className=" hover:cursor-pointer"
            >
                {/* {open ? "Close Form" : "Open Form"} */}
            </h2>

            <>
                <p className="font-bold text-2xl">Add New Listing</p>
                <form
                    action={handleSubmitListingWID}
                    className="flex flex-col mt-4 gap-4 justify-center items-center"
                >
                    <input
                        className="border-[#363E55] border-2 rounded"
                        name="game_title"
                        id="game_title"
                        type="text"
                        required
                        placeholder="Game Title"
                        list="gameList"
                        onChange={handleChange}
                    />
                    <datalist name="gameList" id="gameList">
                        {data !== "" &&
                            data.map((item) => {
                                i++;
                                return (
                                    <option key={i}>
                                        {item.name[0].$.value}
                                    </option>
                                );
                            })}
                    </datalist>
                    <input
                        name="price"
                        id="price"
                        type="number"
                        required
                        placeholder="Price (£)"
                        className="border-[#363E55] border-2 rounded"
                    />
                    <textarea
                        name="description"
                        id="description"
                        cols="30"
                        rows="10"
                        required
                        placeholder="Description"
                        className="border-[#363E55] border-2 rounded"
                    ></textarea>
                    <select
                        name="condition"
                        id="condition"
                        className="border-[#363E55] border-2 rounded"
                    >
                        <option value="New">New</option>
                        <option value="Used">Used</option>
                        <option value="Damanged">Damaged</option>
                    </select>
                    <select
                        name="extras"
                        id="extras"
                        className="border-[#363E55] border-2 rounded"
                    >
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                    <button type="submit" className="bg-">
                        Submit
                    </button>
                </form>
            </>
        </div>
    );
}
