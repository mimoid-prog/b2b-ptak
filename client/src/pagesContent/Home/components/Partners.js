import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  root: {},
}));

const Partners = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container>
        <Typography variant="h3">{t("home.partners")}</Typography>
        <Box className={classes.inner}></Box>
      </Container>
    </Box>
  );
};

export default Partners;
