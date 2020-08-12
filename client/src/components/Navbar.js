import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@material-ui/styles";
import { Box, Container, Button, IconButton } from "@material-ui/core";
import ptakLogo from "images/ptak-white.png";
import { LocalizedLink, LanguageLink } from "components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import LocaleContext from "src/localeContext";
import UKFlag from "images/icons/uk.svg";
import PLFlag from "images/icons/pl.svg";
const locales = require("i18n/locales");
const pages = require("i18n/pages");

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ptakUfiLogo: {
    width: "120px",
  },
  navigation: {
    width: "100%",
    height: "100%",
    position: "fixed",
    right: 0,
    top: 0,
    backgroundColor: "#1c1c1c",
    zIndex: 29,
    transform: props => (props.isActive ? "translateX(0)" : "translateX(100%)"),
    transition: "transform 0.4s ease",
    overflowY: "auto",
  },
  navList: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    listStyle: "none",
    margin: 0,
    padding: theme.spacing(3, 0, 4),
  },
  navListItem: {
    marginBottom: theme.spacing(4),
    position: "relative",
    "&:first-child": {
      margin: 0,
    },
    "& span": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  },
  flagIconButton: {
    marginRight: theme.spacing(2),
    "&:last-child": {
      marginRight: 0,
    },
  },
  flagIcon: {
    width: "30px",
  },
}));

const Navbar = () => {
  const { t } = useTranslation();

  const { locale, pageSlug } = React.useContext(LocaleContext);

  const pageLanguages = pages[pageSlug];

  const [isActive, setIsActive] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState({
    forVisitors: false,
    forExhibitors: false,
  });

  const changeIsActive = val => {
    if (val) document.body.classList.add("menu-active");
    else {
      document.body.classList.remove("menu-active");
      setShowSubmenu({
        forVisitors: false,
        forExhibitors: false,
      });
    }

    setIsActive(val);
  };

  const classes = useStyles({
    isActive,
  });

  return (
    <Box className={classes.root}>
      <LocalizedLink to="/">
        <img
          src={ptakLogo}
          className={classes.ptakUfiLogo}
          alt="Ptak Warsaw Expo Logo"
        />
      </LocalizedLink>
      <IconButton onClick={() => changeIsActive(true)}>
        <MenuIcon fontSize="large" style={{ color: "white" }} />
      </IconButton>
      <nav className={classes.navigation} isActive={isActive}>
        <Container>
          <ul className={classes.navList}>
            <li className={classes.navListItem}>
              <IconButton onClick={() => changeIsActive(false)}>
                <CloseIcon fontSize="large" style={{ color: "white" }} />
              </IconButton>
            </li>
            <li>
              {Object.keys(pageLanguages).map((lang, i) => (
                <React.Fragment key={i}>
                  {lang !== locale && pages[pageSlug][lang].active === true && (
                    <IconButton
                      component={LanguageLink}
                      lang={lang}
                      className={classes.flagIconButton}
                    >
                      {lang === "pl" && (
                        <img
                          src={PLFlag}
                          className={classes.flagIcon}
                          alt="flag"
                        />
                      )}
                      {lang === "en" && (
                        <img
                          src={UKFlag}
                          className={classes.flagIcon}
                          alt="flag"
                        />
                      )}
                    </IconButton>
                  )}
                </React.Fragment>
              ))}
            </li>
          </ul>
        </Container>
      </nav>
    </Box>
  );
};

export default Navbar;
