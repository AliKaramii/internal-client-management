import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import React from "react";
import { theme } from "../../assets/themes/theme.js";
import SvgIconLoader from "../../components/base/svg-icon-loader/index.jsx";
const MessageInput = () => {
  const handleSendMessage = () => {
    console.log("send message on ckick");
  };

  return (
    <Box
      sx={{
        bgcolor: theme.palette.primary.main,
        marginTop: 2,
        borderRadius: "8px",
        padding: 1,
      }}
    >
      <TextField
        sx={{ bgcolor: "#ffff", width: "100%" }}
        variant="outlined"
        placeholder=""
        InputProps={{
          startAdornment: (
            <InputAdornment position="start" onClick={handleSendMessage}>
              <IconButton sx={{ bgcolor: theme.palette.primary.main }}>
                <SvgIconLoader
                  icon="send-message"
                  color={theme.palette.text.light}
                />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};
export default MessageInput;
