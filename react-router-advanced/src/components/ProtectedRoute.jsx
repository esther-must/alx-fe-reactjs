import { Navigate } from "react-router-dom";
import useAuth from "../useAuth";

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useAuth(); // ✅ Now using useAuth
  
    return isAuthenticated ? children : <Navigate to="/login" replace />;
};
  
export default ProtectedRoute;