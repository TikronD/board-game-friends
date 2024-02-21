"use client";
import { useFormStatus } from "react-dom";

export default function FormLoad() {
    const { pending } = useFormStatus();
    return (
        <button
            disabled={pending}
            type="submit"
            className={`bg-green-500 text-white border-2 border-black w-[150px] p-2 hover:bg-green-600 hover:text-gray-400 transition-colors duration-200 rounded ${
                pending && `animate-pulse`
            }`}
        >
            {" "}
            {pending ? (
                <h2 className="animate-bounce">...</h2>
            ) : (
                <h2>Submit</h2>
            )}
        </button>
    );
}
