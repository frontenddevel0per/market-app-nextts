import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";

export const AddToCartIconButton = styled(IconButton)({
  backgroundColor: "#000000",
  color: "#ffffff",
  "&:hover": {
    backgroundColor: "#333333",
    borderColor: "#0062cc",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#333333",
  },
});
