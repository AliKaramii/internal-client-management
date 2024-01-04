// import toast from "react-hot-toast";
// import { Navigate, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { convertRoles } from "../utils/convert-roles";

// default auth role: guest

export async function authApiCall({ userName, password }) {
  const data = await fetch("######Authentication/Login", {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userName,
      password,
    }),
  });

  const token = await data.json();
  const decoded = jwtDecode(token);
  // localStorage.setItem("role", convertRoles(decoded.Role));

  // console.log("token", token);
  return { token, decoded };
}
