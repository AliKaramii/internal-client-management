import { useQuery } from "@tanstack/react-query";
import { allAgentsApiCall } from "../services/api-agents-list";

export function useAllAgents() {
  // const { data: token2 } = useQuery({
  //   queryKey: ["token"],
  // });

  const token = localStorage.getItem("token");

  const {
    isFetching,
    data: allAgents,
    error,
  } = useQuery({
    queryKey: ["allAgents"],
    queryFn: () => allAgentsApiCall(token),
  });
  return { isFetching, error, allAgents };
}
