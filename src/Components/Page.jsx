import React, { useState, useEffect } from "react";
import "./Dialog.css";

const Dialog = () => {
  const [boxes, setBoxes] = useState([
    { bg: "#" + ((Math.random() * 0xffffff) << 0).toString(16) }
  ]);

  useEffect(() => {
    if (boxes.length < 500) {
      const intervalId = setInterval(() => {
        setBoxes([
          ...boxes,
          { bg: "#" + ((Math.random() * 0xffffff) << 0).toString(16) }
        ]);
      }, 100);
      return () => clearInterval(intervalId);
    }
  }, [boxes]);

  return (
    <div className="hero">
      {boxes.map((box, index) => (
        <div
          style={{
            background: box.bg
          }}
          key={index}
          className="box"
        >
          <p>{index}</p>
        </div>
      ))}
    </div>
  );
};

export default Dialog;
