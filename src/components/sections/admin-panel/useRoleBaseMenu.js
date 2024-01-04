export function useRoleBaseMenu(fullMenuList) {
  const role = localStorage.getItem("role");

  const filteredMenuList = fullMenuList.filter((route) =>
    route.authRole.includes(role)
  );

  console.log(fullMenuList, filteredMenuList);
  return { filteredMenuList };
}
