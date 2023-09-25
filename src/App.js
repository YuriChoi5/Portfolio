import "./App.css";
import CustomCursor from "./component/CustomCursor";
import Header from "./component/Header";
import Intro from "./component/Intro";
import ProjectList from "./component/ProjectList";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <CustomCursor />
      <Header />
      <Intro />
      <ProjectList />
      <Footer />
    </div>
  );
}

export default App;
