import React, { useMemo } from "react";
import classes from "./DemoList.module.css";

export default function DemoList({ title, items }) {
  const sortedList = useMemo(() => items.sort((a, b) => a - b), [items]);
  return (
    <div className={classes.list}>
      <h2>{title}</h2>
      <ul>
        {sortedList.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
