export const convertRoles = (roleId) => {
  // console.log("roleid:>", roleId);

  switch (roleId) {
    case "1":
      return "superadmin";
    case "3":
      return "admin";
    case "4":
      return "projectOwner";
    case "5":
      return "agent";
    case "10":
      return "guest";

    default:
      return;
    //   return "guest";
  }
};
// owner 4
// superadmin 1
