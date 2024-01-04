import React from "react";
import { NavLink } from "react-router-dom";
import { IconButton, Stack } from "@mui/material";
import pathes from "../../../router/pathes";
import SvgIconLoader from "../../base/svg-icon-loader";
import NotifMenu from "../notif-menu/notif-menu";

const ToolboxMenu = () => {
  return (
    <Stack
      spacing={0.5}
      direction="row"
      justifyContent="center"
      alignItems="center"
      marginRight={1}
      sx={{
        marginRight: { md: 7 },
      }}
      className="set-menu-active"
    >
      <NotifMenu />
      <NavLink to={pathes.QA} title="سوالات متداول">
        <IconButton>
          <SvgIconLoader icon="qa" />
        </IconButton>
      </NavLink>
      {/* Todo: check user is admin/super admin and go to right homepage  */}
      <NavLink to={pathes.SUPERAGENTSDASHBOARDPAGE} title="خانه"></NavLink>
    </Stack>
  );
};

export default ToolboxMenu;
