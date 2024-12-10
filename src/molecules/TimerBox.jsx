import Timer from "../atoms/Timer";

const TimerBox = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "10px",
        gap: "20px",
        borderRadius: "15px",
        backgroundColor: "black",
        width: "330px",
        height: "80px",
        padding: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
      >
        <Timer />
      </div>
    </div>
  );
};

export default TimerBox;
