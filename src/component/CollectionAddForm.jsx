"use client";
import { useState } from "react";
import FormLoad from "./FormLoad";
import xml2js from "xml2js";
import apiCall, { apiSearch } from "@/lib/apiCall";

export default function CollectionAddForm({ api, handleSubmit }) {
    const [data, setData] = useState(api);
    const [price, setPrice] = useState(``);
    let i = 0;
    return (
        <div className="flex flex-col gap-4 justify-center items-center text-2xl font-mono mt-8">
            <h2>Add Game: </h2>
            <form
                action={(event) => {
                    handleSubmit(event, data);
                }}
                className="flex flex-col gap-8 items-center justify-center"
            >
                <div className="flex flex-row gap-8">
                    <div>
                        <label htmlFor="name">Name: </label>
                        <input
                            id="name"
                            name="name"
                            list="nameList"
                            autoComplete="off"
                            className="bg-gray-500 border-2 border-black text-white rounded"
                            placeholder="name"
                            onChange={getapi}
                            required
                        />
                        <datalist id="nameList" name="nameList">
                            {data.map((item) => {
                                // console.log(JSON.stringify(item));
                                i++;
                                return (
                                    <option
                                        value={item.name[0].$.value}
                                        key={i}
                                        id={item.name[0].$.value}
                                    >
                                        {item.name[0].$.value}
                                    </option>
                                );
                            })}
                            {(i = 0)}
                        </datalist>
                    </div>
                    <div>
                        <label htmlFor="price">Price Paid: </label>
                        <input
                            value={price}
                            onChange={(event) => {
                                const num = event.target.value.replace("£", "");
                                setPrice(`£${num}`);
                            }}
                            name="price"
                            id="price"
                            // type="number"
                            className="bg-gray-500 border-2 border-black text-white rounded"
                            placeholder="£10"
                            required
                        />
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
                <FormLoad />
            </form>
        </div>
    );

    async function getapi(event) {
        const name = event.target.value;
        let res = await apiSearch(name);
        if (name == "") {
            res = await apiCall();
        }
        setData(res);
    }
}
