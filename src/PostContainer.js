import React from "react";

import PostCard from "./PostCard";

import { api } from "./ghostAPI";

const PostContainer = (props) => {
  const [posts, setPosts] = React.useState(null);
  function getPost() {
    api.posts
      .browse({ limit: 10, include: "tags,authors" })
      .then((posts) => {
        setPosts(posts);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  React.useEffect(() => {
    getPost();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: 8,
        flexWrap: "wrap",
      }}
    >
      {posts &&
        posts.map((item) => {
          return <PostCard key={item.id} {...item} />;
        })}
    </div>
  );
};

export default React.memo(PostContainer);
