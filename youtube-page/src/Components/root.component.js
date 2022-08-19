import React from "react";
import ReactDOM from "react-dom/client";
import navbar from "./components/navbar.component.js";
import leftNav from "./components/leftNavbar.component.js";
import videos from "./components/videos.component.js";

class Root {
  render() {
    return (
      <>
        <navbar />
        <leftNav />
        <videos />
      </>
    );
  }
}
