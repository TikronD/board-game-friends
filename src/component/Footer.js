import "./footer.css";
import Image from "next/image";
import logo from "../../public/images/Logo-removebg.png";
import dice from "../../public/images/dice-removebg-preview.png";

export default function Footer() {
  return (
    <section className="imagefooter">
      <div className="footer-container">
        <Image className="logo" src={logo} alt="boardgame friends logo" />
        <div className="footer-text">
          <h5>
            Partner Project of <br></br>Ben Shreeve, Edward Stuart, Daniel Hahn
            and Jimmy Kerr <br></br> &copy; 2024
          </h5>
        </div>
        <Image className="dice" src={dice} alt="a pair of dice" />
      </div>
    </section>
  );
}
