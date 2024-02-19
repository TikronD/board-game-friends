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

export default function Carousel() {
  return (
    <div className="slider">
      <div className="slide-track">
        <div className="slide">
          <Image src={bg1} alt="board-game1" />
        </div>
        <div className="slide">
          <Image src={bg2} alt="board-game2" />
        </div>
        <div className="slide">
          <Image src={bg3} alt="board-game3" />
        </div>
        <div className="slide">
          <Image src={bg4} alt="board-game4" />
        </div>
        <div className="slide">
          <Image src={bg5} alt="board-game5" />
        </div>
        <div className="slide">
          <Image src={bg6} alt="board-game6" />
        </div>
        <div className="slide">
          <Image src={bg7} alt="board-game7" />
        </div>
        <div className="slide">
          <Image src={bg8} alt="board-game8" />
        </div>
        <div className="slide">
          <Image src={bg9} alt="board-game9" />
        </div>
        <div className="slide">
          <div className="info">
            <p>Monopoly</p>
            <p>£20</p>
          </div>
          <Image src={bg1} alt="board-game10" />
        </div>
        <div className="slide">
          <Image src={bg2} alt="board-game11" />
        </div>
        <div className="slide">
          <Image src={bg3} alt="board-game12" />
        </div>
        <div className="slide">
          <Image src={bg4} alt="board-game13" />
        </div>
        <div className="slide">
          <Image src={bg5} alt="board-game14" />
        </div>
        <div className="slide">
          <Image src={bg6} alt="board-game15" />
        </div>
        <div className="slide">
          <Image src={bg7} alt="board-game16" />
        </div>
        <div className="slide">
          <Image src={bg8} alt="board-game17" />
        </div>
        <div className="slide">
          <Image src={bg9} alt="board-game18" />
        </div>
      </div>
    </div>
  );
}
