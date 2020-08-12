import React from "react";
import SEO from "utils/seo";
import { useTranslation } from "react-i18next";
import { Header, StickyBar, Partners } from "./components";
import { Box } from "@material-ui/core";

const Home = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <SEO title={t("global.name")} />
      <Header />
      <StickyBar />
      <Partners />
    </Box>
  );
};

export default Home;
