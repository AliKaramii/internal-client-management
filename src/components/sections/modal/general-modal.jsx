import React, { useEffect, useState } from "react";
import { Box } from "@mui/system";
import { Button, Container, Grid, Modal, Stack } from "@mui/material";
import SvgIconLoader from "../../base/svg-icon-loader";
import BtnIcon from "../../base/btn-icon";
import ModalFooterSection from "./footer";
import ModalBodySection from "./body";
import ModalHeaderSection from "./header";

const GeneralModalSection = ({
  children,
  options,
  openFromOutside,
  closeFromOutside,
}) => {
  const { title, btnIcon, btnColor, submitText, btnType } = options;

  const [open, setOpen] = useState(false);
  const [subject, setSubject] = useState("");

  const handleChange = (event) => {
    setSubject(event.target.value);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    if (closeFromOutside) closeFromOutside();
  };

  useEffect(() => {
    setOpen(openFromOutside);
  }, [openFromOutside]);

  return (
    <>
      {btnType !== "fromOutside" && (
        <Stack direction="row" justifyContent="flex-end">
          <BtnIcon
            onClick={handleOpen}
            color={btnColor}
            size={48}
            borderRadius={1}
            hoverBg="#e8d4ff"
          >
            <SvgIconLoader icon={btnIcon} size={32} color={btnColor} />
          </BtnIcon>
        </Stack>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-tittle"
        aria-describedby="modal-body"
      >
        <Box className="modal">
          <ModalHeaderSection title={title} handleClose={handleClose} />
          <Container
            sx={{
              overflow: "auto",
              maxHeight: "calc(80vh - 72px)",
            }}
          >
            <Box
              marginTop={3}
              sx={{
                paddingBottom: 2,
              }}
            >
              <ModalBodySection>
                <Box marginY={3}>{children}</Box>
              </ModalBodySection>
              <ModalFooterSection>
                <Button onClick={handleClose}>لغو</Button>
                <Button color="success">{submitText}</Button>
              </ModalFooterSection>
            </Box>
          </Container>
        </Box>
      </Modal>
    </>
  );
};
export default GeneralModalSection;
