import React, { useState } from "react";
import data from "../data";
const Greet = () => {
  const [text, setText] = useState(0);
  const handleClick = () => {
    if (text === data.length - 1) {
      setText(0);
    } else {
      setText(text + 1);
    }
  };
  return (
    <>
      <h1>{data[text]}</h1>

      <button onClick={handleClick}>NEXT GREET</button>
    </>
  );
};
export default Greet;
