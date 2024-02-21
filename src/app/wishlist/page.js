import Link from "next/link";
import "../../component/wishlist.css";

export default function wishlist() {
  return (
    <Link href="/wishlist/add">
      <button className="wishlist-btn">My Wishlist</button>
    </Link>
  );
}
