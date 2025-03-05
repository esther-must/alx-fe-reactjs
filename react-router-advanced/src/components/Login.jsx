import { useNavigate } from "react-router-dom";
import auth from "../auth";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    auth.login(() => navigate("/profile"));
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
