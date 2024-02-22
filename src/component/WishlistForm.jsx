"use client";
import { useState } from "react";
import { apiSearch } from "../lib/apiCall";

export default function WishlistForm({ handleWishList, api }) {
  const [data, setData] = useState(api);
  let i = 0;
  async function HandleChange(event) {
    const name = event.target.value;
    if (name != "") {
      const res = await apiSearch(name);
      if (res != undefined) {
        setData(res);
      }
    }
  }

  return (
    <form className="wishlist-form" action={handleWishList}>
      <input
        onChange={HandleChange}
        className="wishlist-input"
        placeholder="Board Game"
        required
        name="game_title"
        type="text"
        list="boardGameList"
      ></input>
      <datalist id="boardGameList" name="boardGameList">
        {data.map((item) => {
          i++;
          return <option key={i}>{item.name[0].$.value}</option>;
        })}
      </datalist>
      <input
        className="wishlist-input"
        placeholder="Maximum Price"
        required
        name="price_max"
        type="number"
      ></input>
      <div className="condition">
        <label>Condition</label>
        <select className="wishlist-input" name="condition_min" required>
          <option value="">Please select condition</option>
          <option value="new">New</option>
          <option value="used">Used</option>
          <option value="damaged">Damaged</option>
        </select>
      </div>

      <div className="extras">
        <label className="extras-label">Extras</label>
        <select className="wishlist-input" name="extras" required>
          <option value="">Please select option</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <button className="wishlist-btn">Submit</button>
    </form>
  );
}
