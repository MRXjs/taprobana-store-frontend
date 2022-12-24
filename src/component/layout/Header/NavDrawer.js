import React, { Fragment, useState } from "react";
import {
  Button,
  Drawer,
  IconButton,
  List,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import "./Header.css";

const NavDrawer = ({ pages }) => {
  const [openDrawer, setOpenDrawer] = useState();

  return (
    <Fragment>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List className="nav-drawer-list">
          {pages.map((page) => (
            <Button onClick={page.func}>
              <ListItemIcon>
                <ListItemText>{page.name}</ListItemText>
              </ListItemIcon>
            </Button>
          ))}
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon className="menu-icon" />
      </IconButton>
    </Fragment>
  );
};

export default NavDrawer;
