import Counter from "./components/CounterLesson14";

function AppLesson14() {
  return (
    <>
      <Counter>{(num: number) => <>Current count: {num}</>}</Counter>
    </>
  );
}

export default AppLesson14;
