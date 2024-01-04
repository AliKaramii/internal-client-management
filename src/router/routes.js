import pathes from "./pathes";

// components
import Login from "../pages/login";
import SuperAdminDashboardPage from "../pages/dashboard/super-admin-dashboard";
import QaPage from "../pages/qa";
import SupportPage from "../pages/support";
import ProjectsPage from "../pages/projects";
import ProjectsDetails from "../pages/projects/detail";
import AgentsPage from "../pages/agents";
import NotFoundPage from "../pages/errors/not-found";
import ProjectStatePage from "../pages/project-state";
import FilesPage from "../pages/files";
import FinancialPage from "../pages/financials";
import UsersPage from "../pages/users";
import Signup from "../pages/signup";

export const routesList = [
  {
    name: "SUPERADMINDASHBOARDPAGE",
    path: pathes.SUPERADMINDASHBOARDPAGE,
    component: SuperAdminDashboardPage,
    exact: true,
    authRole: ["superadmin"],
    subRoute: "subroute test",
    title: "داشبورد شرکت",
    icon: "dashboard",
    showInMenu: true,
  },
  {
    name: "AGENTS",
    path: pathes.AGENTS,
    component: AgentsPage,
    exact: true,
    authRole: ["superadmin"],
    title: "کارگزار ها",
    icon: "agents",
    showInMenu: true,
  },
  {
    name: "PROJECTS",
    path: pathes.PROJECTS,
    component: ProjectsPage,
    exact: true,
    authRole: ["superadmin", "admin"],
    title: "پروژه ها",
    icon: "projects",
    showInMenu: true,
  },
  // {
  //   name: "PROJECTSDETAILS",
  //   path: pathes.PROJECTSDETAILS,
  //   component: ProjectsDetails,
  //   exact: true,
  //   authRole: ["superadmin", "admin"],
  //   title: "جزئیات پروژه",
  //   icon: "project-state",
  //   showInMenu: true,
  // },
  {
    name: "USERS",
    path: pathes.USERS,
    component: UsersPage,
    exact: true,
    authRole: ["superadmin"],
    subRoute: "users",
    title: "مدیریت کاربران",
    icon: "users-management",
    showInMenu: true,
  },
  {
    name: "FINANCIAL",
    path: pathes.FINANCIAL,
    component: FinancialPage,
    exact: true,
    // authRole: ["admin"],
    authRole: ["superadmin", "admin"],
    title: "مالی",
    icon: "incom",
    showInMenu: true,
  },
  {
    name: "PROJECTSTATE",
    path: pathes.PROJECTSTATE,
    component: ProjectStatePage,
    exact: true,
    // authRole: ["projectOwner"],
    authRole: ["superadmin", "projectOwner"],
    title: "وضعیت پروژه",
    icon: "project-state",
    showInMenu: true,
  },
  {
    name: "FILES",
    path: pathes.FILES,
    component: FilesPage,
    exact: true,
    // authRole: ["projectOwner"],
    authRole: ["superadmin", "projectOwner"],
    title: "فایل ها",
    icon: "files",
    showInMenu: true,
  },
  {
    name: "SUPPORT",
    path: pathes.SUPPORT,
    component: SupportPage,
    exact: true,
    authRole: ["superadmin", "admin", "projectOwner"],
    title: "پشتیبانی",
    icon: "support",
    showInMenu: true,
  },

  {
    name: "QA",
    path: pathes.QA,
    component: QaPage,
    exact: true,
    authRole: ["superadmin", "admin", "projectOwner"],
    showInMenu: false,
  },
];
export const publicRoutesList = [
  {
    name: "SIGNUP",
    path: pathes.SIGNUP,
    component: Signup,
    exact: true,
    authRole: ["guest"],
    showInMenu: false,
  },
  {
    name: "LOGIN",
    path: pathes.LOGIN,
    component: Login,
    exact: true,
    authRole: ["guest"],
    showInMenu: false,
  },
  {
    name: "NOTFOUND",
    path: pathes.NOTFOUND,
    component: NotFoundPage,
    exact: true,
    authRole: ["guest"],
    showInMenu: false,
  },
];
