import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Container, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { LocalizedLink as Link } from "components/links/LocalizedLink";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.white,
    padding: theme.spacing(1.5, 0),
    "& p": {
      margin: 0,
    },
  },
  btnBox: {
    display: "none",
  },
  [theme.breakpoints.up("lg")]: {
    root: {
      position: "sticky",
      top: 0,
      zIndex: 99,
    },
    inner: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    btnBox: {
      display: "block",
    },
  },
}));

const StickyBar = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container>
        <Box className={classes.inner}>
          <Box>
            <Typography variant="body2">35% {t("home.soldStands")}</Typography>
            <Typography variant="body2">
              1714 {t("home.registeredVisitors")}
            </Typography>
          </Box>
          <Box className={classes.btnBox}>
            <Button
              variant="contained"
              component={Link}
              to="/visitor-registration"
            >
              {t("buttons.oneLineRegister")}
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default StickyBar;
