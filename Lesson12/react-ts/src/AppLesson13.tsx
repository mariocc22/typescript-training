import { useState, useEffect, useCallback, MouseEvent, useRef } from "react";

interface User {
  id: number;
  username: string;
}

function AppLesson13() {
  const [count, setCount] = useState<number>(0);
  const [users, setUsers] = useState<User[] | null>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  console.log("inputRef: ", inputRef?.current);
  console.log("inputRef: ", inputRef?.current?.value);

  useEffect(() => {
    console.log("useEffect called");
    console.log("Users: ", users);

    return () => console.log("useEffect cleanup");
  }, [users]);

  const addTwo = useCallback(
    (
      e: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>
    ): void => {
      setCount((count) => count + 2);
    },
    []
  );

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={addTwo}>Add</button>
      <input ref={inputRef} />
    </div>
  );
}
export default AppLesson13;
