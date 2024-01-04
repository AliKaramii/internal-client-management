import React, { useState } from "react";
import { Button, Divider, Stack } from "@mui/material";
import SearchBox from "../../base/search-box";
import BtnIcon from "../../base/btn-icon";
import SvgIconLoader from "../../base/svg-icon-loader";
import { ArrowForward } from "@mui/icons-material";
import { Link } from "react-router-dom";

const PageHeaderSection = ({
  search = true,
  print = true,
  divider = true,
  children,
  backTo,
  ValueOnBackBtn = "",
  handleOnLink,
}) => {
  const handleLink = () => {
    if (!handleOnLink) return;
    handleOnLink(ValueOnBackBtn);
  };
  console.log("ValueOnBackBtn:", ValueOnBackBtn);
  return (
    <>
      <Stack
        sx={{ width: "100%" }}
        direction="row"
        spacing={1}
        marginBottom={1}
        justifyContent="space-between"
        alignItems="center"
      >
        {backTo && (
          <Link className="normal-link" to={backTo} onClick={handleLink}>
            <Button variant="outlined">
              <Stack direction="row">
                <ArrowForward /> بازگشت
              </Stack>
            </Button>
          </Link>
        )}
        <Stack direction="row">
          {print && (
            <BtnIcon size={48} borderRadius={1}>
              <SvgIconLoader size={32} icon="search" />
            </BtnIcon>
          )}
          {search && (
            <BtnIcon size={48} borderRadius={1}>
              <SvgIconLoader size={32} icon="printer" />
            </BtnIcon>
          )}
          <Stack direction="row">{children}</Stack>
        </Stack>
      </Stack>
      {divider && <Divider sx={{ marginY: 2 }} />}
    </>
  );
};
export default PageHeaderSection;
