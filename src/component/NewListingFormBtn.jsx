"use client";
import "@/component/newMarketplaceListingForm.css";
import { useState } from "react";
// import PopulateMarketplaceForm from "./populateMarketplaceForm";
import NewMarketplaceListingForm from "./NewMarketplaceListingForm";

export default function NewListingFormBtn({ profile_id }) {
  const [btnStatus, setBtnStatus] = useState(true);

  function handleClickBtn() {
    setBtnStatus(!btnStatus);
    console.log(btnStatus);
  }

  return (
    <>
      <button
        onClick={() => {
          handleClickBtn();
        }}
      >
        {btnStatus ? "Close Form" : "Create New Listing"}
      </button>
      {btnStatus && <NewMarketplaceListingForm profile_id={profile_id} />}
    </>
  );
}
