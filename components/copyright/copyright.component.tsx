import Typography from "@mui/material/Typography";
import Link from "next/link";
import { FC } from "react";
import { SITE } from "./signin.constant";

type CopyrightProps = {
  sx: {
    mt?: number;
    mb?: number;
  };
};

const Copyright: FC<CopyrightProps> = ({ sx }) => {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...sx}>
      {"Copyright © "}
      <Link color="inherit" href={SITE.LINK}>
        {SITE.NAME}
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default Copyright;
