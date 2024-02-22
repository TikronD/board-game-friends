import Image from "next/image";
import bg1 from "@/../public/images/example-images/bg1.jpg";
import bg2 from "@/../public/images/example-images/bg2.jpg";
import bg3 from "@/../public/images/example-images/bg3.jpg";
import bg4 from "@/../public/images/example-images/bg4.jpg";
import bg5 from "@/../public/images/example-images/bg5.jpg";
import bg6 from "@/../public/images/example-images/bg6.jpg";
import bg7 from "@/../public/images/example-images/bg7.jpg";
import bg8 from "@/../public/images/example-images/bg8.jpg";
import bg9 from "@/../public/images/example-images/bg9.jpg";
import "./carousel.css";
import { db } from "@/lib/db";
import Link from "next/link";
import { apiBoardGame } from "@/lib/apiCall";

const images = [bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8, bg9];

export default async function Carousel() {
  const listings = await db.query(
    `SELECT game_title, price, api_id from marketplace LIMIT 9`
  );

  const doubleListings = [...listings.rows, ...listings.rows];
  return (
    <div>
      <h2 id="marketplace-highlights">Marketplace Highlights</h2>
      <div className="slider">
        <div className="slide-track">
          {doubleListings.map(async (game, index) => {
            const boardGameData = await apiBoardGame(game.api_id);
            return (
              <div className="slide" key={index}>
                <img
                  className="image"
                  src={boardGameData.image[0]}
                  alt={`board-game${index + 1}`}
                />
                <h3 className="game-title-carousel">{game.game_title}</h3>
                <p className="price">£{game.price}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* <div className="slide">
          <Image className="image" src={bg1} alt="board-game1" />
          <h3>Monopoly</h3>
          <p className="price">£20</p>
        </div>
        <div className="slide">
          <Image className="image" src={bg2} alt="board-game2" />
          <h3>Chess</h3>
          <p className="price">£15</p>
        </div>
        <div className="slide">
          <Image className="image" src={bg3} alt="board-game3" />
          <h3>Catan</h3>
          <p className="price">£25</p>
        </div>
        <div className="slide">
          <Image className="image" src={bg4} alt="board-game4" />
          <h3>Small World</h3>
          <p className="price">£30</p>
        </div>
        <div className="slide">
          <Image className="image" src={bg5} alt="board-game5" />
          <h3>Explorer</h3>
          <p className="price">£40</p>
        </div>
        <div className="slide">
          <Image className="image" src={bg6} alt="board-game6" />
          <h3>Agricola</h3>
          <p className="price">£50</p>
        </div>
        <div className="slide">
          <Image className="image" src={bg7} alt="board-game7" />
          <h3>Stardew Valley</h3>
          <p className="price">£27</p>
        </div>
        <div className="slide">
          <Image className="image" src={bg8} alt="board-game8" />
          <h3>Orb</h3>
          <p className="price">£15</p>
        </div>
        <div className="slide">
          <Image className="image" src={bg9} alt="board-game9" />
          <h3>Collection</h3>
          <p className="price">£15</p>
        </div>
        <div className="slide">
          <Image className="image" src={bg1} alt="board-game10" />
          <h3>Monopoly</h3>
          <p className="price">£20</p>
        </div>
        <div className="slide">
          <Image className="image" src={bg2} alt="board-game11" />
          <h3>Chess</h3>
          <p className="price">£15</p>
        </div>
        <div className="slide">
          <Image className="image" src={bg3} alt="board-game12" />
          <h3>Catan</h3>
          <p className="price">£25</p>
        </div>
        <div className="slide">
          <Image className="image" src={bg4} alt="board-game13" />
          <h3>Small World</h3>
          <p className="price">£30</p>
        </div>
        <div className="slide">
          <Image className="image" src={bg5} alt="board-game14" />
          <h3>Explorer</h3>
          <p className="price">£40</p>
        </div>
        <div className="slide">
          <Image className="image" src={bg6} alt="board-game15" />
          <h3>Agricola</h3>
          <p className="price">£50</p>
        </div>
        <div className="slide">
          <Image className="image" src={bg7} alt="board-game16" />
          <h3>Stardew Valley</h3>
          <p className="price">£27</p>
        </div>
        <div className="slide">
          <Image className="image" src={bg8} alt="board-game17" />
          <h3>Orb</h3>
          <p className="price">£15</p>
        </div>
        <div className="slide">
          <Image className="image" src={bg9} alt="board-game18" />
          <h3>Collection</h3>
          <p className="price">£15</p>
        </div> */
