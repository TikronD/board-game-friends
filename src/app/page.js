import CssGrid from "@/component/CssGrid";
import { auth } from "@clerk/nextjs";
import { db } from db;
import Link from "next/link";

export default async function Home() {
  const { userId } = auth();

  const user =
    await sql`SELECT * FROM profiles where clerk_user_id = ${userId}`;
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
