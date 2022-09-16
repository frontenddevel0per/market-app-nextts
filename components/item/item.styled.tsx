import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

export const AddButton = styled(Button)({
  backgroundColor: "#000000",

  color: "#ffffff",
  "&:hover": {
    backgroundColor: "#404040",
    borderColor: "#0062cc",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    backgroundColor: "#555555",
  },
});
