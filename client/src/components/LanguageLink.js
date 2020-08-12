import React from "react";
import { Link } from "gatsby";
import LocaleContext from "src/localeContext";
import pages from "i18n/pages";

const LanguageLink = ({ lang, ...props }) => {
  const { pageSlug } = React.useContext(LocaleContext);
  const pathname = pages[pageSlug][lang].slug;

  return <Link {...props} to={pathname} />;
};

export default LanguageLink;
