import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import { Box } from "@mui/system";
import { Button, Container, Grid, Modal, Stack } from "@mui/material";
import SvgIconLoader from "../../base/svg-icon-loader";
import BtnIcon from "../../base/btn-icon";
import ModalFooterSection from "./footer";
import ModalBodySection from "./body";
import ModalHeaderSection from "./header";
import AddBuildingBtn from "./add-building-btn";

const FormModalSection = ({
  children,
  options,
  openFromOutside,
  closeFromOutside,
}) => {
  const { title, btnIcon, btnColor, submitText, validationSchema, btnType } =
    options;

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
      {btnType === "addBuilding" ? (
        <AddBuildingBtn handleOpen={handleOpen} />
      ) : btnType !== "fromOutside" ? (
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
      ) : null}

      <Modal
        open={open ? open : false}
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
                <Box marginY={3}>
                  <Formik
                    initialValues={{
                      buildingName: "",
                    }}
                    onSubmit={(values) => {
                      const { name } = values;
                      console.log(name);
                      //   dispatch(
                      //     setReserveData({
                      //       name: name,
                      //       phone: phone,
                      //       unitId: unitId,
                      //       payment: payment,
                      //     })
                      //   );

                      //   setGoToNextStep(true);
                    }}
                    validationSchema={validationSchema}
                  >
                    {(formik) => (
                      <form onSubmit={formik.handleSubmit}>
                        <Box minHeight="54vh">{children}</Box>
                      </form>
                    )}
                  </Formik>
                </Box>
              </ModalBodySection>
              <ModalFooterSection>
                <Button variant="contained" onClick={handleClose}>
                  لغو
                </Button>
                <Button variant="outlined" type="submit">
                  {submitText}
                </Button>
              </ModalFooterSection>
            </Box>
          </Container>
        </Box>
      </Modal>
    </>
  );
};
export default FormModalSection;
