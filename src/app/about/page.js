import Image from "next/image";
import pic1 from "@/../public/images/example-images/pic1.png";
import pic2 from "@/../public/images/example-images/pic2.jpg";
import pic3 from "@/../public/images/example-images/pic3.jpg";
import pic4 from "@/../public/images/example-images/pic4.png";
import "./about.css";

export default function About() {
    return (
        <div className="about-container">
            <div className="about-track">
                <div className="slide-about">
                    <Image className="image-about" src={pic4} alt="pic4" />
                    <h3>Edd</h3>
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
