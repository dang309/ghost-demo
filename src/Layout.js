import React from "react";

import Nav from "./Nav";
import PostContainer from "./PostContainer";
import Tag from "./Tag";
import Author from "./Author";

import { Switch, Route } from "react-router-dom";

const Layout = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Nav />
      <Switch>
        <Route exact path="/" component={PostContainer} />
        <Route exact path="/tag" component={Tag} />
        <Route exact path="/author" component={Author} />
      </Switch>
    </div>
  );
};

export default Layout;
