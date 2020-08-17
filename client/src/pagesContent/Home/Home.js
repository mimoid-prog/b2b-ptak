import React from "react";
import SEO from "utils/SEO";
import { useTranslation } from "react-i18next";
import { Header, StickyBar, Partners } from "./components";
import { Footer } from "components";
import { Box } from "@material-ui/core";

const Home = () => {
  const { t } = useTranslation();

  return (
    <Box>
      <SEO title={t("global.name")} />
      <Header />
      <StickyBar />
      <Partners />
      <Footer />
    </Box>
  );
};

export default Home;
