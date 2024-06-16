import { Suspense } from "react";
import { fetchProfileData } from "@/functions/helpers/fetchProfileData";

const resource = fetchProfileData();

/**
 * リソースくんを使った方法
 * render-as-you-fetchの挙動になっている
 */
export function Sample5() {
  return (
    <Suspense fallback={<h1>Loading profile...</h1>}>
      <ProfileDetails />
      <Suspense fallback={<h1>Loading posts...</h1>}>
        <ProfileTimeline />
      </Suspense>
    </Suspense>
  );
}

function ProfileDetails() {
  // Try to read user info, although it might not have loaded yet
  const user = resource.user.read();
  return <h1>{user.name}</h1>;
}

function ProfileTimeline() {
  // Try to read posts, although they might not have loaded yet
  const posts = resource.posts.read();
  return (
    <ul>
      {posts.map((post: any) => (
        <li key={post.id}>{post.text}</li>
      ))}
    </ul>
  );
}
