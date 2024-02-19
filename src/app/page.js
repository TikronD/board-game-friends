import CssGrid from "@/component/CssGrid";
import { db } from "../lib/db";
import { auth } from "@clerk/nextjs";
import Link from "next/link";

export default async function Home() {
  const { userId } = auth();
  console.log(userId);
  const user = await db.query(
    `SELECT * FROM profiles where clerk_user_id = $1`,
    [userId]
  );

  return (
    <>
      {userId && user.rowCount === 0 && (
        <div>
          <Link href="/profile">
            <p>Create Profile</p>
          </Link>
        </div>
      )}
      {userId && user.rowCount !== 0 && (
        <div>
          <Link href="/profile">My profile</Link>
          <CssGrid />
        </div>
      )}
    </>
  );
}
