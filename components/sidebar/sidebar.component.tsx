import Link from "next/link";
import { useState, FC } from "react";
import { useQuery } from "react-query";
import { animateScroll as scroll } from "react-scroll";
import IconButton from "@mui/material/IconButton";
import ChildFriendlyIcon from "@mui/icons-material/ChildFriendly";
import MenuIcon from "@mui/icons-material/Menu";
import StorefrontIcon from "@mui/icons-material/Storefront";
import Badge from "@mui/material/Badge";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAppDispatch } from "../../redux/hooks";
import { clearToken } from "../../redux/token/token-slice";
import { setCategory } from "../../redux/category/category-slice";
import { useAppSelector } from "../../redux/hooks";
import { bagLengthSelector, tokenValueSelector } from "../helpers";
import type { CategoryType } from "./sidebar.types";

const Sidebar: FC = () => {
  const dispatch = useAppDispatch();
  const itemsCount = useAppSelector(bagLengthSelector);
  const token = useAppSelector(tokenValueSelector);

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const { data, isSuccess } = useQuery("categories", () =>
    fetch("https://api.escuelajs.co/api/v1/categories").then((res) =>
      res.json()
    )
  );

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
          aria-controls={open ? "menu-list" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <MenuIcon htmlColor="black" />
        </IconButton>
        <Menu
          id="menu-list"
          aria-labelledby="menu-button"
          anchorEl={anchorEl}
          open={open}
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
          <MenuItem
            onClick={() => {
              handleClose();
              dispatch(setCategory(""));
              scroll.scrollTo(0, {
                duration: 500,
                smooth: true,
                containerId: "catalog",
              });
            }}
          >
            All
          </MenuItem>
          {isSuccess
            ? data.map((item: CategoryType) => (
                <>
                  <MenuItem
                    key={item.id}
                    onClick={() => {
                      handleClose();
                      dispatch(setCategory(`categories/${item.id}/`));
                      scroll.scrollTo(0, {
                        duration: 500,
                        smooth: true,
                        containerId: "catalog",
                      });
                    }}
                  >
                    {item.name}
                  </MenuItem>
                </>
              ))
            : null}
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
