import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Container, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import Countdown from "react-countdown";
import { LocalizedLink as Link } from "components/links/LocalizedLink";

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
    marginTop: theme.spacing(1),
  },
  date: {
    marginBottom: theme.spacing(4),
  },
  timer: {
    "& span": {
      marginRight: "6px",
    },
  },
  tillTheFair: {
    marginBottom: "5px",
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
        <img src={logo} alt="logo" className={classes.logo} />
        <Typography variant="h1" className={classes.name}>
          {t("global.name")}
        </Typography>
        <Typography variant="h2" className={classes.date}>
          {t("global.date")}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/visitor-registration"
        >
          <span>{t("buttons.register")}</span>
          <span>{t("buttons.registerBottom")}</span>
        </Button>
        <h4 className={classes.tillTheFair}>{t("home.tillTheFair")}</h4>
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
