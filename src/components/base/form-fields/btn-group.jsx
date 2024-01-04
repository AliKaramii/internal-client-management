import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { theme } from "../../../assets/themes/theme";
import { useState } from "react";

const ButtonGroupField = ({ options }) => {
  const [active, setActive] = useState();

  const handleClick = (i) => {
    setActive(i);
  };

  return (
    <ButtonGroup
      className="buttongroup"
      aria-label="outlined primary button group"
      sx={{
        flexWrap: "wrap",
        gap: 0.5,
        backgroundColor: theme.palette.back.color7,
        border: "1px solid #ebebeb",
        padding: 1,
        borderRadius: 2,
        width: { xs: "100% !important" },
        maxWidth: "fit-content",
      }}
    >
      {options.map((option, index) => {
        return (
          <Button
            className={
              active === index
                ? "buttongroup-buttons activeBtn"
                : "buttongroup-buttons"
            }
            onClick={() => handleClick(index)}
            sx={{
              display: "flex",
              justifyContent: "center",
              height: "32px",
              border: "none",
              borderRadius: "8px !important",
              minWidth: "100px !important",
              color: theme.palette.text.dark,
              "&:hover": {
                border: "none",
                bgcolor: theme.palette.back.secondary,
              },
            }}
            key={index}
          >
            {option}
          </Button>
        );
      })}
    </ButtonGroup>
  );
};
export default ButtonGroupField;
