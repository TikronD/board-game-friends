"use client";
import { useState } from "react";
import NewMarketplaceListingForm from "@/component/NewMarketplaceListingForm";
import "@/app/marketplace/marketplace.css";

export default function NewListingFormBtn({ profile_id }) {
  const [btnStatus, setBtnStatus] = useState(true);

  function handleClickBtn() {
    setBtnStatus(!btnStatus);
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
