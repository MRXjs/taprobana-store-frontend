import React, { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import NavDrawer from "./NavDrawer";
import "./Header.css";
import { useSelector } from "react-redux";
import UserOptions from "./UserOptions";
import SearchIcon from "@material-ui/icons/Search";

const Header = () => {
  const history = useHistory();
  const [tabValue, setTabValue] = useState();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const { isAuthenticated, user } = useSelector((state) => state.user);

  const pages = [
    { name: "Home", func: home },
    { name: "Products", func: products },
    { name: "Search", func: search, icon: <SearchIcon /> },
    { name: "Contact", func: contact },
    { name: "About", func: about },
  ];

  function home() {
    history.push("/");
  }

  function products() {
    history.push("/products");
  }

  function contact() {
    history.push("/contact");
  }

  function about() {
    history.push("/about");
  }

  function loginRegister() {
    history.push("/login");
  }

  function search() {
    history.push("/search");
  }

  return (
    <Fragment>
      <AppBar className="nav-app-bar">
        <Toolbar className="toolbar" classes="nav-toolbar">
          <Typography color="primary">TAPROBANA</Typography>
          {isMatch ? (
            <NavDrawer pages={pages} />
          ) : (
            <Tabs
              className="nav-tabs"
              textColor="inherit"
              value={tabValue}
              onChange={(e, value) => setTabValue(value)}
              indicatorColor="secondary"
            >
              {pages.map((page) => (
                <Tab
                  icon={page.icon}
                  label={page.name === "Search" ? "" : page.name}
                  className="nav-tab"
                  onClick={page.func}
                />
              ))}
            </Tabs>
          )}
          {isAuthenticated ? (
            <UserOptions user={user} className="nav-user-option" />
          ) : (
            <Button
              onClick={loginRegister}
              color="primary"
              variant="contained"
              className="register-btn"
            >
              Login Or Register
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Fragment>
  );
};

export default Header;
