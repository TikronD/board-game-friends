import "@/component/newMarketplaceListingForm.css";
import "@/component/NewListingFormBtn";
import { handleSubmitListing } from "@/lib/actions";

export default function NewMarketplaceListingForm({ profile_id }) {
    const handleSubmitWithID = handleSubmitListing.bind(null, profile_id);

    return (
        <div className="newMarketplaceListingFormContainer">
            <form action={handleSubmitWithID}>
                <input
                    name="game_title"
                    id="game_title"
                    type="text"
                    required
                    placeholder="Game Title"
                />
                <input
                    name="price"
                    id="price"
                    type="number"
                    required
                    placeholder="Price"
                />
                <textarea
                    name="description"
                    id="description"
                    cols="20"
                    rows="5"
                    required
                    placeholder="Description"
                ></textarea>
                <select name="condition" id="condition">
                    <option value="New">New</option>
                    <option value="Used">Used</option>
                    <option value="Damanged">Damaged</option>
                </select>
                <select name="extras" id="extras">
                    <option value="true">Yes</option>
                    <option value="false">No</option>
                </select>
                <button type="submit">submit</button>
            </form>
        </div>
    );
}
