import toast from "react-hot-toast";
import { setIdtoTable } from "../utils/setColumnToTable";
import { DATA_FETCH_ERROR } from "../utils/messages";

export const allProjectsApiCall = async (token) => {
  try {
    const response = await fetch("######Projects/BindProjectsAdmin", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(DATA_FETCH_ERROR);
    }
    const { data } = await response.json();
    const allProjectsWithId = setIdtoTable(data);

    return allProjectsWithId;
  } catch (error) {
    toast.error(error);
  }
};
