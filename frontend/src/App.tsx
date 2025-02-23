import "./App.css";
import './index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage"
import Header from "./components/header/header"
import Footer from "./components/layouts/footer/footer";

function App() {
  return (
    <div className="">
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />

      </Routes>
      <Footer/>
    </Router>
    </div>

  );
}

export default App;
