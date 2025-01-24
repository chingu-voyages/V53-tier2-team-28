import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Recipes from "./pages/Recipes";
import RecipePreview from "./UI components/RecipePreview";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="signup" element={<Home />} />
        <Route path="login" element={<Login />} />

        <Route path="recipes" element={<Recipes />} />
        {/*   // ! TESTING PREVIEW */}
        <Route path="recipes/:id" element={<RecipePreview />} />

        {/* <Route path="/child/:id" element={<Child />} />
        <Route path="/child/:id/grand-child" element={<GrandChild />} /> */}

        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
