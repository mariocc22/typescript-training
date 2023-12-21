import { ReactNode } from "react";

// generic component
interface ListProps<T> {
  items: T[];
  render: (item: T) => ReactNode;
}

// you need to add "," after the generic type so React can recognize it
const List = <T,>({ items, render }: ListProps<T>) => {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{render(item)}</li>
      ))}
    </ul>
  );
};

export default List;
