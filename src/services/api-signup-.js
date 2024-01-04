import toast from "react-hot-toast";
import { setIdtoTable } from "../utils/setColumnToTable";
import { DATA_FETCH_ERROR } from "../utils/messages";

export const userSignUpApiCall = async (inputs) => {
  console.log(inputs);
  const {
    userName,
    firstName,
    lastName,
    password,
    phoneNumber,
    passwordRepeat,
  } = inputs;

  try {
    const response = await fetch("######Authentication/UserSignUp", {
      method: "POST",
      headers: {
        accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userName,
        firstName,
        lastName,
        password,
        phoneNumber,
        passwordRepeat,
        mainRoleGcode: 4,
        // rolesToRegister: [
        //   {
        //     name: "owner22",
        //     gcode: 4,
        //     description: "description1",
        //   },
        // ],
      }),
    });

    if (!response.ok) {
      throw new Error(DATA_FETCH_ERROR);
    }

    toast.success("ثبت نام انجام شد");
  } catch (error) {
    toast.error(error);
  }
};
