import React from "react";

import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: 16,
        margin: "16px 0",
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/tag">Tag</Link>
      <Link to="/author">Author</Link>
    </div>
  );
};

export default Nav;
