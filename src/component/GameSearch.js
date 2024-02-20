"use client";
import FormLoad from "@/component/FormLoad";
import { useState } from "react";
// import { useFormStatus } from "react-dom";

export default function GameSearch({ json, handleSubmit }) {
    const [name, setName] = useState("");
    // const { pending } = useFormStatus();
    return (
        <form
            action={hand}
            className="flex flex-col gap-8 items-center justify-center"
        >
            <div className="flex flex-row gap-8">
                <div>
                    <label htmlFor="name">Name: </label>
                    <input
                        id="name"
                        onChange={(event) => setName(event.target.value)}
                        value={name}
                        name="name"
                        list="nameList"
                        autoComplete="off"
                        className="bg-gray-500 border-2 border-black text-white rounded"
                        placeholder="name"
                        required
                    />
                    <datalist
                        id="nameList"
                        name="nameList"
                        onSubmit={(event) => {
                            event.target.value = "";
                        }}
                    >
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
            <FormLoad />
        </form>
    );
}
