import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Recipes from "./pages/Recipes";
import RecipePreview from "./UI components/RecipePreview";
import Signup from "./pages/Signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<Signup />} />
        <Route path="login" element={<Login />} />

        <Route path="recipes" element={<Recipes />}>
          <Route path=":id" element={<RecipePreview />} />
        </Route>

        {/* <Route path="/child/:id" element={<Child />} />
        <Route path="/child/:id/grand-child" element={<GrandChild />} /> */}

        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
