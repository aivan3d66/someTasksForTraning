import {useState} from "react";
import "../../MyApp.scss";

type PropsType = {
  defaultValue?: 0 | 1 | 2 | 3 | 4 | 5
}

function UncontrolledRating(props: PropsType) {
  const [rating, setRating] = useState<number>(props.defaultValue ? props.defaultValue : 0);
  const [hover, setHover] = useState<number>(0);
  console.log("Rating rendering");
  return (
    <div className="rating-list">
      <h4>Rate the poem</h4>
      {[...Array(5)].map((star: number, index: number) => {
        index += 1;
        return (
          <button
            key={index}
            className={index <= (hover || rating) ? "on" : "off"}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}>
            <span className="star">&#9733;</span>
          </button>
        )
      })}
    </div>
  )
}

export default UncontrolledRating;
