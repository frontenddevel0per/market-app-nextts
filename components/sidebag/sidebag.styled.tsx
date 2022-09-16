import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

export const AddToCartButton = styled(Button)({
  backgroundColor: "#ffffff",
  color: "#000000",
  "&:hover": {
    backgroundColor: "#eeeeee",
    borderColor: "#0062cc",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#dddddd",
  },
});
