import { useEffect, useState } from "react";

const Weather = () => {
  const [weather, setWeather] = useState("");
  const [temp, setTemp] = useState("");
  const API_KEY = "3af745e55c0152da567c5ffd089f9e00";
  const lon = 126.705;
  const lat = 37.456;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((date) => {
        setTemp((prev) => date.main.feels_like);
        setWeather((prev) => date.weather[0].main);
      });
  }, []);

  return (
    <div
      style={{
        borderRadius: "15px",
        width: "150px",
        height: "80px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        fontSize: "14px",
      }}
    >
      <p style={{ margin: "0px" }}>날씨 : {weather}</p>
      <p style={{ margin: "0px" }}>기온 : {temp} ˚</p>
    </div>
  );
};

export default Weather;
