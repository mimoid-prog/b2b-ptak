import React from "react";
import { useTranslation, Trans } from "react-i18next";
import { makeStyles } from "@material-ui/styles";
import { Box, Container, Typography, Grid } from "@material-ui/core";
import Bar from "./Bar";

/* images */
import img1 from "images/footer/footer-img-1.jpg";
import img2 from "images/footer/footer-img-2.jpg";
import img3 from "images/footer/footer-img-3.jpg";
import img4 from "images/footer/footer-img-4.jpg";
import img5 from "images/footer/footer-img-5.jpg";
import img6 from "images/footer/footer-img-6.jpg";
import logo from "images/ptak-logo-white.png";
import team from "images/icons/team.svg";
import graph from "images/icons/graph.svg";
import plane from "images/icons/plane.svg";
import bulb from "images/icons/lamp.svg";
import footerBg from "images/footer/footer-bg.jpg";

const useStyles = makeStyles(theme => ({
  root: {},
  header: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${footerBg})`,
    color: theme.palette.white,
    padding: theme.spacing(3, 0, 4),
  },
  ptakLogo: {
    width: "120px",
  },
  headingTwo: {
    color: "#c5a25c",
    textTransform: "uppercase",
    marginBottom: theme.spacing(3),
  },
  listItem: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(1),
  },
  icon: {
    width: "50px",
    height: "50px",
    marginRight: theme.spacing(2),
  },
  gallery: {
    display: "none",
  },
  [theme.breakpoints.up("md")]: {
    header: {
      textAlign: "center",
      padding: theme.spacing(5, 0, 6),
      backgroundSize: "140%",
    },
    headingTwo: {
      margin: theme.spacing(5, 0),
      fontSize: "3.5em",
    },
    listItem: {
      flexDirection: "column",
      textAlign: "center",
      alignItems: "center",
    },
    icon: {
      marginRight: 0,
      marginBottom: theme.spacing(0.6),
    },
    gallery: {
      display: "grid",
      gridTemplateColumns: "repeat(7, 1fr)",
      overflow: "hidden",
      "& img": {
        width: "100%",
        border: "1px solid white",
      },
      "& img:first-child": {
        borderLeft: "none",
      },
    },
  },
  [theme.breakpoints.up("xl")]: {
    header: {
      backgroundSize: "100%",
      backgroundPosition: "center",
    },
    headingTwo: {
      fontSize: "5em",
    },
  },
}));

const Footer = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.header}>
        <Container>
          <img
            src={logo}
            alt="Ptak Warsaw Expo logo"
            className={classes.ptakLogo}
          />
          <Typography variant="h5" className={classes.headingOne}>
            {t("footer.headingOne")}
          </Typography>
          <Typography
            variant="h1"
            component="h2"
            className={classes.headingTwo}
          >
            {t("footer.headingTwo")}
          </Typography>
          <Grid container>
            <Grid item xs={12} md={3} className={classes.listItem}>
              <img
                src={team}
                className={classes.icon}
                alt={t("alts.icons.team")}
              />
              <Trans>{"footer.listItemOne"}</Trans>
            </Grid>
            <Grid item xs={12} md={3} className={classes.listItem}>
              <img
                src={graph}
                className={classes.icon}
                alt={t("alts.icons.graph")}
              />
              <Trans>{"footer.listItemTwo"}</Trans>
            </Grid>
            <Grid item xs={12} md={3} className={classes.listItem}>
              <img
                src={plane}
                className={classes.icon}
                alt={t("alts.icons.plane")}
              />
              <Trans>{"footer.listItemThree"}</Trans>
            </Grid>
            <Grid item xs={12} md={3} className={classes.listItem}>
              <img
                src={bulb}
                className={classes.icon}
                alt={t("alts.icons.bulb")}
              />
              <Trans>{"footer.listItemFour"}</Trans>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box className={classes.gallery}>
        <img src={img6} alt="ptak" />
        <img src={img1} alt="ptak" />
        <img src={img2} alt="ptak" />
        <img src={img3} alt="ptak" />
        <img src={img4} alt="ptak" />
        <img src={img5} alt="ptak" />
        <img src={img6} alt="ptak" />
      </Box>
      <Bar />
    </Box>
  );
};

export default Footer;
