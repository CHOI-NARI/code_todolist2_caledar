import { useState } from "react";
import Todo from "./Todo";

const TodolistInner = () => {
  const [text, setText] = useState("");
  const [list, setList] = useState([]);
  const remove = (i) =>
    setList((prev) => [...prev].filter((v, idx) => idx != i));
  const change = (e) => {
    setText((prev) => e.target.value);
  };
  const click = () => {
    setList((prev) => {
      const a = [...prev, text];
      return a;
    });
  };

  return (
    <article
      style={{
        display: "flex",
        borderRadius: "15px",
        flexDirection: "column",
        gap: "20px",
        backgroundColor: "white",
        width: "320px",
        height: "140px",
        padding: "10px 10px",
        color: "black",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <input
          onChange={change}
          style={{
            width: "250px",
            height: "25px",
          }}
          type="text"
        />
        <button onClick={click} style={{ height: "30px" }}>
          +
        </button>
      </div>
      <div
        style={{
          marginLeft: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {list.map((v, i) => (
          <Todo content={v} remove={() => remove(i)} />
        ))}
      </div>
    </article>
  );
};
export default TodolistInner;
