const path = require(`path`);
const pages = require("./src/i18n/pages");

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  const pathNoTrailingSlash =
    page.path === `/` ? page.path : page.path.replace(/\/$/, ``);

  if (pages.hasOwnProperty(pathNoTrailingSlash)) {
    deletePage(page);

    Object.keys(pages[pathNoTrailingSlash]).map(lang => {
      let localizedPath = pages[pathNoTrailingSlash][lang].slug;

      if (pages[pathNoTrailingSlash][lang].active) {
        const newPage = {
          ...page,
          path: localizedPath,
          context: {
            ...page.context,
            locale: lang,
            pageSlug: pathNoTrailingSlash,
          },
        };

        return createPage(newPage);
      }
    });
  }
};
