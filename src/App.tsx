import React, { useState } from "react";
import "./App.scss";
import Item from "./Components/Item";

function App() {
  // segregate colors with render data, as we want to shuffle only for the color
  // and the content will remain the same regardless of which element was clicked
  const [colors, setColors] = useState([
    "#e91e63",
    "#f44336",
    "#3f50b5",
    "#4caf4f",
    "#ff9800",
    "#ff5721",
    "#607d8a",
    "#009688",
    "#673ab6",
  ]);

  const data = [
    {
      id: "one",
      content: 1,
    },
    {
      id: "two",
      content: 2,
    },
    {
      id: "three",
      content: 3,
    },
    {
      id: "four",
      content: 4,
    },
    {
      id: "five",
      content: 5,
    },
    {
      id: "six",
      content: 6,
    },
    {
      id: "seven",
      content: 7,
    },
    {
      id: "eight",
      content: 8,
    },
    {
      id: "nine",
      content: 9,
    },
  ];

  const shuffle = (items: Array<string>) => {
    return items
      .map((item) => ({ value: item, sort: Math.random() }))
      .sort((next, prev) => next.sort - prev.sort)
      .map((item) => item.value);
  };

  const shuffleColors = () => {
    setColors(shuffle(colors));
  };

  return (
    <div className="container">
      <div className="wrapper">
        {data.map((item, key) => (
          <Item
            className={item.id}
            id={item.id}
            key={item.id}
            color={colors[key]}
            handleClick={shuffleColors}
          >
            {item.content}
          </Item>
        ))}
      </div>
    </div>
  );
}

export default App;
