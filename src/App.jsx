import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";

function Home() {
  return <h1>Home Page</h1>;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<Home />} />
        <Route path="login" element={<Login />} />

        {/* // ! examples of child-grandchild routes */}
        {/* <Route path="/child/:id" element={<Child />} />
        <Route path="/child/:id/grand-child" element={<GrandChild />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
