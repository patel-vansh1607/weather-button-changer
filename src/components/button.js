import { useState } from "react";
import sunny from "../images/sunny.jpg";
import rainy from "../images/rainy.jpg";
import cloudy from "../images/cloudy.jpg";
import thunderStorm from "../images/thunderstorm.jpeg"

const ButtonChanger = () => {
  const [background, setBackground] = useState('url("/src/images/sunny.jpg")');

  const changeBackground = (imageUrl) => {
    setBackground(`url("${imageUrl}")`);
  };

  return (
    <div 
    style={{
        backgroundImage: background,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '20px'
      }}
        >
      <h1>Select Weather</h1>
      <button onClick={() => changeBackground(sunny)}>Sunny</button>
      <button onClick={() => changeBackground(rainy)}>Rainy</button>
      <button onClick={() => changeBackground(cloudy)}>Cloudy</button>
      <button onClick={() => changeBackground(thunderStorm)}>ThunderStorm</button>
    </div>
  );
};

export default ButtonChanger;
