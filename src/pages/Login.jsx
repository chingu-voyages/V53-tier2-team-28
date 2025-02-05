import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useKeyPress } from "../helpers/useKeyPress";
import SmallSpinner from "../UI components/SmallSpinner";
import { useModalContext } from "../contexts/ModalContext";
import { useManagerContext } from "../contexts/ManagerContext";

function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { isOpenModalLogin, handleCloseAnyModal } = useModalContext();
  const { managerCredentials } = useManagerContext();

  console.log("THESE ARE THE managerCredentials:", managerCredentials);

  function handleLogin(e) {
    if (e) e.preventDefault();

    // Activate loading spinner
    setIsLoading(true);

    setTimeout(() => {
      // Guard clause for invalid credentials
      if (username !== managerCredentials.username) {
        alert("Invalid username");
        setIsLoading(false);
        return;
      } else if (+password !== +managerCredentials.password) {
        alert("Invalid password");
        setIsLoading(false);
        return;
      } else {
        // Successful login
        navigate("/app");
      }

      setIsLoading(false);
    }, 1000);
  }

  useKeyPress("Enter", handleLogin);
  if (!isOpenModalLogin) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-[90%] max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">Log In</h1>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="bg-primary hover:bg-primary-hover text-white font-semibold p-3 rounded-lg transition"
          >
            {isLoading ? <SmallSpinner /> : "Login"}
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

export default Login;
