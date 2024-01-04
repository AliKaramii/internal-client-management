import { useQuery } from "@tanstack/react-query";
import { allProjectsApiCall } from "../services/api-projectss-list";

export function useAllProjects() {
  // const { data: token } = useQuery({
  //   queryKey: ["token"],
  // });

  const token = localStorage.getItem("token");

  const {
    isFetching,
    data: allProjects,
    error,
  } = useQuery({
    queryKey: ["allProjects"],
    queryFn: () => allProjectsApiCall(token),
  });
  console.log("is:", isFetching);
  return { isFetching, allProjects, error };
}
