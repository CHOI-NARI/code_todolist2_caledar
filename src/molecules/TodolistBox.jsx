import TodolistInner from "../atoms/TodolistInner";

const TodolistBox = () => {
  return (
    <div
      style={{
        backgroundColor: "black",
        width: "350px",
        height: "270px",
        borderRadius: "15px",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "5px 5px",
        gap: "10px",
        fontSize: "13px",
      }}
    >
      <span>TO DO LIST</span>
      <TodolistInner />
    </div>
  );
};

export default TodolistBox;
