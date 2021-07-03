import React from "react";

import PostCard from "./PostCard";

import { api } from "./ghostAPI";

import _uniqBy from "lodash/uniqBy";
import _flatten from "lodash/flatten";

const Tag = (props) => {
  const [authors, setAuthors] = React.useState(null);
  const [posts, setPosts] = React.useState(null);
  React.useEffect(() => {
    api.posts
      .browse({ limit: 10, include: "tags,authors" })
      .then((posts) => {
        const _authors = posts && _flatten(posts.map((item) => item.tags));
        setPosts(posts);
        setAuthors(_authors);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div>
      <div
        style={{
          margin: "24px 0",
          display: "flex",
          justifyContent: "center",
          gap: 8,
        }}
      >
        {authors &&
          _uniqBy(authors, "name").map((item) => {
            return (
              <span
                key={item.id}
                style={{
                  backgroundColor: "#2ec4b6",
                  padding: 16,
                  margin: "16px 0",
                  borderRadius: 16,
                  color: "#fff",
                }}
              >
                {item.name}
              </span>
            );
          })}
      </div>

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
    </div>
  );
};

export default Tag;
