import { navigate } from "gatsby";
import pages from "i18n/pages";

export default (url, lang, state) =>
  typeof window !== `undefined` ? navigate(pages[url][lang].slug, state) : null;
