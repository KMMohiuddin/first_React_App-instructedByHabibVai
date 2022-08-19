import React from "react";
import ReactDOM from "react-dom/client";
import bottomNav from "./components/bottomNavbar.component.js";
import topNav from "./components/topNavbar.component.js";
class navbar {
  render() {
    return (
      <>
        <bottomNav />
        <topNav />
      </>
    );
  }
}
