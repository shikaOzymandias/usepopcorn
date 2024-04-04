import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./StarRating";
// import "./index.css";
// import App from "./App";

function Test() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} />
      <p>This is {movieRating} Movie</p>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <StarRating maxRating={10} />
    {/* <StarRating color="red" />
    <StarRating color="pink" size={34} /> */}
    <StarRating
      color="navy"
      size={38}
      message={["shit", "meh", "good", "very nice", "wow"]}
      className=""
    />
    <Test />
    {/* <StarRating defaultDefault={3} color="brown" /> */}
  </React.StrictMode>
);
