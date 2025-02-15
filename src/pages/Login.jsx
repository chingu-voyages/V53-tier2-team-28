import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useKeyPress } from "../helpers/useKeyPress";
import { useModalContext } from "../contexts/ModalContext";
import { useManagerContext } from "../contexts/ManagerContext";
import Button from "../UI components/Button";

function Login() {
  const [username, setUsername] = useState("manager");
  const [password, setPassword] = useState("1234");

  const navigate = useNavigate();
  const { isOpenModalLogin, handleCloseAnyModal } = useModalContext();
  const { managerCredentials } = useManagerContext();

  console.log("THESE ARE THE managerCredentials:", managerCredentials);

  const handleLogin = useCallback(
    (e) => {
      if (e) e.preventDefault();

      if (
        !managerCredentials ||
        !managerCredentials.username ||
        !managerCredentials.password
      ) {
        alert("Manager credentials not set.");
        return;
      }

      setTimeout(() => {
        if (username !== managerCredentials.username) {
          alert("Invalid username");
          return;
        } else if (+password !== +managerCredentials.password) {
          alert("Invalid password");
          return;
        } else {
          navigate("/app");
        }
      }, 500);
      console.log("handleLogin finished... ");
    },
    [username, password, managerCredentials, navigate]
  );

  useKeyPress("Enter", handleLogin);
  if (!isOpenModalLogin) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-[90%] max-w-md flex flex-col gap-2">
        <button
          className=" text-gray-500 hover:text-gray-700 self-end"
          onClick={handleCloseAnyModal}
        >
          Close
        </button>
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
          <Button
            type="submit"
            variation="login/submit"
            className=" font-semibold p-3 rounded-lg transition mt-5"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
