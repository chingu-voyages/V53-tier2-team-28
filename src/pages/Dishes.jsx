import { NavLink, Outlet } from "react-router-dom";
import { useDishesContext } from "../contexts/DishesContext";

function Dishes() {
  // ! double-check this implementation
  const { dishes } = useDishesContext();

  // ! features we need: VIEW, EDIT (add, remove...) and PREVIEW available dishes

  return (
    <div>
      <h1>Dishes</h1>
      {dishes.map((dish) => (
        <div key={dish.ID}>
          <NavLink to={`/dishes/${dish.ID}`}>{dish.name}</NavLink>
        </div>
      ))}

      <Outlet />
    </div>
  );
}

export default Dishes;
