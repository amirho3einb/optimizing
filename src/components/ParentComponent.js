import React, { useState } from "react";
import Button from "./Button";
import Count from "./Count";
import Title from "./Title";

const ParentComponent = () => {
  const [age, setAge] = useState(0);
  const [score, setScore] = useState(0);

  const ageHandler = () => {
    setAge(age + 1);
  };
  const scoreHandler = () => {
    setScore(score + 1);
  };
  return (
    <div>
      <Title />
      <Count text="age" count={age} />
      <Button handleClick={ageHandler}>Age</Button>
      <Count text="score" count={score} />
      <Button handleClick={scoreHandler}>Score</Button>
    </div>
  );
};

export default ParentComponent;
