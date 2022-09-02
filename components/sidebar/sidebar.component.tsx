import Link from "next/link";
import { FC } from "react";
import IconButton from "@mui/material/IconButton";
import ChildFriendlyIcon from "@mui/icons-material/ChildFriendly";
import MenuIcon from "@mui/icons-material/Menu";
import StorefrontIcon from "@mui/icons-material/Storefront";
import Badge from "@mui/material/Badge";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAppSelector } from "../../redux/hooks";

const Sidebar: FC = () => {
  const itemsCount = useAppSelector((state) => state.bag.value.length);

  return (
    <div className="sidebar">
      <div className="sidebar-links">
        <Link href="/">
          <ChildFriendlyIcon />
        </Link>
        <Link href="/">
          <IconButton>
            <MenuIcon htmlColor="black" />
          </IconButton>
        </Link>
        <Link href="/">
          <IconButton>
            <StorefrontIcon htmlColor="black" />
          </IconButton>
        </Link>
        <Link href="/bag">
          <IconButton>
            <Badge badgeContent={itemsCount} color="error">
              <LocalMallIcon htmlColor="black" />
            </Badge>
          </IconButton>
        </Link>
      </div>
      <div className="sidebar-bottom">
        <a href="#">
          <LogoutIcon htmlColor="white" />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
