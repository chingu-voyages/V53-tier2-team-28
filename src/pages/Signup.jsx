function Signup () {
    return (
        <div>
            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h1 className="block text-xl/7 font-large text-black mx-auto">Planner Signup</h1>
                <input type="text" placeholder="Company Name"></input>
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-dietary-preferences">
                Dietary Preferences:</label>
                <select name="Dietary Prefences" placeholder="Dietary Preferences">
                    <option value="none">None</option>
                    <option value="vegan">Vegan</option>
                    <option value="vegetarian">Vegetarian</option>
                    <option value ="pescetarian">Pescetarian</option>
                    <option value ="more protein">More Protein</option>
                    <option value ="heart healthy">Heart Healthy</option>
                </select>
                <label for="dietary preferences">Allergies:</label>
                <select name="Allergies" placeholder="Allergies">
                    <option value ="none">None</option>
                    <option value = "nut">Nut Allergy</option>
                </select>
                <button>Submit</button>
            </form>
        </div>);    
}

