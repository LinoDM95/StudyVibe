import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Pages
import Homepage from "./pages/homepage";
import AllLearningPaths from "./pages/all_learning_paths";
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
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
