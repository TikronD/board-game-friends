import Image from "next/image";
import pic1 from "@/../public/images/example-images/pic1.png";
import pic2 from "@/../public/images/example-images/pic2.jpg";
import pic3 from "@/../public/images/example-images/pic3.jpg";
import pic4 from "@/../public/images/example-images/pic4.png";
import "./about.css";

export default function About() {
    return (
        <div className="about-container">
            <div className="about">
                <h2 id="about-us">About Us</h2>
                <p className="text">
                    Welcome to Board Game Friends, the ultimate destination for
                    board game enthusiasts of all levels! Born from a passion
                    for tabletop gaming and a desire to connect players with a
                    wide range of board games, from timeless classics to the
                    latest hits, our marketplace is designed to cater to every
                    taste and interest.
                </p>
                <h2 id="mission">Our Mission</h2>
                <p className="text">
                    At Board Game Friends, our mission is simple: to provide a
                    comprehensive, user-friendly platform where gamers can
                    discover, buy, and sell board games with ease. We believe in
                    the power of board games to bring people together, fostering
                    connections, creativity, and strategic thinking. Our goal is
                    to make it easier for everyone to access the games they love
                    and discover new favorites, all while supporting a vibrant,
                    global community of players and creators.
                </p>
                <h2 id="meet">Meet the Creators</h2>
            </div>
            <div className="about-track">
                <div className="slide-about">
                    <Image className="image-about" src={pic4} alt="pic4" />
                    <h3>Edd</h3>
                </div>
            </div>
        </div>
        <div className="slide-about">
          <Image className="image-about" src={pic3} alt="pic3" />
          <h3>Jimmy</h3>
        </div>
        <div className="slide-about">
          <Image className="image-about" src={pic1} alt="pic1" />
          <h3>Dan</h3>
        </div>
        <div className="slide-about">
          <Image className="image-about" src={pic2} alt="pic2" />
          <h3>Ben</h3>
        </div>
      </div>
    </div>
  );
}
