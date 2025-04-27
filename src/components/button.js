import { useState } from "react";
import sunny from "../images/sunny.jpg";
import rainy from "../images/rainy.jpg";
import cloudy from "../images/cloudy.jpg";

const ButtonChanger = () => {
  const [background, setBackground] = useState('url("/src/images/sunny.jpg")');

  const changeBackground = (imageUrl) => {
    setBackground(`url("${imageUrl}")`);
  };

  return (
    <div >
      <h1>Select Weather</h1>
      <button onClick={() => changeBackground(sunny)}>Sunny</button>
      <button onClick={() => changeBackground(rainy)}>Rainy</button>
      <button onClick={() => changeBackground(cloudy)}>Cloudy</button>
    </div>
  );
};

export default ButtonChanger;
