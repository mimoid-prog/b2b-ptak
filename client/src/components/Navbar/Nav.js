import React from "react";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@material-ui/styles";
import { Box } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {},
}));

const Nav = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  return <Box className={classes.root}></Box>;
};

export default Nav;
