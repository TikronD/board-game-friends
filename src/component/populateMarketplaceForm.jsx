"use client";

// import { db } from "../lib/db";
import { useState } from "react";
import { apiSearch, apiSearchStrict } from "../lib/apiCall";

export default function PopulateMarketplaceForm({ handleSubmitListingWID }) {
  const [data, setData] = useState("");

  //   async function handleSubmitListing(formData) {
  //     const gameTitle = formData.get("game_title");
  //     const price = formData.get("price");
  //     const description = formData.get("description");
  //     const condition = formData.get("condition");
  //     const extras = formData.get("extras");
  //     const api = await apiSearchStrict(gameTitle);
  //     console.log(api);
  //   }

  // await db.query(`INSERT INTO marketplace (game_title, price, description, condition, extras, api_id)
  //   VALUES (${gameTitle}, ${price}, ${description}, ${condition}, ${extras}, ${2})`);

  async function handleChange(event) {
    const name = event.target.value;
    const apiData = await apiSearch(name);
    console.log(apiData);
    if (apiData != undefined) {
      setData(apiData);
    }
  }

  return (
    <div className="newMarketplaceListingFormContainer">
      <p>Add New Listing</p>
      <form action={handleSubmitListingWID}>
        <input
          name="game_title"
          id="game_title"
          type="text"
          required
          placeholder="Game Title"
          list="gameList"
          onChange={handleChange}
        />
        <datalist name="gameList" id="gameList">
          {data !== "" &&
            data.map((item) => {
              return <option>{item.name[0].$.value}</option>;
            })}
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
