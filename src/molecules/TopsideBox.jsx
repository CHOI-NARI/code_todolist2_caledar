import WeatherBox from "./WeatherBox";
import LoginBox from "./LoginBox";

const TopsideBox = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "30px",
      }}
    >
      <LoginBox />
      <WeatherBox />
    </div>
  );
};

export default TopsideBox;
