import React from "react";
import { string } from "prop-types";
import { ShoppingCart, Settings } from "@material-ui/icons";
import { Link } from "react-router-dom";
import {
  AppBar,
  IconButton,
  Badge,
  Toolbar,
  Typography,
} from "@material-ui/core";

import Avatar from "@material-ui/core/Avatar";

import sushiLogo from "./logo_sushi.png";
import useStyles from "./useStyles";

const webSiteTitle = "Guigui Sushi";

export default function Header({ title }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Link to="/">
            <Avatar
              alt={webSiteTitle}
              src={sushiLogo}
              className={classes.logo}
            />
          </Link>
          <Typography variant="h6" className={classes.title}>
            {webSiteTitle} - {title}
          </Typography>
          <IconButton component={Link} to="/basket" color="inherit">
            <Badge badgeContent={2} color="secondary">
              <ShoppingCart />
            </Badge>
          </IconButton>
          <IconButton component={Link} to="/settings" color="inherit">
            <Settings />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  title: string.isRequired,
};
