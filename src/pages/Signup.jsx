import { useModalContext } from "../contexts/ModalContext";

function Signup() {
  const { isOpenModalSignup, handleCloseAnyModal } = useModalContext();

  if (!isOpenModalSignup) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-[90%] max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6">Sign Up</h2>
        <form className="flex flex-col gap-4">
          <input
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none"
            type="text"
            placeholder="Company Name"
          />
          <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none">
            <option value="none">Dietary Preferences</option>
            <option value="vegan">Vegan</option>
            <option value="vegetarian">Vegetarian</option>
            <option value="pescetarian">Pescetarian</option>
            <option value="protein">More Protein</option>
            <option value="heart">Heart Healthy</option>
          </select>
          <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none">
            <option value="none">Allergies</option>
            <option value="nut">Nut Allergy</option>
          </select>
          <button
            type="submit"
            className="bg-primary hover:bg-primary-hover text-white font-semibold p-3 rounded-lg transition"
          >
            Submit
          </button>
        </form>
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
