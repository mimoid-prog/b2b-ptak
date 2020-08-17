import React from "react";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@material-ui/styles";
import { Box, IconButton } from "@material-ui/core";
import { LanguageLink } from "components";
import UKFlag from "images/icons/uk.svg";
import PLFlag from "images/icons/pl.svg";
import LocaleContext from "src/localeContext";

const useStyles = makeStyles(theme => ({
  root: {},
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

const Languages = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  const pages = require("i18n/pages");

  const { locale, pageSlug } = React.useContext(LocaleContext);
  const pageLanguages = pages[pageSlug];

  return (
    <Box className={classes.root}>
      {Object.keys(pageLanguages).map((lang, i) => (
        <React.Fragment key={i}>
          {lang !== locale && pages[pageSlug][lang].active === true && (
            <IconButton
              component={LanguageLink}
              lang={lang}
              className={classes.flagIconButton}
            >
              {lang === "pl" && (
                <img src={PLFlag} className={classes.flagIcon} alt="flag" />
              )}
              {lang === "en" && (
                <img src={UKFlag} className={classes.flagIcon} alt="flag" />
              )}
            </IconButton>
          )}
        </React.Fragment>
      ))}
    </Box>
  );
};

export default Languages;
