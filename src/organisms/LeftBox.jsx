import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import TopsideBox from "../molecules/TopsideBox";
import TodolistBox from "../molecules/TodolistBox";
import TimerBox from "../molecules/TimerBox";

const LeftBox = () => {
  return (
    <div
      style={{
        borderRadius: "15px",
        backgroundColor: "rgb(229, 224, 218, 1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "15px",
        padding: "20px",
        width: "350px",
        height: "800px",
      }}
    >
      <TopsideBox />
      <TimerBox />
      <Calendar />
      <TodolistBox />
    </div>
  );
};

export default LeftBox;
