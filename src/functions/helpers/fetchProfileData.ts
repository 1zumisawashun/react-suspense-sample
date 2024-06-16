import { wrapPromise } from "@/functions/helpers/wrapPromise";

const posts = [
  {
    id: 0,
    text: "I get by with a little help from my friends",
  },
  {
    id: 1,
    text: "I'd like to be under the sea in an octupus's garden",
  },
  {
    id: 2,
    text: "You got that sand all over your feet",
  },
];

export function fetchPosts() {
  console.log("fetch posts...");
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("fetched posts");
      resolve(posts);
    }, 3000);
  });
}

const user = {
  name: "Ringo Starr",
};

export function fetchUser() {
  console.log("fetch user...");
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("fetched user");
      resolve(user);
    }, 3000);
  });
}

export function fetchProfileData() {
  const userPromise = fetchUser();
  const postsPromise = fetchPosts();
  return {
    user: wrapPromise(userPromise),
    posts: wrapPromise(postsPromise),
  };
}
