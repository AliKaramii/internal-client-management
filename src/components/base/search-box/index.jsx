import { Box, InputAdornment, TextField } from "@mui/material";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import BtnIcon from "../btn-icon";
import { theme } from "../../../assets/themes/theme";
import SvgIconLoader from "../svg-icon-loader";

const SearchBox = ({ placeholder = "جستجو" }) => {
  const handleSearch = () => {
    console.log("search on click");
  };

  return (
    <Box>
      <BtnIcon size={48} borderRadius={1}>
        <SvgIconLoader size={32} icon="printer" />
      </BtnIcon>
      {/* <TextField
        variant="outlined"
        placeholder={placeholder}
        InputProps={{
          style: {
            padding: "0",
            height: "48px",
          },
          startAdornment: (
            <InputAdornment position="start" onClick={handleSearch}>
              <BtnIcon
                size={40}
                variant="contained"
                borderRadius={1}
                background={theme.palette.back.secondary}
              >
                <SvgIconLoader size={24} icon="search" />
              </BtnIcon>
            </InputAdornment>
          ),
        }}
      /> */}
    </Box>
  );
};

export default SearchBox;
