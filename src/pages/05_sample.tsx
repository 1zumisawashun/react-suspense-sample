import { Suspense } from "react";
import { fetchProfileData } from "@/functions/helpers/fetchProfileData";

/**
 * resourceを使った方法（擬似preload）
 * render-as-you-fetchの挙動になっている
 */

const resource = fetchProfileData();

function ProfileDetails() {
  // Try to read user info, although it might not have loaded yet
  const user = resource.user.read();
  console.log(`render ProfileDetails (${JSON.stringify(user)})`);
  return <h1>{user.name}</h1>;
}

function ProfileTimeline() {
  // Try to read posts, although they might not have loaded yet
  const posts = resource.posts.read();
  console.log(`render ProfileTimeline (${JSON.stringify(posts)})`);
  return (
    <ul>
      {posts.map((post: any) => (
        <li key={post.id}>{post.text}</li>
      ))}
    </ul>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<h1>Loading profile...</h1>}>
      <ProfileDetails />
      <Suspense fallback={<h1>Loading posts...</h1>}>
        <ProfileTimeline />
      </Suspense>
    </Suspense>
  );
}
