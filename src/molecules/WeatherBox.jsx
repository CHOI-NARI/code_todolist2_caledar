import Weather from "../atoms/Weather";

const NameBox = () => {
  return (
    <div
      style={{
        backgroundImage: "url('balloon.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundColor: "white",
        borderRadius: "15px",
        width: "150px",
        height: "125px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        paddingTop: "10px",
        color: "white",
      }}
    >
      <span style={{ fontSize: "13px", fontWeight: "bold" }}>
        Today's Weather
      </span>
      <span style={{ fontSize: "13px" }}>──────────</span>
      <Weather />
    </div>
  );
};

export default NameBox;
