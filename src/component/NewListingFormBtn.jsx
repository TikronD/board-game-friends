"use client";
import "@/component/newMarketplaceListingForm.css";
import { useState } from "react";
// import PopulateMarketplaceForm from "./populateMarketplaceForm";
import NewMarketplaceListingForm from "./NewMarketplaceListingForm";

export default function NewListingFormBtn({ profile_id }) {
    const [btnStatus, setBtnStatus] = useState(false);

    function handleClickBtn() {
        setBtnStatus(!btnStatus);
    }

    return (
        <div className="w-fit justify-self-center p-4">
            <div className="text-center mt-4 ">
                <button
                    className="rounded border-black bg-[#363E55] border-2 p-2 text-white hover:text-gray-500"
                    onClick={() => {
                        handleClickBtn();
                    }}
                >
                    {btnStatus ? "Close Form" : "Create New Listing"}
                </button>
            </div>
            <div>
                {btnStatus && (
                    <NewMarketplaceListingForm profile_id={profile_id} />
                )}
            </div>
        </div>
    );
}
