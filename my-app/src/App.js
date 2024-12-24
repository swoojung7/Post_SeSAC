import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home"
import Counter from "./pages/Counter"

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link> | <Link to="/counter">Counter</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home name="Post_SeSAC"/>} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </div>
  );
  // <Home name='Post_SeSAC'/>;
}

export default App;