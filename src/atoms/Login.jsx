import { useEffect, useState } from "react";

const Login = () => {
  const [name, setName] = useState("guest");

  useEffect(() => {
    const userName = prompt("당신의 이름을 입력하세요") || "Guest";
    setName(userName);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        paddingTop: "10px",
      }}
    >
      <span style={{ fontSize: "13px" }}>{name}님, 안녕하세요</span>
      <button
        style={{
          width: "80px",
          backgroundColor: "white",
        }}
      >
        LOGOUT
      </button>
    </div>
  );
};

export default Login;
