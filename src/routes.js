
import Dashboard from "views/Dashboard.jsx";
import UserProfile from "views/UserProfile.jsx";
import TableList from "views/TableList.jsx";
import Typography from "views/Typography.jsx";
import Icons from "views/Icons.jsx";
//import Maps from "views/Maps.jsx";
//import Notifications from "views/Notifications.jsx";
import Upgrade from "views/Upgrade.jsx";
import AddUserProfile from "views/AddUserProfile.jsx";
import Login from "views/Login";
import Register from "views/Register";
import AddSongs from "views/AddSongs";
import AddFilm from "views/AddFilm";
import AdminList from "views/AdminList"

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "pe-7s-graph",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "Edit User Profile",
    icon: "pe-7s-user",
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/adduser",
    name: "Add User Profile",
    icon: "pe-7s-user",
    component: AddUserProfile,
    layout: "/admin"
  },

    {
    path: "/login",
    name: " Login",
    icon: "pe-7s-user",
    component: Login,
    layout: "/admin"
  },
  {
    path: "/register",
    name: " Register",
    icon: "pe-7s-rocket",
    component: Register,
    layout: "/admin"
  },
  {
    path: "/addSongs",
    name: " AddSongs",
    icon: "pe-7s-news-paper",
    component: AddSongs,
    layout: "/admin"
  },
  {
    path: "/addFilm",
    name: " Add Film",
    icon: "pe-7s-user",
    component: AddFilm,
    layout: "/admin"
  },
 /* {
    path: "/adduser",
    name: " Login",
    icon: "pe-7s-user",
    component: Login,
    layout: "/admin"
  },*/
  {
    path: "/adminList",
    name: "AdminList",
    icon: "pe-7s-science",
    component: AdminList,
    layout: "/admin"
  },
  {
    path: "/table",
    name: "User List",
    icon: "pe-7s-note2",
    component: TableList,
    layout: "/admin"
  },
  /*{
    path: "/typography",
    name: "Typography",
    icon: "pe-7s-news-paper",
    component: Typography,
    layout: "/admin"
  },*/


  /*{
    path: "/notifications",
    name: "Notifications",
    icon: "pe-7s-bell",
    component: Notifications,
    layout: "/admin"
  },*/
  /*{
    upgrade: true,
    path: "/upgrade",
    name: "Upgrade to PRO",
    icon: "pe-7s-rocket",
    component: Upgrade,
    layout: "/admin"
  }*/
];

export default dashboardRoutes;
