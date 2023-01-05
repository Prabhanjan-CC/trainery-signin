import { Navigate } from "react-router-dom";
import Cookies from "universal-cookie";
function PrivateRoute({ children }) {
  const cookies = new Cookies();
  const token = cookies.get("jwt_Auth");
  return token ? children : <Navigate to="/" />;
}

export default PrivateRoute;
