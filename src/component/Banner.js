import "./banner.css";
import Image from "next/image";
import banner from "../../public/images/GB25_Desktop_1600px_Alt.png";
import Link from "next/link";

export default function Banner() {
  return (
    <section className="bannerposition">
      <div>
        <Link href="https://www.specialeffect.org.uk/gameblast">
          <Image className="banner" src={banner} alt="boardgame friends logo" />
        </Link>
      </div>
    </section>
  );
}
