import React from "react";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@material-ui/styles";
import { Box, Typography } from "@material-ui/core";
import { useStaticQuery, graphql } from "gatsby";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    background: "#121212",
    color: theme.palette.white,
    display: "flex",
    flexDirection: "column-reverse",
    textAlign: "center",
    padding: theme.spacing(4, 0),
  },
  list: {
    margin: theme.spacing(0, 0, 4),
  },
  listItem: {
    marginBottom: theme.spacing(2),
    "&:last-child": {
      marginBottom: 0,
    },
  },
  link: {
    color: theme.palette.white,
  },
}));

const Bar = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  const data = useStaticQuery(graphql`
    query {
      allMongodbPtakGlobals {
        edges {
          node {
            label
            name
            value
          }
        }
      }
    }
  `).allMongodbPtakGlobals.edges;

  const linkPrivacy = data.filter(
    item => item.node.name === "link-privacy-pl"
  )[0].node.value;

  const linkFacilityRegulations = data.filter(
    item => item.node.name === "link-facility-regulations-pl"
  )[0].node.value;

  return (
    <Box className={classes.root}>
      <Typography variant="body2">© 2020 Ptak Warsaw Expo</Typography>
      <ul className={classes.list}>
        <li className={classes.listItem}>
          <a
            href={linkPrivacy}
            target="_blank"
            rel="noreferrer"
            className={classes.link}
          >
            {t("footer.linkOne")}
          </a>
        </li>
        <li className={classes.listItem}>
          <a
            href={linkFacilityRegulations}
            target="_blank"
            rel="noreferrer"
            className={classes.link}
          >
            {t("footer.linkTwo")}
          </a>
        </li>
      </ul>
    </Box>
  );
};

export default Bar;
