import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LearningPathExample from "./pages/single_learning_path_example";
//Pages
import Homepage from "./pages/homepage";
import AllLearningPaths from "./pages/all_learning_paths";
import AllCourses from "./pages/all_courses";
import OOPS from "./pages/oops";
//Provider

//Components
import Header from "./components/header/header";
import Footer from "./components/layouts/footer/footer";

function App() {
  return (
    <div className="">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/all-learning-paths" element={<AllLearningPaths />} />
          <Route
            path="/learningpath-example"
            element={<LearningPathExample />}
          />
          <Route path="/all-courses" element={<AllCourses />} />
          <Route path="/oops" element={<OOPS />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
