import Link from "next/link";
import { FC } from "react";
import IconButton from "@mui/material/IconButton";
import ChildFriendlyIcon from "@mui/icons-material/ChildFriendly";
import MenuIcon from "@mui/icons-material/Menu";
import StorefrontIcon from "@mui/icons-material/Storefront";
import Badge from "@mui/material/Badge";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAppDispatch } from "../../redux/hooks";
import { clearToken } from "../../redux/token/token-slice";
import { useBagSelector, useTokenSelector } from "../helpers";

const Sidebar: FC = () => {
  const dispatch = useAppDispatch();
  const itemsCount = useBagSelector().length;
  const token = useTokenSelector();

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
      <div
        className={
          token === null ? "sidebar-bottom unlogged" : "sidebar-bottom logged"
        }
      >
        <div className="log-button">
          {token === null ? (
            <Link href="signin">
              <LoginIcon htmlColor="white" />
            </Link>
          ) : (
            <LogoutIcon
              htmlColor="white"
              onClick={() => dispatch(clearToken())}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
