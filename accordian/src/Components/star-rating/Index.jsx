import { useState } from "react";
import { FaStar } from "react-icons/fa";
import styles from "./style.css";

export default function StarRating({ noOfStars = 5 }) {
  const [rating, setRating] = useState();
  const [hover, sethover] = useState();

  function handleClick(getCurrentIndexId) {
    setRating(getCurrentIndexId);
  }
  function handleMouseEnter(getCurrentIndexId) {
    sethover(getCurrentIndexId);
  }
  function handleMouseLeave() {
    sethover(rating);
  }
  return (
    <div>
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;

        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "active" : "inactive"}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            size={40}
          />
        );
      })}
    </div>
  );
}
