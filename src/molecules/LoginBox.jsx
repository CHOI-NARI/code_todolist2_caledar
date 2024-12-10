import Login from "../atoms/Login";

const LoginBox = () => {
  return (
    <div
      style={{
        borderRadius: "15px",
        width: "150px",
        height: "125px",
        backgroundColor: "white",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "10px",
        fontWeight: "bold",
      }}
    >
      <span style={{ fontSize: "13px" }}>YOUR NAME</span>
      <span style={{ fontSize: "13px" }}>──────────</span>
      <Login />
    </div>
  );
};

export default LoginBox;
