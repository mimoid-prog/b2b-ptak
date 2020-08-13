import React, { useEffect } from "react";
import PropTypes from "prop-types";
import theme from "src/theme";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import withI18next from "i18n/withI18next";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  "@global": {
    ".menu-active": {
      overflow: "hidden",
      [theme.breakpoints.up("md")]: {
        overflow: "auto",
      },
    },
    ul: {
      padding: 0,
    },
  },
});

const IndexLayout = ({ children, location, pageContext: { locale } }) => {
  const { i18n } = useTranslation();
  useStyles();

  useEffect(() => {
    i18n.changeLanguage(locale);
  }, [location, i18n, locale]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

IndexLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default withI18next()(IndexLayout);
