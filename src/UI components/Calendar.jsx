import { useManagerContext } from "../contexts/ManagerContext";
import Week from "./Week";
import Cal from "./Cal";
import { useAllergyDietContext } from "../contexts/AllergyDietContext";

function Calendar() {
  const { weeklyOrMonthly } = useManagerContext();
  const { allDishes } = useManagerContext();
  // const { selectedEmployee } = useAllergyDietContext();

  console.log(allDishes);

  return <div> {weeklyOrMonthly === "Weekly" ? <Week /> : <Cal />}</div>;
}

export default Calendar;
