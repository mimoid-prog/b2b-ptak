import React from "react";
import { Link } from "gatsby";
import LocaleContext from "src/localeContext";
import pages from "i18n/pages";

const LocalizedLink = ({ to, ...props }) => {
  const { locale } = React.useContext(LocaleContext);
  const path = pages[to][locale].slug;

  return pages[to][locale].active ? <Link {...props} to={path} /> : null;
};

export default LocalizedLink;
