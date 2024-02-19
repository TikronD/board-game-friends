import "./header.css";
import Link from "next/link";
// import logo from "/images/logo.png";

export default function Header() {
  return (
    <section>
      <div>
        <div>
          <img src="/images/logo.png" width={50} height={50} alt="Logo" />
        </div>
        <div>
          <h1>Board Game Friends</h1>
        </div>
        <nav>
          <Link href="/">Home</Link>
          <Link href="./about">About</Link>
          <Link href="./collection">My Collection</Link>
          <Link href="./events">Events</Link>
          <Link href="/marketplace">Marketplace</Link>
        </nav>
      </div>
    </section>
  );
}
