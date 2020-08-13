import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@material-ui/styles";
import { Box, Container, Button, IconButton } from "@material-ui/core";
import ptakLogo from "images/ptak-white.png";
import { LocalizedLink, LanguageLink } from "components";
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  ExpandMore as ExpandMoreIcon,
} from "@material-ui/icons";
import LocaleContext from "src/localeContext";
import UKFlag from "images/icons/uk.svg";
import PLFlag from "images/icons/pl.svg";
import routes from "./routes";
import { submenusObject } from "./routes";

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
    textAlign: "left",
    listStyle: "none",
    margin: 0,
    padding: theme.spacing(3, 0, 4),
  },
  navListItem: {
    marginBottom: theme.spacing(4),
    position: "relative",
    "&:last-child": {
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
  navLink: {
    color: theme.palette.white,
    textDecoration: "none",
    fontSize: "18px",
  },
  flagIcon: {
    width: "30px",
  },
  submenuBox: {
    maxHeight: 0,
    marginTop: 0,
    transition: `max-height 0.5s ease, margin-top 0.2s ease`,
    overflow: "hidden",
    paddingLeft: theme.spacing(2),
    "&.active": {
      maxHeight: "1000px",
      marginTop: theme.spacing(2),
    },
  },
  submenuList: {
    listStyle: "none",
  },
  submenuItem: {
    margin: theme.spacing(0, 0, 2),
    "&:last-child": {
      borderBottom: "none",
    },
  },
}));

const Navbar = () => {
  const { t } = useTranslation();

  const { locale, pageSlug } = React.useContext(LocaleContext);

  const pageLanguages = pages[pageSlug];

  const [isActive, setIsActive] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(submenusObject);
  console.log(showSubmenu);

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
    showSubmenu,
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
      <nav className={classes.navigation}>
        <Container>
          <ul className={classes.navList}>
            <li className={classes.navListItem}>
              <IconButton onClick={() => changeIsActive(false)}>
                <CloseIcon fontSize="large" style={{ color: "white" }} />
              </IconButton>
            </li>
            {routes.map((route, i) => (
              <li className={classes.navListItem} key={i}>
                {route.submenu ? (
                  <>
                    <span>
                      {route.internal ? (
                        <>
                          <LocalizedLink
                            to={route.link}
                            className={classes.navLink}
                          >
                            {t(route.title)}
                          </LocalizedLink>
                          <IconButton
                            size="small"
                            onClick={() =>
                              setShowSubmenu({
                                ...showSubmenu,
                                [route.submenuSlug]: !showSubmenu[
                                  route.submenuSlug
                                ],
                              })
                            }
                          >
                            <ExpandMoreIcon style={{ color: "white" }} />
                          </IconButton>
                        </>
                      ) : (
                        <>
                          <a href={t(route.link)} className={classes.navLink}>
                            {t(route.title)}
                          </a>
                        </>
                      )}
                    </span>
                    <Box
                      className={`${classes.submenuBox} ${
                        showSubmenu[route.submenuSlug] ? "active" : ""
                      }`}
                    >
                      <ul className={classes.submenuList}>
                        {route.submenu.map((item, j) => (
                          <li className={classes.submenuItem} key={j}>
                            {item.internal ? (
                              <LocalizedLink
                                to={item.link}
                                className={classes.navLink}
                              >
                                {t(item.title)}
                              </LocalizedLink>
                            ) : (
                              <a
                                href={t(item.link)}
                                className={classes.navLink}
                              >
                                {t(item.title)}
                              </a>
                            )}
                          </li>
                        ))}
                      </ul>
                    </Box>
                  </>
                ) : (
                  <>
                    {route.internal ? (
                      <LocalizedLink
                        to={route.link}
                        className={classes.navLink}
                      >
                        {t(route.title)}
                      </LocalizedLink>
                    ) : (
                      <a href={t(route.link)} className={classes.navLink}>
                        {t(route.title)}
                      </a>
                    )}
                  </>
                )}
              </li>
            ))}
            <li className={classes.navListItem}>
              <Button
                variant="contained"
                color="primary"
                component={LocalizedLink}
                to="/exhibitor-registration"
              >
                {t("buttons.becomeAnExhibitor")}
              </Button>
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
