import { useState } from "react";
import { Box, Button, Grid } from "@mui/material";
import TextIconBoxed from "../text-icon-boxed";
import { theme } from "../../../assets/themes/theme";

function TextIconBoxedButton({ height, buttons }) {
  const [active, setActive] = useState(null);

  const handleClick = (index) => {
    setActive(index);
  };

  return buttons.map((button, index) => {
    return (
      <Grid item xs={12} sm={4} key={index}>
        <Button
          onClick={() => handleClick(index)}
          className={active === index ? "categoryBtn activeBtn" : ""}
          sx={{
            minWidth: "100%",
            padding: 0,
            margin: 0,
            height: { height },
          }}
        >
          <Box sx={{ width: "100%", height: { height } }}>
            <TextIconBoxed
              color={theme.palette.text.dark}
              marginY={0}
              icon={button.icon}
              text={button.text}
              size={60}
              height={height}
            />
          </Box>
        </Button>
      </Grid>
    );
  });
}

export default TextIconBoxedButton;
