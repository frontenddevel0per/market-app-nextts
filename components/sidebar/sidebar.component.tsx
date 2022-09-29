import Link from "next/link";
import { useState, FC, useContext } from "react";
import { animateScroll as scroll } from "react-scroll";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import StorefrontIcon from "@mui/icons-material/Storefront";
import Badge from "@mui/material/Badge";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAppDispatch } from "../../redux/hooks";
import { clearUserData } from "../../redux/userdata/userdata-slice";
import { setCategory } from "../../redux/category/category-slice";
import { useAppSelector } from "../../redux/hooks";
import { useFetchCategoriesApi } from "./sidebar.api";
import { bagLengthSelector, tokenValueSelector } from "../helpers";
import type { CategoryType } from "./sidebar.types";
import { useRouter } from "next/router";
import { useAuthContext } from "../auth/auth.context";

const Sidebar: FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const itemsCount = useAppSelector(bagLengthSelector);
  const token = useAppSelector(tokenValueSelector);
  const { isAuthorized, setIsAuthorized } = useAuthContext();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const onLogout = () => {
    dispatch(clearUserData());
    setIsAuthorized(false);
  };

  const onMenuListClick = (id?: number) => {
    handleClose();
    if (id) {
      dispatch(setCategory(`categories/${id}/`));
    } else {
      dispatch(setCategory(""));
    }
    scroll.scrollTo(0, {
      duration: 500,
      smooth: true,
      containerId: "catalog",
    });
  };

  const { data, isSuccess } = useFetchCategoriesApi();

  return (
    <div className="sidebar">
      <div className="sidebar-links">
        <Link href="/">
          <IconButton>
            <StorefrontIcon htmlColor="black" />
          </IconButton>
        </Link>
        <IconButton
          id="menu-button"
          aria-controls={anchorEl ? "menu-list" : undefined}
          aria-haspopup="true"
          aria-expanded={anchorEl ? "true" : undefined}
          onClick={handleClick}
          disabled={router.pathname !== "/"}
        >
          <MenuIcon htmlColor="black" />
        </IconButton>
        <Menu
          id="menu-list"
          aria-labelledby="menu-button"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <MenuItem key="all" onClick={() => onMenuListClick()}>
            All
          </MenuItem>
          {isSuccess &&
            data.map((item: CategoryType) => (
              <MenuItem key={item.id} onClick={() => onMenuListClick(item.id)}>
                {item.name}
              </MenuItem>
            ))}
        </Menu>
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
          !isAuthorized ? "sidebar-bottom unlogged" : "sidebar-bottom logged"
        }
      >
        <div className="log-button">
          {!isAuthorized ? (
            <Link href="/signin">
              <LoginIcon htmlColor="white" />
            </Link>
          ) : (
            <LogoutIcon htmlColor="white" onClick={() => onLogout()} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
