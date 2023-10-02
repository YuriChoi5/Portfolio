import "./App.css";
import { Routes, Route } from "react-router-dom";
import CustomCursor from "./component/CustomCursor";
import Header from "./component/Header";
import Main from "./pages/Main";
import Project1 from "./pages/Project1";
import Project2 from "./pages/Project2";
import Project3 from "./pages/Project3";
import Project4 from "./pages/Project4";
import Footer from "./component/Footer";


function App() {
  return (
    <div className="App">
      <CustomCursor />
      {/* <Header /> */}

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="project/p1" element={<Project1 />} />
        <Route path="project/p2" element={<Project2 />} />
        <Route path="project/p3" element={<Project3 />} />
        <Route path="project/p4" element={<Project4 />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
