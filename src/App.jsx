import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Dishes from "./pages/Dishes";
import DishPreview from "./UI components/DishPreview";
import Signup from "./pages/Signup";
import AllergiesAndDiet from "./pages/AllergiesAndDiet";
import Employee from "./pages/Employee";
import EditEmployees from "./pages/EditEmployees";
import Manager from "./pages/Manager";
import PlanMeals from "./pages/PlanMeals";
import Favorites from "./pages/Favorites";
import AppLayout from "./UI components/AppLayout";
import { ModalProvider } from "./contexts/ModalContext";
import { AllergyDietProvider } from "./contexts/AllergyDietContext";
import Cal from "./components/MenuCalendar";
// ! TO DECIDE HOW WE'LL KEEP GLOBAL UI STATE (redux? contextAPI?) + URL
// ! TO DECIDE HOW WE'LL KEEP REMOTE STATE (fetchAPI? reactQuery?)

// what is our state? employee list and their allergies, dishes list,

function App() {
  return (
    <Router>
      <ModalProvider>
        <AllergyDietProvider>
          <Routes>
            {/* // ! trying to incorporate Laura's component */}
            <Route path="/" element={<Home />} />
            <Route path="cal" element={<Cal />} />
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />

            {/*  // ! AppLayout component --> once logged in, we'll have a different app layout for managers and different layout for employees.. THIS WILL BE REFLECTED IN THE URL  */}
            <Route path="app" element={<AppLayout />}>
              {/* // ! MANAGER PART OF APP */}
              <Route path="manager" element={<Manager />}>
                <Route path="dishes" element={<Dishes />}>
                  <Route path=":ID" element={<DishPreview />} />
                </Route>
                <Route path="plan-meals" element={<PlanMeals />} />
                <Route path="edit-employees" element={<EditEmployees />} />
              </Route>

              {/* // ! EMPLOYEE PART OF APP */}
              <Route path="employee" element={<Employee />}>
                <Route path="allergies-diet" element={<AllergiesAndDiet />} />
                <Route path="favorites" element={<Favorites />} />
                {/* // ! reuse dishPreview here */}
              </Route>
            </Route>

            <Route path="*" element={<PageNotFound />}></Route>
          </Routes>
        </AllergyDietProvider>
      </ModalProvider>
    </Router>
  );
}

export default App;
