import React, { useState } from "react";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import SvgIconLoader from "../../base/svg-icon-loader";
import { Stack, Typography } from "@mui/material";

const NotifMenu = ({ color }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
        <Tooltip>
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2, ":hover": { bgcolor: "transparent" } }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <Avatar
              sx={{
                width: 40,
                height: 40,

                bgcolor: "transparent",
              }}
            >
              <IconButton>
                <SvgIconLoader icon="notification" />
              </IconButton>
            </Avatar>
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
        <Stack spacing={1}>
          <Box padding={2} sx={{ bgcolor: "lightgray" }}>
            <Typography>پیام جدید مدیریت</Typography>
          </Box>
          <Box padding={1}>
            <Typography>پیام جدید مدیریت</Typography>
          </Box>
          <Box padding={1}>
            <Typography>پیام جدید مدیریت</Typography>
          </Box>
        </Stack>
      </Menu>
    </>
  );
};

export default NotifMenu;
