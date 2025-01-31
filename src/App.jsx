import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";

import Signup from "./pages/Signup";

import AppLayout from "./UI components/AppLayout";
import { ModalProvider } from "./contexts/ModalContext";
import { AllergyDietProvider } from "./contexts/AllergyDietContext";

// ! TO DECIDE HOW WE'LL KEEP GLOBAL UI STATE (contextAPI?) + URL
// ! TO DECIDE HOW WE'LL KEEP REMOTE STATE (fetchAPI!?) + URL

// what is our state? employee list and their allergies, dishes list,

function App() {
  return (
    <Router>
      <ModalProvider>
        <AllergyDietProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />

            <Route path="app" element={<AppLayout />}></Route>

            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
        </AllergyDietProvider>
      </ModalProvider>
    </Router>
  );
}

export default App;
