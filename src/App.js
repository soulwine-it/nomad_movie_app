import React from "react";

function Food({ name, age }) {
  return (
    <div>
      <div>I like {name}</div>
      <div>I like {age}</div>
    </div>
  );
}
const foodILike = [
  {
    name: "kimchi",
    age: "3"
  },
  {
    name: "jjajangmyeon",
    age: 5
  },
  {
    name: "dongas",
    age: 10
  }
];

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food name={dish.name} age={dish.age} />
      ))}
    </div>
  );
}

export default App;
