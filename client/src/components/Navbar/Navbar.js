import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@material-ui/styles";
import { Box, Container, Button, IconButton, Drawer } from "@material-ui/core";
import ptakLogo from "images/ptak-white.png";
import { LocalizedLink } from "components";
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  ExpandMore as ExpandMoreIcon,
} from "@material-ui/icons";
import routes from "./routes";
import { submenusObject } from "./routes";
import Languages from "./Languages";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  desktopNav: {
    display: "none",
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
  navLink: {
    color: theme.palette.white,
    textDecoration: "none",
    fontSize: "16px",
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
  },
  closeBtnBox: {
    display: "flex",
    justifyContent: "flex-end",
  },
  [theme.breakpoints.up("xs")]: {
    navigation: {
      width: "360px",
    },
  },
  [theme.breakpoints.up("xl")]: {
    openBtn: {
      display: "none",
    },
    drawer: {
      display: "none",
    },
    desktopNav: {
      display: "block",
    },
    navigation: {
      width: "auto",
    },
    navList: {
      flexDirection: "row",
      alignItems: "center",
      minHeight: "auto",
      padding: 0,
    },
    navListItem: {
      margin: theme.spacing(0, 2.5, 0, 0),
      "&:hover > div": {
        display: "block",
      },
    },
    navLink: {
      fontSize: "16px",
    },
    becomeAnExhibitorBtn: {
      fontSize: "16px",
    },
    submenuBox: {
      display: "none",
      maxHeight: "none",
      height: "auto",
      marginTop: 0,
      padding: theme.spacing(2, 0, 0),
      position: "absolute",
      zIndex: 9999,
    },
    submenuList: {
      background: theme.palette.black,
      padding: theme.spacing(1),
    },
    submenuItem: {
      margin: 0,
      display: "flex",
      alignItems: "center",
      "& a": {
        display: "block",
        whiteSpace: "nowrap",
        padding: theme.spacing(0.8, 1.5),
        fontSize: "16px",

        "&:hover": {
          color: "rgba(255, 255, 255, 0.5)",
        },
      },
    },
  },
}));

const Navbar = () => {
  const { t } = useTranslation();
  const classes = useStyles();

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
              <Languages />
            </li>
          </ul>
        </nav>
      </Drawer>
      <Box className={classes.desktopNav}>
        <nav className={classes.navigation}>
          <ul className={classes.navList}>
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
                          <ExpandMoreIcon
                            fontSize="small"
                            style={{ color: "white" }}
                          />
                        </>
                      ) : (
                        <>
                          <a href={t(route.link)} className={classes.navLink}>
                            {t(route.title)}
                          </a>
                        </>
                      )}
                    </span>
                    <Box className={classes.submenuBox}>
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
                className={classes.becomeAnExhibitorBtn}
                component={LocalizedLink}
                to="/exhibitor-registration"
              >
                {t("buttons.becomeAnExhibitor")}
              </Button>
            </li>
            <li>
              <Languages />
            </li>
          </ul>
        </nav>
      </Box>
    </Box>
  );
};

export default Navbar;
