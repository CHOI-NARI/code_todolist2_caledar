import LeftBox from "../organisms/LeftBox";
import RightBox from "../organisms/RightBox";

function App() {
  return (
    <div className="App">
      <div style={{ display: "flex" }}>
        <LeftBox />
        <RightBox />
      </div>
    </div>
  );
}

export default App;
