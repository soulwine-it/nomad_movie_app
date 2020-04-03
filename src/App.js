import React from "react";

const foodILike = [
  {
    id: 1,
    name: "kimchi",
    age: "3"
  },
  {
    id: 2,
    name: "jjajangmyeon",
    age: 5
  },
  {
    id: 3,
    name: "dongas",
    age: 10
  }
];

function Food({ name, age }) {
  return (
    <div>
      <div>I like {name}</div>
      <div>my age is {age}</div>
    </div>
  );
}
// function renderFood(dish) {
//   return <Food name={dish.name} age={dish.age} />;
// }
function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} age={dish.age} />
      ))}
      {/* {foodILike.map(renderFood)} */}
    </div>
  );
}

export default App;
