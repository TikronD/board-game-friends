import "./header.css";
import Link from "next/link";
import Image from "next/image";
import logo from "@/../public/images/Logo-removebg.png";
// import Wave from "@/component/Wave";

export default function Header() {
  return (
    <section>
      <div className="headersection">
        <Link href="/">
          <Image className="logo" src={logo} alt="boardgame friends logo" />
        </Link>
        <Link href="/">
          <h1 className="bgf">Board Game Friends</h1>
        </Link>

        <nav className="headernav">
          <Link href="/">Home</Link>
          <Link href="/collection">My Collection</Link>
          <Link href="/wishlist/add">My Wishlist</Link>
          <Link href="/marketplace">Marketplace</Link>
          <Link href="/about">About</Link>
        </nav>
      </div>
    </section>
  );
}
