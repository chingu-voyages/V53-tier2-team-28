import { useManagerContext } from "../contexts/ManagerContext";
import Week from "./Week";
import Cal from "./Cal";
import { useAllergyDietContext } from "../contexts/AllergyDietContext";

function Calendar() {
  const { weeklyOrMonthly } = useManagerContext();

  const { selectedEmployee } = useAllergyDietContext();

  if (!selectedEmployee) return;

  return <div> {weeklyOrMonthly === "Weekly" ? <Week /> : <Cal />}</div>;
}

export default Calendar;
