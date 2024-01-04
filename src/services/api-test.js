// * send role in payload

import toast from "react-hot-toast";

// from admin
export async function registerUser() {
  const data = await fetch("######Authentication/UserSignUp", {
    method: "POST",
    headers: {
      accept: "text/plain",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userName: "owner2",
      firstName: "f owner2",
      lastName: "l owner2",
      password: "123",
      passwordRepeat: "123",
      mainRoleGcode: "4",
      rolesToRegister: [
        {
          name: "owner2",
          gcode: 4,
          description: "owner2 desc",
        },
      ],
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("data@", data);
    })
    .catch((error) => {
      console.error(error);
    });

  console.log("data>>>", data);
}

export async function userSignUp(inputs) {
  const {
    userName,
    firstName,
    lastName,
    password,
    passwordRepeat,
    mainRoleGcode = 4,
  } = inputs;
  const data = await fetch("######Authentication/UserSignUp", {
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
      passwordRepeat,
      mainRoleGcode,
      // rolesToRegister: [
      //   {
      //     name: "owner22",
      //     gcode: 4,
      //     description: "description1",
      //   },
      // ],
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("userSignUp response >", data);
      toast.success("ثبت نام انجام شد");
    })
    .catch((error) => {
      console.error(error);
      toast.error(error);
    });

  console.log("data>>>", data);
}

export async function testProjects(token) {
  console.log(token);
  const data = await fetch("######Projects/BindProjectsAdmin", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      accept: "application/json",
      "Content-Type": "application/json",
    },
    // body: JSON.stringify({
    //   userName: "owner22",
    //   // firstName: "projectOwner",
    //   // lastName: "lastName4",
    //   password: "123",
    //   passwordRepeat: "123",
    //   mainRoleGcode: "4",
    //   rolesToRegister: [
    //     {
    //       name: "owner22",
    //       gcode: 4,
    //       description: "description1",
    //     },
    // ],
    // }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("#%%%%%%%%%project test res >", data);
    })
    .catch((error) => {
      console.error("#%%%%%%%%project test res error", error);
    });
  console.log("project test res ))))))>>>", data);
  return data;
}
export async function testAgents(token) {
  console.log(token);
  const data = await fetch("######Users/BindAgents", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      accept: "application/json",
      "Content-Type": "application/json",
    },
    // body: JSON.stringify({
    //   userName: "owner22",
    //   // firstName: "projectOwner",
    //   // lastName: "lastName4",
    //   password: "123",
    //   passwordRepeat: "123",
    //   mainRoleGcode: "4",
    //   rolesToRegister: [
    //     {
    //       name: "owner22",
    //       gcode: 4,
    //       description: "description1",
    //     },
    // ],
    // }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("#%%%%%%%%%Agents test res >", data);
    })
    .catch((error) => {
      console.error("#%%%%%%%%Agents test res error", error);
    });
  console.log("Agents test res ))))))>>>", data);
  return data;
}
