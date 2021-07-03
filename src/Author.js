import React from "react";

import PostCard from "./PostCard";

import { api } from "./ghostAPI";

import _uniqBy from "lodash/uniqBy";
import _flatten from "lodash/flatten";

const Author = (props) => {
  const [tags, setTags] = React.useState(null);
  const [posts, setPosts] = React.useState(null);
  React.useEffect(() => {
    api.posts
      .browse({ limit: 10, include: "tags,authors" })
      .then((posts) => {
        const _tags = posts && _flatten(posts.map((item) => item.authors));
        setPosts(posts);
        setTags(_tags);
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
        {tags &&
          _uniqBy(tags, "name").map((item) => {
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

export default Author;
