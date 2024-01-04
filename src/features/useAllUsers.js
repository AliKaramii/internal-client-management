import { useQuery } from "@tanstack/react-query";
import { allUsersApiCall } from "../services/users/api-users-list";

export function useAllUsers() {
  // const { data: token } = useQuery({
  //   queryKey: ["token"],
  // });

  const token = localStorage.getItem("token");

  const {
    isFetching,
    data: allUsers,
    error,
  } = useQuery({
    queryKey: ["allUsers"],
    queryFn: () => allUsersApiCall(token),
  });

  return { isFetching, error, allUsers };
}
