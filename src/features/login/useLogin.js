import { useMutation, useQueryClient } from "@tanstack/react-query";
import { authApiCall } from "../../services/api-auth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { convertRoles } from "../../utils/convert-roles";
import pathes from "../../router/pathes";
// import toast from "react-hot-toast";

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate: login, isFetching } = useMutation({
    mutationFn: ({ userName, password }) => authApiCall({ userName, password }),
    onSuccess: ({ token, decoded }) => {
      console.log("decoded >", decoded);

      const { MainRole: role } = decoded;
      const roleName = convertRoles(role);

      localStorage.setItem("role", roleName);
      localStorage.setItem("token", token);

      queryClient.setQueryData(["role"], roleName);
      queryClient.setQueryData(["token"], token);

      // toast.success("ورود با موفقیت انجام شد");
      // Todo: navigate to related home page (base on role)
      navigate(pathes.SUPERADMINDASHBOARDPAGE);

      // setTimeout(() => navigate(pathes.SUPERADMINDASHBOARDPAGE), 0);
    },
    onError: (err) => {
      console.log("Error@@@@@@@", err);
      toast.error("نام کاربری یا کلمه عبور اشتباه است");
    },
  });

  return { login, isFetching };
}
