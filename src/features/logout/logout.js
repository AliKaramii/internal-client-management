import { useNavigate } from "react-router-dom";
import pathes from "../../router/pathes";

export function logout() {
  console.log("useLogout");
  localStorage.removeItem("token");
  // const navigate = useNavigate();
  // navigate(pathes.LOGIN);
  return null;
}
