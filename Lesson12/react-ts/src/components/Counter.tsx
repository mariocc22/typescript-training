import React from "react";

type CounterProps = {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  children: React.ReactNode;
};

const Counter = ({ setCount, children }: CounterProps) => {
  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => c - 1);

  return (
    <div>
      <h1>{children}</h1>
      <div>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};

export default Counter;
