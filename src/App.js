import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import { useState } from "react";
import MovieInfo from "./pages/MovieInfo";

function App() {

  const [text, setText] = useState("")

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home text={text} setText={setText} />} />
          <Route path="/movies" element={<Movies text={text} setText={setText} />} />
          <Route path="/movies/:id" element={<MovieInfo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
