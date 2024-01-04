import React from "react";
import { Link } from "react-router-dom";
import { ListItemIcon } from "@mui/material";

const ProfileMenuItem = ({ children, text, to, onClick }) => {
  return (
    <Link
      onClick={onClick}
      className="normal-link"
      to={to}
      style={{
        minWidth: "150px",
        margin: "8px 16px",
        display: "flex",
        justifyContent: "flex-start",
      }}
    >
      <ListItemIcon sx={{ minWidth: "24px" }}>{children}</ListItemIcon>
      {text}
    </Link>
  );
};
export default ProfileMenuItem;
