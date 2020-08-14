import React, { useState, useEffect } from "react";
import "./App.scss";
import axios from "axios";

function App() {
  useEffect(() => {
    const url =
      "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=ReactJS&type=video&key=AIzaSyAtXPOzrW1APY4Jqk6LICXECfKoWhYZp-g";

    // axios
    //   .get(url)
    //   .then((data) => {
    //     window.youtubeData = data;
    //     console.log(data);
    //   })
    //   .catch((err) => console.log(err));
  }, []);
  return <div className="App">Youtube Clone</div>;
}

export default App;
