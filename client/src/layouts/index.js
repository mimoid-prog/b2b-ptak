import React from "react";
import PropTypes from "prop-types";
import theme from "src/theme";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import withI18next from "i18n/withI18next";

const IndexLayout = ({ children }) => {
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
