import { auth } from "@clerk/nextjs";
import { db } from "../../lib/db";
import { revalidatePath } from "next/cache";
import Link from "next/link";
import SubmitButton from "../../component/SubmitButton";
import "./profile.css";

export default async function Profile() {
    const { userId } = auth();

    const user = await db.query(
        `SELECT * FROM profiles where clerk_user_id = $1`,
        [userId]
    );

    async function handleCreateUser(formData) {
        "use server";
        const username = formData.get("username");
        const location = formData.get("location");

        await db.query(
            `INSERT INTO profiles (clerk_user_id, username, location) VALUES ($1, $2, $3) `,
            [userId, username, location]
        );
        revalidatePath("/profile");
    }
    return (
        <section className="profile-container">
            <section className="profile-form">
                <div>
                    {user.rowCount === 0 && (
                        <form action={handleCreateUser}>
                            <h2 id="profile">Create Profile</h2>
                            <input
                                name="username"
                                placeholder="Enter a Username"
                            />
                            <input name="location" placeholder="Location" />
                            <SubmitButton />
                        </form>
                    )}
                    {user.rowCount !== 0 && (
                        <div>
                            {user.rowCount === 0 && (
                                <form action={handleCreateUser}>
                                    <h2>Create Profile</h2>
                                    <input
                                        name="username"
                                        placeholder="Enter a Username"
                                    />
                                    <input
                                        name="location"
                                        placeholder="Location"
                                    />
                                    <SubmitButton />
                                </form>
                            )}
                            {user.rowCount !== 0 && (
                                <div>
                                    <div className="username-bio">
                                        <h4>{`Username: ${user.rows[0].username}`}</h4>
                                        <h4>{`Location: ${user.rows[0].location}`}</h4>
                                    </div>
                                    <Link href="/">
                                        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                                        <p>Back</p>
                                    </Link>
                                    {/* <Link href="/pages/marketplace">
                    <p>Marketplace</p>
                  </Link> */}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </section>
        </section>
    );
}
