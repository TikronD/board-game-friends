
import "./header.css";
import Link from "next/link";

export default function Header() {
  return (
    <section>
      <div className="container">
        <div className="imageheader">
          <h1>Board Game Friends</h1>
          <nav>
            <Link href="/">Home</Link>
            <Link href="./collection">My Collection</Link>
            <Link href="./events">Events</Link>
            <Link href="/marketplace">Marketplace</Link>
            <Link href="./about">About</Link>
          </nav>
        </div>
      </div>
    </section>
  );
}

