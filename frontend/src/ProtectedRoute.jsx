// src/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";

const ProtectedRoute = ({ children }) => {
  const [cookies] = useCookies(["token"]);
  console.log("Auth token from cookies:", cookies.token); // 🔍 Debug log
  return cookies.token ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;















