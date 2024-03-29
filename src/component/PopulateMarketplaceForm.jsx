"use client";

import { useState } from "react";
import { apiSearch } from "../lib/apiCall";
import "@/component/newMarketplaceListingForm.css";

export default function populateMarketplaceForm() {
  const [data, setData] = useState("");

  //   async function handleSubmitListing(formData) {
  //     const gameTitle = formData.get("game_title");
  //     const price = formData.get("price");
  //     const description = formData.get("description");
  //     const condition = formData.get("condition");
  //     const extras = formData.get("extras");

  //     await db.query`INSERT INTO marketplace (game_title, price, description, condition, extras)
  //     VALUES (${gameTitle}, ${price}, ${description}, ${condition}, ${extras})`;
  //   }

  async function handleChange(event) {
    const name = event.target.value;
    const apiData = await apiSearch(name);
    if (apiData != undefined) {
      setData(apiData);
    }
  }

  return (
    <div className="newMarketplaceListingFormContainer">
      <p>Create New Listing</p>
      <form action={handleSubmitListing}>
        <input
          name="game_title"
          id="game_title"
          type="text"
          required
          placeholder="Game Title"
          list="game_list"
          //   onChange={handleChange}
        />
        <datalist name="game_list" id="game_list">
          {data !== "" && data.map((item) => {})}
        </datalist>
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
          cols="10"
          rows="3"
          required
          placeholder="Description"
        ></textarea>
        <select name="condition" id="condition">
          <option value="New">New</option>
          <option value="Used">Used</option>
          <option value="Damaged">Damaged</option>
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
