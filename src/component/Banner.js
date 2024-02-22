// import "./banner.css";
import Image from "next/image";
import banner from "../../public/images/GB25_Desktop_1600px_Alt.png";

export default function Banner() {
  return (
    <div>
      <Image className="banner" src={banner} alt="boardgame friends logo" />
    </div>
  );
}
