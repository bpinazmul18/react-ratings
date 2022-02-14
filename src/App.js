import { FaStar } from "react-icons/fa";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

export default function App() {
  const [cValue, setCValue] = useState(0);
  const [hValue, setHValue] = useState(undefined);
  const stars = Array(5).fill(0);

  return (
    <div className="App">
      <h2>React ratings</h2>
      <div className="rating-wrapper">
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={24}
              color={(hValue || cValue) > index ? "orange" : "black"}
              onClick={() => setCValue(index + 1)}
              onMouseOver={() => setHValue(index + 1)}
              onMouseLeave={() => setHValue(undefined)}
              style={{ cursor: "pointer" }}
            />
          );
        })}
      </div>
    </div>
  );
}
