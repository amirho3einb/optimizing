import React, { useMemo, useState } from "react";

const Counter = () => {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(2);

  const incAHandler = () => {
    setCountA(countA + 1);
  };

  const incBHandler = () => {
    setCountB(countB + 2);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return countA % 2 === 0;
  }, [countA]);
  return (
    <div>
      <div>
        <button onClick={incAHandler}>count a: - {countA}</button>
        <span>{isEven ? "even" : "odd"}</span>
      </div>
      <div>
        <button onClick={incBHandler}>count b: - {countB}</button>
      </div>
    </div>
  );
};

export default Counter;

// useCallback return => function

// useMemo return => value
