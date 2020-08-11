import React from "react";
import SEO from "utils/seo";
import { useTranslation } from "react-i18next";
import { Header, StickyBar } from "./components";
import { Box, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  test: {
    color: theme.palette.primary.main,
  },
}));

const Home = () => {
  const { t } = useTranslation();
  const classes = useStyles();

  return (
    <Box>
      <SEO title={t("global.name")} />
      <Header />
      <StickyBar />
    </Box>
  );
};

export default Home;
