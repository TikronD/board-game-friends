import "./header.css";
import Link from "next/link";
import Image from "next/image";
import logo from "@/../public/images/Logo-removebg.png";
// import Wave from "@/component/Wave";

export default function Header() {
  return (
    // <section className="imageheader">
    <section>
      <div className="headersection">
        <Image className="logo" src={logo} alt="boardgame friends logo" />
        <h1>Board Game Friends</h1>
        <nav className="headernav">
          <Link href="/">Home</Link>
          <Link href="/collection">My Collection</Link>
          <Link href="/events">Events</Link>
          <Link href="/marketplace">Marketplace</Link>
          <Link href="/about">About</Link>
        </nav>
      </div>
    </section>
  );
}

