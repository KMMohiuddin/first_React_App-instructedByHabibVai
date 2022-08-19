import React from "react";
import ReactDOM from "react-dom/client";
import videos from "./components/video.component.js";

class videos {
  render() {
    return (
      <>
        {this.state.videos.map((video, index) => {
          return <video content={video.content} />;
        })}
      </>
    );
  }
}
