import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@material-ui/styles";
import { Box, Container, Button, IconButton, Drawer } from "@material-ui/core";
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
import { red } from "@material-ui/core/colors";

const pages = require("i18n/pages");

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ptakUfiLogoBox: {
    display: "flex",
    alignItems: "center",
  },
  ptakUfiLogo: {
    width: "120px",
  },
  navigation: {
    height: "100%",
    width: "80vw",
    padding: theme.spacing(0, 3),
  },
  drawer: {
    "& .MuiPaper-root": {
      background: theme.palette.veryDarkGray,
    },
  },
  navList: {
    display: "flex",
    flexDirection: "column",
    textAlign: "left",
    listStyle: "none",
    margin: 0,
    padding: theme.spacing(2, 0, 4),
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
    fontSize: "16px",
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
  closeBtnBox: {
    display: "flex",
    justifyContent: "flex-end",
  },
  [theme.breakpoints.up("xl")]: {
    openBtn: {
      display: "none",
    },
  },
}));

const Navbar = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  const { locale, pageSlug } = React.useContext(LocaleContext);

  const pageLanguages = pages[pageSlug];

  const [isDrawer, setIsDrawer] = useState(false);
  const [showSubmenu, setShowSubmenu] = useState(submenusObject);

  const toggleDrawer = e => {
    if (e && e.type === "keydown" && (e.key === "Tab" || e.key === "Shift")) {
      return;
    }

    setIsDrawer(!isDrawer);
  };

  return (
    <Box className={classes.root}>
      <LocalizedLink to="/" className={classes.ptakUfiLogoBox}>
        <img
          src={ptakLogo}
          className={classes.ptakUfiLogo}
          alt="Ptak Warsaw Expo Logo"
        />
      </LocalizedLink>
      <IconButton onClick={e => toggleDrawer(e)} className={classes.openBtn}>
        <MenuIcon fontSize="large" style={{ color: "white" }} />
      </IconButton>
      <Drawer
        anchor="right"
        open={isDrawer}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
        className={classes.drawer}
      >
        <nav className={classes.navigation}>
          <ul className={classes.navList}>
            <li className={`${classes.navListItem} ${classes.closeBtnBox}`}>
              <IconButton
                onClick={e => toggleDrawer(e)}
                className={classes.openBtn}
              >
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
        </nav>
      </Drawer>
    </Box>
  );
};

export default Navbar;
