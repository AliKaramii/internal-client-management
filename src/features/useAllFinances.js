import { useQuery } from "@tanstack/react-query";
import { allFinancialsApiCall } from "../services/api-financials-list";

export function useAllFinancials() {
  // const { data: token2 } = useQuery({
  //   queryKey: ["token"],
  // });

  const token = localStorage.getItem("token");

  const {
    isFetching,
    data: allFinancials,
    error,
  } = useQuery({
    queryKey: ["allFinancials"],
    queryFn: () => allFinancialsApiCall(token),
  });

  return { isFetching, error, allFinancials };
}
