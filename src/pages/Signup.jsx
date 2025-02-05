import { useEffect, useState } from "react";
import { useAllergyDietContext } from "../contexts/AllergyDietContext";
import { useModalContext } from "../contexts/ModalContext";
import { useLocalStorage } from "../helpers/useLocalStorage";
import { useManagerContext } from "../contexts/ManagerContext";

function Signup() {
  const { isOpenModalSignup, handleCloseAnyModal } = useModalContext();
  const {
    employeeDietAndAllergies,
    setEmployeeDietAndAllergies,
    employeeList,
  } = useAllergyDietContext();

  const { dietaryOptions, allergyOptions } = useManagerContext();

  const [selectedName, setSelectedName] = useState(employeeList[0] || "");
  const [selectedDiets, setSelectedDiets] = useState([]);
  const [selectedAllergies, setSelectedAllergies] = useState([]);

  console.log(employeeDietAndAllergies);

  function handleCheckboxChange(setState, value) {
    setState((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  }

  function handleSubmit(e) {
    e.preventDefault();

    //  find employee object within the array
    const employeeObject = employeeDietAndAllergies.find(
      (employee) => employee.name === selectedName
    );

    // Update the state with the new data
    // ! I WAS HERE!! IT'S MAKING DUPLICATES INSTEAD OF JUST MODIFYING THE EXISTING OBJECT
    setEmployeeDietAndAllergies((prev) => [
      ...prev,
      {
        ...employeeObject,
        diet: selectedDiets,
        allergies: selectedAllergies,
      },
    ]);

    // update local storage
    // useEffect(() => {
    //   useLocalStorage(employeeDietAndAllergies, "employeePreferences");
    // }, [employeeDietAndAllergies]);

    // Close modal after submission
    handleCloseAnyModal();
  }

  if (!isOpenModalSignup) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-[90%] max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6">Sign Up</h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          {/* Name Selection */}
          <fieldset className="border border-gray-300 rounded-lg p-3">
            <legend className="text-sm font-semibold">Your Name</legend>
            <select
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none"
              value={selectedName}
              onChange={(e) => setSelectedName(e.target.value)}
            >
              {employeeList.map((employee) => (
                <option key={employee} value={employee}>
                  {employee}
                </option>
              ))}
            </select>
          </fieldset>

          {/* Dietary Preferences */}
          <fieldset className="border border-gray-300 rounded-lg p-3">
            <legend className="text-sm font-semibold">
              Dietary Preferences
            </legend>
            <div className="flex flex-col gap-2 mt-2">
              {dietaryOptions.map((diet) => (
                <label key={diet} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedDiets.includes(diet)}
                    onChange={() =>
                      handleCheckboxChange(setSelectedDiets, diet)
                    }
                  />
                  {diet}
                </label>
              ))}
            </div>
          </fieldset>

          {/* Allergies */}
          <fieldset className="border border-gray-300 rounded-lg p-3">
            <legend className="text-sm font-semibold">Allergies</legend>
            <div className="flex flex-col gap-2 mt-2">
              {allergyOptions.map((allergy) => (
                <label key={allergy} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    checked={selectedAllergies.includes(allergy)}
                    onChange={() =>
                      handleCheckboxChange(setSelectedAllergies, allergy)
                    }
                  />
                  {allergy}
                </label>
              ))}
            </div>
          </fieldset>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-primary hover:bg-primary-hover text-white font-semibold p-3 rounded-lg transition"
          >
            Submit
          </button>
        </form>

        {/* Close Button */}
        <button
          className="mt-4 text-gray-500 hover:text-gray-700"
          onClick={handleCloseAnyModal}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Signup;
