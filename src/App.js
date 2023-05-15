import pic from "./computer.jpeg";
import style from "./style.css";
const animation = () => {};
function App() {
  return (
    <div>
      <div id="top-sentence">
        <p>Press This Button For a Suprise!!!</p>
        <p id="top-arrow">^</p>
      </div>

      <button id="button">Press Here!!</button>
      <img id="picture" src={pic} alt="Picture of a mother" />
      <div id="bottom-left-sentence">
        <p>^</p>
        <p>Press This Button For a Suprise!!!</p>
      </div>
      <div>
        <span id="bottom-right-sentence">
          Press This Button For a Suprise!!!
        </span>
        <span>^</span>
      </div>
    </div>
  );
}

export default App;
