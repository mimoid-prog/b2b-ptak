import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Container, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Countdown from "react-countdown";
import { LocalizedLink, Navbar } from "components";

/*images*/
import logo from "images/logo.png";
import headerBg from "images/header-bg.jpg";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${headerBg})`,
    textAlign: "center",
    color: theme.palette.white,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(6),
  },
  logo: {
    maxWidth: "250px",
  },
  name: {
    margin: theme.spacing(1, 0, 0),
  },
  date: {
    margin: theme.spacing(2, 0, 4),
  },
  timer: {
    "& span": {
      marginRight: "6px",
    },
  },
  tillTheFair: {
    margin: theme.spacing(4, 0, 0.5),
  },
  [theme.breakpoints.up("lg")]: {
    logo: {
      maxWidth: "300px",
    },
    name: {
      margin: theme.spacing(2, 0, 0),
    },
    date: {
      margin: theme.spacing(3, 0, 4),
    },
    timer: {
      fontSize: "1.2rem",
    },
  },
}));

const Header = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  const timerDateInMiliseconds = new Date(t("home.timer.date")).getTime();

  const renderer = ({ days, hours, minutes, seconds }) => {
    if (days < 10) days = "0" + days;
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    return (
      <Box className={classes.timer}>
        <span>
          {days}
          {t("home.timer.days")}
        </span>
        <span>
          {hours}
          {t("home.timer.hours")}
        </span>
        <span>
          {minutes}
          {t("home.timer.minutes")}
        </span>
        <span>
          {seconds}
          {t("home.timer.seconds")}
        </span>
      </Box>
    );
  };

  return (
    <Box className={classes.root}>
      <Container>
        <Navbar />
        <img src={logo} alt="logo" className={classes.logo} />
        <Typography variant="h1" className={classes.name}>
          {t("global.name")}
        </Typography>
        <Typography variant="h3" component="h2" className={classes.date}>
          {t("global.date")}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={LocalizedLink}
          to="/visitor-registration"
        >
          <span>{t("buttons.register")}</span>
          <span>{t("buttons.registerBottom")}</span>
        </Button>
        <Typography variant="h6" component="h3" className={classes.tillTheFair}>
          {t("home.tillTheFair")}
        </Typography>
        <Countdown
          date={timerDateInMiliseconds}
          daysInHours={false}
          renderer={renderer}
        />
      </Container>
    </Box>
  );
};

export default Header;
