import React from "react";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@material-ui/styles";
import { Box, Container, Typography, Grid, Button } from "@material-ui/core";
import { LocalizedLink } from "components";
import headerBg from "images/header-bg.jpg";
import visitors from "images/icons/visitor.svg";
import exhibitors from "images/icons/exhibitor.svg";
import area from "images/icons/area.svg";
import conference from "images/icons/study.svg";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${headerBg})`,
  },
  box: {
    background: theme.palette.white,
    padding: theme.spacing(4, 3),
    transform: "translateY(-30px)",
    textAlign: "center",
    boxShadow: "2px -5px 15px 0px rgba(0, 0, 0, 0.15)",
  },
  title: {
    marginTop: 0,
  },
  icon: {
    width: "60px",
  },
  text: {
    "& span:first-child": {
      fontWeight: 700,
    },
    "& span:last-child": {
      display: "block",
    },
  },
  buttonsBox: {
    marginTop: theme.spacing(4),
  },
  bottomBox: {
    marginTop: theme.spacing(2),
  },
  button: {
    width: "100%",
    paddingLeft: 0,
    paddingRight: 0,
  },
  [theme.breakpoints.up("sm")]: {
    root: {
      paddingBottom: theme.spacing(6),
    },
    box: {
      width: "500px",
      margin: "0 auto",
      padding: theme.spacing(6, 4),
    },
    title: {
      marginBottom: theme.spacing(4),
    },
    bottomBox: {
      marginTop: theme.spacing(3),
    },
  },
  [theme.breakpoints.up("lg")]: {
    icon: {
      width: "70px",
    },
    text: {
      fontSize: "18px",
      marginTop: theme.spacing(0.6),
    },
  },
}));

const Statistics = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Container>
        <Box className={classes.box}>
          <Typography variant="h4" className={classes.title}>
            {t("home.statistics.title")}
          </Typography>
          <Grid container>
            <Grid item xs={6}>
              <img
                src={visitors}
                alt={t("alts.icons.visitors")}
                className={classes.icon}
              />
              <Typography variant="body2" className={classes.text}>
                <span>7000</span>
                <span>{t("home.statistics.stat1")}</span>
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <img
                src={exhibitors}
                alt={t("alts.icons.exhibitors")}
                className={classes.icon}
              />
              <Typography variant="body2" className={classes.text}>
                <span>100</span>
                <span>{t("home.statistics.stat2")}</span>
              </Typography>
            </Grid>
            <Grid item xs={6} className={classes.bottomBox}>
              <img
                src={area}
                alt={t("alts.icons.area")}
                className={classes.icon}
              />
              <Typography variant="body2" className={classes.text}>
                <span>5000m2</span>
                <span>{t("home.statistics.stat3")}</span>
              </Typography>
            </Grid>
            <Grid item xs={6} className={classes.bottomBox}>
              <img
                src={conference}
                alt={t("alts.icons.conference")}
                className={classes.icon}
              />
              <Typography variant="body2" className={classes.text}>
                <span>20</span>
                <span>{t("home.statistics.stat4")}</span>
              </Typography>
            </Grid>
          </Grid>
          <Grid container className={classes.buttonsBox} spacing={2}>
            <Grid item xs={12} sm={6}>
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
                component={LocalizedLink}
                to="/visitor-registration"
              >
                {t("buttons.register")}
              </Button>
            </Grid>
            <Grid item xs={12} sm={6} className={classes.lastButtonBox}>
              <Button
                variant="outlined"
                color="primary"
                className={classes.button}
                component={LocalizedLink}
                to="/exhibitor-registration"
              >
                {t("buttons.becomeAnExhibitor")}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Statistics;
