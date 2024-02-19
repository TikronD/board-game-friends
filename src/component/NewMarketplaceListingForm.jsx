import { db } from "@/lib/db";

export default function newMarketplaceListingForm() {
  async function handleSubmitListing(formData) {
    "use server";
    const gameTitle = formData.get("game_title");
    const price = formData.get("price");
    const description = formData.get("description");
    const condition = formData.get("condition");
    const extras = formData.get("extras");

    await db.query`INSERT INTO marketplace (game_title, price, description, condition, extras)
    VALUES (${gameTitle}, ${price}, ${description}, ${condition}, ${extras})`;
  }

  return (
    <div clasName="newMarketplaceListingFormContainer">
      <p>Add New Listing</p>
      <form action={handleSubmitListing}>
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
          cols="30"
          rows="10"
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
