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
          Welcome to Board Game Friends, the ultimate place for board game
          enthusiasts! The idea for this website came from a dream we have to
          connect boardgamers all over Norfolk, selling boardgames from YOUR
          collection and finding timeless classics and latest releases on our
          marketplace.
        </p>
        <h2 id="mission">Our Mission</h2>
        <p className="text">
          At Board Game Friends, our mission is simple: to provide a
          comprehensive, user-friendly platform where board gamers can discover,
          buy, and sell board games with ease. We believe that board games can
          bring people together, create new connections, creativity, and
          strategic thinking. Our goal is to make it easier for everyone to
          access the games they love and discover new favorites, all while
          supporting a vibrant, global community of players and creators.
        </p>
        <h2 id="meet">Meet the Creators</h2>
      </div>
      <div className="about-track">
        <div className="slide-about">
          <Image className="image-about" src={pic4} alt="pic4" />
          <h3>Edd</h3>
          <p className="biotext">
            My name is Edd, short for Edward, I am a pacifist, ex Herbal Essence
            model, part time coder other part board gamer. I have a passion for
            LARPing. I even made my own staff, it&apos;s beautiful. The other
            day Daniel came over to visit, when he lifted the staff over his
            head he looked like Aragorn with the power of Gandalf.
          </p>
        </div>
        <div className="slide-about">
          <Image className="image-about" src={pic3} alt="pic3" />
          <h3>Jimmy</h3>
          <p className="biotext">
            I&apos;ve met those guys on a bootcamp in Norwich. We coded this
            webpage together as a final project. I love playing video games in
            my free time, but started playing boardgames in my lunch break. My
            dream is to have long hair like Edd and a beard as full as
            Dan&apos;s, they are so handsome.
          </p>
        </div>
        <div className="slide-about">
          <Image className="image-about" src={pic1} alt="pic1" />
          <h3>Daniel</h3>
          <p className="biotext">
            Growing up in Germany I played many card and boardgames with my mum.
            She had a lot of patience with me and I haven&apos;t flipped a table
            since. Growing up my most played games where Skat and Catan. I now
            meet locally discovering new games every week. My current favourites
            are Wonderland War, Ark Nova, and Apiary, give me a shout if you
            want a game...
          </p>
        </div>
        <div className="slide-about">
          <Image className="image-about" src={pic2} alt="pic2" />
          <h3>Ben</h3>
          <p className="biotext">
            Ben. Short for Boardgame Enthusiastic Nerd. My mum had a pair of
            fluffy dice dangling over my cot bed. I love playing boardgames when
            I am not coding. Daniel is my personal arch enemy, he just beats me
            at every game we play, he&apos;s my idol. I want to be like you Dan,
            why can&apos;t I be like you?
          </p>
        </div>
      </div>
    </div>
  );
}
