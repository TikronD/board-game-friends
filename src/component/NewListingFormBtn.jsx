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
    <>
      <div className="marketplaceHeader">
        <button
          className="listingBtn"
          onClick={() => {
            handleClickBtn();
          }}
        >
          {btnStatus ? "Close Form" : "Create New Listing"}
        </button>
      </div>
      <div>
        {btnStatus && <NewMarketplaceListingForm profile_id={profile_id} />}
      </div>
    </>
  );
}
