import React from "react";
import "./home.css";
import Content from "../data/Content";

export default function Home() {
  return (
    <React.Fragment>
      <div className="header">
        <h4>Home</h4>
        <h4>About</h4>
        <h4>Contact</h4>
        <h4>Products</h4>
      </div>
      <div className="content">
        <Content />
      </div>
    </React.Fragment>
  );
}
