import { handleSubmitListing } from "@/lib/actions";
import PopulateMarketplaceForm from "./populateMarketplaceForm";
import { apiBoardGame, apiSearchStrict } from "@/lib/apiCall";

export default function NewMarketplaceListingForm({ profile_id }) {
  const handleSubmitListingWID = handleSubmitListing.bind(null, profile_id);

  return (
    <>
      <PopulateMarketplaceForm
        handleSubmitListingWID={handleSubmitListingWID}
      />
    </>
  );
}
