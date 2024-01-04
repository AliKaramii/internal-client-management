import toast from "react-hot-toast";
import { DATA_FETCH_ERROR } from "../utils/messages";
import { setIdtoTable } from "../utils/setColumnToTable";

export const allAgentsApiCall = async (token) => {
  try {
    const response = await fetch("######Users/BindUsers", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(DATA_FETCH_ERROR);
    }
    const allAgents = await response.json();
    const allAgentsWithId = setIdtoTable(allAgents);

    return allAgentsWithId;
  } catch (error) {
    toast.error(error);
  }
};
