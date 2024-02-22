import "./burger.css";
import Link from "next/link";
export default function Burger() {

  return (
    <div>
      <input type="checkbox" id="menu-toggle" />
      <label id="trigger" htmlFor="menu-toggle"></label>
      <label id="burger" htmlFor="menu-toggle"></label>
      <ul id="menu">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="./collection">My Collection</Link>
        </li>
        <li>
          <Link href="./events">Events</Link>
        </li>
        <li>
          <Link href="/marketplace">Marketplace</Link>
        </li>
        <li>
          <Link href="./about">About</Link>
        </li>
        <li>
          <Link href="/profile">My Profile</Link>
        </li>
      </ul>
    </div>
  );

}
