import { FiTrash2 } from "react-icons/fi";

const Todo = (props) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <span>{props.content}</span>
      <FiTrash2 onClick={props.remove} />
    </div>
  );
};

export default Todo;
