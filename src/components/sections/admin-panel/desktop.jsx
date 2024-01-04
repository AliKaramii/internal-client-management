import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { Container, Box } from "@mui/system";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Paper } from "@mui/material";
import UserProfileMenu from "../../common/user-profile-menu";
import { theme } from "../../../assets/themes/theme.js";
import logo from "../../../assets/svg/app-logo.svg";
import ToolboxMenu from "../../common/toolbox-menu";
import { NavLink } from "react-router-dom";
import UserPanelPageTitle from "../../base/title-userpanel-page";
import SvgIconLoader from "../../base/svg-icon-loader";
import style from "./style.module.scss";
import { useQuery } from "@tanstack/react-query";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const UserPanelLayoutDesktop = ({ children, menuItems, pageTitle }) => {
  // const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const { data: role } = useQuery({
    queryKey: ["role"],
  });

  return (
    <Box className={style.grayBody} sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        className={style.panelAppBar}
        elevation={0}
        position="fixed"
        open={open}
        sx={{ bgcolor: theme.palette.back.color10 }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              color: theme.palette.primary.main,
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <Box
              sx={{
                width: "64px",
                position: "fixed",
                bgcolor: "#fff",
                height: "70px",
                left: 0,
                top: 0,
                paddingTop: "20px",
              }}
            >
              <MenuIcon />
            </Box>
          </IconButton>
          <Box
            style={{
              borderBottom: "1px solid #b6b6b6",
              padding: "8px 40px",
              width: "100%",
              flexDirection: "row-reverse",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <UserProfileMenu color={theme.palette.text.dark} />
            <ToolboxMenu />
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer sx={{ direction: "rtl" }} variant="permanent" open={open}>
        <DrawerHeader
          sx={{
            bgcolor: theme.palette.primary.main,
            direction: "ltr",
          }}
        >
          <Box className={style.drawerLogo}>
            <img src={logo} alt="AppLogo" />
          </Box>
          <IconButton onClick={handleDrawerClose} sx={{ color: "#ffff" }}>
            {theme.direction === "rtl" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>

        <List sx={{ direction: "ltr" }}>
          {menuItems.map((item) => {
            // ToDo uncomment next line for
            // if (!item.showInMenu || !item.authRole.includes(role)) return null;
            if (!item.showInMenu) return null;
            else
              return (
                <ListItem
                  // onClick={handleDataLoad}
                  key={item.title}
                  disablePadding
                  sx={{ display: "block" }}
                >
                  <NavLink to={item.path} className="normal-link">
                    <ListItemButton
                      sx={{
                        minHeight: 48,
                        justifyContent: open ? "initial" : "center",
                        px: 2.5,
                        paddingTop: 0,
                        paddingBottom: 0,
                      }}
                    >
                      {/* <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon> */}
                      <Box marginX={1}>
                        <SvgIconLoader icon={item.icon} />
                      </Box>
                      {/* <img src={item.icon} className={style.menuIcon} /> */}
                      <ListItemText
                        primary={item.title}
                        sx={{ opacity: open ? 1 : 0 }}
                      />
                    </ListItemButton>
                  </NavLink>
                </ListItem>
              );
          })}
        </List>
        {/* <Divider /> */}
      </Drawer>
      <Container>
        <Box marginY={3}>
          <DrawerHeader />
          <Box>
            <UserPanelPageTitle pageIcon={pageTitle.icon}>
              {pageTitle.title}
            </UserPanelPageTitle>
          </Box>
          <Paper
            sx={{
              bgcolor: theme.palette.back.light9,
              minHeight: "70vh",
              padding: 4,
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <Box sx={{ width: "100%" }}>{children}</Box>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default UserPanelLayoutDesktop;
