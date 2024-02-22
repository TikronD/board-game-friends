import { db } from "@/lib/db";
import "./wishlist.css";
import { auth } from "@clerk/nextjs";
import { revalidatePath } from "next/cache";
import apiCall, { apiBoardGame, apiSearchStrict } from "@/lib/apiCall";
import WishlistForm from "./WishlistForm.jsx";

export default async function Wishlist() {
  const api = await apiCall();
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
    `SELECT game_title, price_max, condition_min, extras, api_id from wishlist WHERE user_id = ${id}`
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
    const extras = formData.get("extras");
    const search = gameTitle.replace(" ", "+");
    const data = await apiSearchStrict(search);

    await db.query(
      `INSERT INTO wishlist (user_id, game_title, price_max, condition_min, extras, time, api_id) VALUES ($1, $2, $3, $4, $5, $6, $7)`,
      [id, gameTitle, priceMax, conditionMin, extras, timestamp, data[0].$.id]
    );

    revalidatePath("/wishlist/add");
  }

  return (
    <div className="wishlist-container">
      <div className="format">
        <h2 className="wishlist-title">Add Game to WishList</h2>
        <WishlistForm handleWishList={handleWishList} api={api} />
      </div>
      <div className="format">
        <h2 className="wishlist-title">Your Wishlist</h2>
        <div className="your-wishlist-container">
          {wishlistData.rows.map(async (game) => {
            const boardGameData = await apiBoardGame(game.api_id);
            return (
              <div>
                <div
                  className="your-wishlist"
                  key={game.game_title + game.price_max}
                >
                  <img
                    className="wishlist-img"
                    src={boardGameData[0].image[0]}
                  />
                  <h3 className="wishlist-game">
                    <strong>{game.game_title}</strong>
                  </h3>
                  <p className="wishlist-attributes">
                    Max Price: £{game.price_max}
                  </p>
                  <p className="wishlist-attributes">
                    Condition: {game.condition_min}
                  </p>
                  <p className="wishlist-attributes">Extras: {game.extras}</p>
                </div>
                <hr class="h-px my-2 bg-gray-300 border-0 dark:bg-gray-700"></hr>
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
