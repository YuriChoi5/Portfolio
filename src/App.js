import "./App.css";
import CustomCursor from "./component/CustomCursor";

function App() {
  return (
    <div className="App">
      <CustomCursor />
      <ul className="project-container">
        <li>
          <div class="image-container">
            <img src="/img/pepe.png" alt="" class="zoom-image"></img>
          </div>
          <h2>Project 1</h2>
          <p>hfktfkydkh</p>
        </li>
        <li>
          <div class="image-container">
            <img src="/img/pepe.png" alt="" class="zoom-image"></img>
          </div>
          <h2>Project 2</h2>
        </li>
        <li>
          <div class="image-container">
            <img src="/img/pepe.png" alt="" class="zoom-image"></img>
          </div>
          <h2>Project 3</h2>
        </li>
        <li>
          <div class="image-container">
            <img src="/img/pepe.png" alt="" class="zoom-image"></img>
          </div>
          <h2>Project 4</h2>
        </li>
      </ul>
    </div>
  );
}

export default App;
