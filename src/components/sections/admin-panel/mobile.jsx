import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import UserProfileMenu from "../../common/user-profile-menu";
import ToolboxMenu from "../../common/toolbox-menu";
import { theme } from "../../../assets/themes/theme";
import UserPanelPageTitle from "../../base/title-userpanel-page";
import SvgIconLoader from "../../base/svg-icon-loader";

const drawerWidth = 240;

function UserPanelLayoutMobile({ children, window, menuItems, pageTitle }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const role = localStorage.getItem("role");

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {menuItems.map((item, index) => {
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
                  <ListItemButton>
                    <Box marginX={1}>
                      <SvgIconLoader icon={item.icon} />
                    </Box>
                    <ListItemText primary={item.title} />
                  </ListItemButton>
                </NavLink>
              </ListItem>
            );
        })}
      </List>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          bgcolor: theme.palette.back.color10,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              ml: 0,
              display: { sm: "none" },
            }}
          >
            <MenuIcon
              sx={{
                color: theme.palette.primary.main,
              }}
            />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              width: "100%",
            }}
          >
            <Toolbar>
              <Box
                sx={{
                  padding: "8px 0",
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
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          bgcolor: theme.palette.back.light9,
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Box>
          <UserPanelPageTitle pageIcon={pageTitle.icon}>
            {pageTitle.title}
          </UserPanelPageTitle>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Box
            sx={{
              maxWidth: "75vw",
              // overflow: "auto",
            }}
          >
            <Box sx={{ width: "100%" }}>{children}</Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default UserPanelLayoutMobile;
