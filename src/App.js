import React from "react";
import PropTypes from "prop-types";
const foodILike = [
  {
    id: 1,
    name: "kimchi",
    age: "3",
    rating: 5
  },
  {
    id: 2,
    name: "jjajangmyeon",
    age: 5,
    rating: 4
  },
  {
    id: 3,
    name: "dongas",
    age: 10,
    rating: 3
  }
];

function Food({ name, age, rating }) {
  return (
    <div>
      <div>I like {name}</div>
      <div>i recommend that this {rating}/5.0 score</div>
      <div>my age is {age}</div>
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired
};

// function renderFood(dish) {
//   return <Food name={dish.name} age={dish.age} />;
// }
function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food
          key={dish.id}
          name={dish.name}
          age={dish.age}
          rating={dish.rating}
        />
      ))}
      {/* {foodILike.map(renderFood)} */}
    </div>
  );
}

export default App;
