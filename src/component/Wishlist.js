import { db } from "@/lib/db";
import "./wishlist.css";
import { auth } from "@clerk/nextjs";

export default async function Wishlist() {
  const now = new Date();
  const timestamp = now.getTime();
  const { userId } = auth();

  const idQuery = await db.query(
    `SELECT id from profiles WHERE clerk_user_id = $1`,
    [userId]
  );

  const id = idQuery.rows[0].id;

  const marketplaceData = await db.query(
    `SELECT game_title, price from marketplace`
  );

  const wishlistData = await db.query(
    `SELECT game_title, price_max, condition_min, extras from wishlist WHERE user_id = ${id}`
  );

  const matches = marketplaceData.rows.filter((game) =>
    wishlistData.rows.some(
      (wish) =>
        wish.game_title === game.game_title && game.price <= wish.price_max
    )
  );

  async function handleWishList(formData) {
    "use server";

    const gameTitle = formData.get("game_title");
    const priceMax = formData.get("price_max");
    const conditionMin = formData.get("condition_min");
    const extras = formData.has("extra");

    await db.query(
      `INSERT INTO wishlist (user_id, game_title, price_max, condition_min, extras, time) VALUES ($1, $2, $3, $4, $5, $6)`,
      [id, gameTitle, priceMax, conditionMin, extras, timestamp]
    );
  }

  return (
    <div className="wishlist-container">
      <div className="format">
        <h2 className="wishlist-title">Add Game to WishList</h2>
        <form className="wishlist-form" action={handleWishList}>
          <input
            className="wishlist-input"
            placeholder="Board Game"
            required
            name="game_title"
            type="text"
          ></input>
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
            <label>Extras</label>
            <input
              className="wishlist-input"
              name="extra"
              type="checkbox"
            ></input>
          </div>
          <button className="wishlist-btn">Submit</button>
        </form>
      </div>
      <div className="format">
        <h2 className="wishlist-title">Your Wishlist</h2>
        <div className="your-wishlist-container">
          {wishlistData.rows.map((game) => {
            return (
              <div
                className="your-wishlist"
                key={game.game_title + game.price_max}
              >
                <h3>
                  <strong>{game.game_title}</strong>
                </h3>
                <p>Max Price: £{game.price_max}</p>
                <p>Condition: {game.condition_min}</p>
                <p>Extras: {game.extras ? "Yes" : "No"}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="format">
        <h2 className="wishlist-title">Marketplace Matches</h2>
        <div className="your-wishlist-container match-container">
          {matches.map((game) => {
            return (
              <div className="matches" key={game.game_title + game.price}>
                <h3>
                  <strong>{game.game_title}</strong>
                </h3>
                <p>Price: £{game.price}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
