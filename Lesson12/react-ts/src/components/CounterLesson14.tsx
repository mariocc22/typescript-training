import React, { useState, useReducer } from "react";

type ChildrenType = {
  children: (num: number) => React.ReactNode;
};

const initState = { count: 0 };

const enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECREMENT,
}

type ReducerAction = {
  type: REDUCER_ACTION_TYPE;
};

const Counter = ({ children }: ChildrenType) => {
  const [count, setCount] = useState<number>(1);

  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);

  return (
    <div>
      <h1>{children(count)}</h1>
      <div>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};

export default Counter;
