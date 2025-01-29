function Signup() {
  return (
    <div className="signup-modal">
      <h2 className=" text-7xl font-bold text-black mx-auto">Planner Signup</h2>
      <input type="text" placeholder="Company Name"></input>
      <select name="Dietary Prefences" placeholder="Dietary Preferences">
        <option value="none">None</option>
        <option value="vegan">Vegan</option>
        <option value="vegetarian">Vegetarian</option>
        <option value="pescetarian">Pescetarian</option>
        <option value="more protein">More Protein</option>
        <option value="heart healthy">Heart Healthy</option>
      </select>
      <select name="Allergies" placeholder="Allergies">
        <option value="none">None</option>
        <option value="nut">Nut Allergy</option>
      </select>
      <button>Submit</button>
    </div>
  );
}

export default Signup;
