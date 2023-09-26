import "./App.css";
import CustomCursor from "./component/CustomCursor";
import Header from "./component/Header";
import Intro from "./component/Intro";
import Contact from "./component/Contact";
import ProjectList from "./component/ProjectList";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <CustomCursor />
      <Header />
      <Intro />
      <main>
        <Contact />
        <ProjectList />
      </main>

      <Footer />
    </div>
  );
}

export default App;
