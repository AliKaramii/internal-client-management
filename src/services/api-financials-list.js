import toast from "react-hot-toast";
import { setIdtoTable } from "../utils/setColumnToTable";
import { DATA_FETCH_ERROR } from "../utils/messages";

export const allFinancialsApiCall = async (token) => {
  try {
    const response = await fetch("######Finance/FinanceBindGrid", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(DATA_FETCH_ERROR);
    }
    const { data } = await response.json();
    const allFinancialsWithId = setIdtoTable(data);

    return allFinancialsWithId;
  } catch (error) {
    toast.error(error);
  }
};
