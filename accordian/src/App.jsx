import { useState } from "react";
import Accordian from "./Components/accordian";
import RandomColour from "./Components/accordian/Random clr generator/Index";
import StarRating from "./Components/star-rating/Index";
import ImageSlider from "./Components/image slider/Index";

function App() {
  return (
    <div className="App">
      {/* <Accordian /> */}
      {/* <RandomColour /> */}
      {/* <StarRating noOfStars={10} /> */}
      <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      />
    </div>
  );
}

export default App;
