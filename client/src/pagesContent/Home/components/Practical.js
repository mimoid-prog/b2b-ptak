import React from "react";
import { useTranslation, Trans } from "react-i18next";
import { makeStyles } from "@material-ui/styles";
import { Box, Container, Grid, Typography, Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    background: "#121212",
    color: theme.palette.white,
    padding: theme.spacing(4, 0),
  },
  name: {
    margin: theme.spacing(0),
  },
  practicalInformation: {
    marginTop: theme.spacing(1),
  },
  openingHours: {
    margin: 0,
  },
  list: {
    margin: theme.spacing(1, 0, 3),
    listStylePosition: "inside",
    "& br": {
      display: "none",
    },
  },
  [theme.breakpoints.up("md")]: {
    practicalInformation: {
      "& br": {
        display: "none",
      },
    },
    list: {
      listStyle: "none",
    },
  },
  [theme.breakpoints.up("lg")]: {
    centerBox: {
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
    list: {
      margin: 0,
    },
  },
}));

const Practical = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container>
        <Grid container>
          <Grid item xs={12} lg={4} xl={6}>
            <Typography variant="h6" className={classes.name}>
              {t("global.name")}
            </Typography>
            <Typography variant="h2" className={classes.practicalInformation}>
              <Trans>{"home.practicalInformation"}</Trans>
            </Typography>
          </Grid>
          <Grid item xs={12} lg={5} xl={4} className={classes.centerBox}>
            <Typography variant="h6" className={classes.openingHours}>
              {t("home.openingHours")}
            </Typography>
            <ul className={classes.list}>
              <li>
                <Trans>{"global.firstDay"}</Trans>
              </li>
              <li>
                <Trans>{"global.secondDay"}</Trans>
              </li>
              <li>
                <Trans>{"global.thirdDay"}</Trans>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} lg={3} xl={2} className={classes.centerBox}>
            <Button variant="contained" color="white">
              {t("home.road")}
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Practical;
