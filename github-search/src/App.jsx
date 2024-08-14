import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SingleProfile from "./pages/SingleProfile";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/:id" element={<SingleProfile />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
