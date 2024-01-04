import React, { useState } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import pathes from "../../../router/pathes";
import { Typography } from "@mui/material";
import ProfileMenuItem from "./menu-item";
import SvgIconLoader from "../../base/svg-icon-loader";
import { logout } from "../../../features/logout/logout";
import { useNavigate } from "react-router-dom";

const UserProfileMenu = ({ color }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const navigate = useNavigate();

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    logout();
    navigate(pathes.LOGIN);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            display: { xs: "none", md: "block" },
            color: color,
          }}
        >
          فاطر رسا نور
        </Typography>
        <Tooltip>
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar sx={{ width: 40, height: 40 }}>A</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            // mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              //   content: '""',
              display: "none",
              //   position: "absolute",
              //   top: 0,
              //   left: 44,
              //   width: 10,
              //   height: 10,
              //   bgcolor: "background.paper",
              //   transform: "translateY(-50%) rotate(45deg)",
              //   zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        {/* <MenuItem onClick={handleClose}>
          <Avatar /> حساب کاربری
        </MenuItem> */}

        {/* <ProfileMenuItem text="اشتراک نیرا" to={pathes.LICENSE}>
          <Box marginX={1}>
            <SvgIconLoader icon="licence" />
          </Box>
        </ProfileMenuItem>
        <Divider /> */}
        <ProfileMenuItem text="خروج" to={pathes.LOGIN} onClick={handleLogout}>
          <Box marginX={1}>
            <SvgIconLoader icon="logout" />
          </Box>
        </ProfileMenuItem>
      </Menu>
    </>
  );
};

export default UserProfileMenu;
