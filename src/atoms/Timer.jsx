import { useEffect, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState("");

  const today = new Date().toLocaleDateString();

  useEffect(() => {
    setInterval(() => {
      const time = new Date().toLocaleTimeString();
      setTime(time);
    }, 1000);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        width: "450px",
        height: "160px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "25px",
        color: "white",
      }}
    >
      <div>{today}</div>
      <div>{time}</div>
    </div>
  );
};

export default Timer;
