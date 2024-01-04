import toast from "react-hot-toast";
import { DATA_FETCH_ERROR } from "../../utils/messages";
import { setIdtoTable } from "../../utils/setColumnToTable";

export const allUsersApiCall = async (token) => {
  try {
    const response = await fetch("######Users/BindUsers", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error(DATA_FETCH_ERROR);
    }
    const allUsers = await response.json();
    const allUsersWithId = setIdtoTable(allUsers);

    return allUsersWithId;
  } catch (error) {
    toast.error(error);
  }
};
