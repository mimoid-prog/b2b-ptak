const path = require("path");

require("dotenv").config({
  path: `../.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `B2B Ptak`,
    description: `Testowa strona dla Ptak Warsaw Expo`,
    author: `Mateusz Szkop`,
  },
  proxy: {
    prefix: "/api",
    url: "http://localhost:4000",
  },
  plugins: [
    `gatsby-plugin-layout`,
    `gatsby-transformer-json`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        src: path.join(__dirname, "src"),
        pages: path.join(__dirname, "src/pages"),
        pagesContent: path.join(__dirname, "src/pagesContent"),
        components: path.join(__dirname, "src/components"),
        images: path.join(__dirname, "src/images"),
        layouts: path.join(__dirname, "src/layouts"),
        styles: path.join(__dirname, "src/styles"),
        utils: path.join(__dirname, "src/utils"),
        fonts: path.join(__dirname, "src/fonts"),
        i18n: path.join(__dirname, "src/i18n"),
      },
    },
    {
      resolve: `gatsby-source-mongodb`,
      options: {
        connectionString: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}`,
        dbName: process.env.DB_NAME,
        collection: `companies`,
      },
    },
    {
      resolve: `gatsby-source-mongodb`,
      options: {
        connectionString: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}`,
        dbName: process.env.PTAK_DEV_NAME,
        collection: `globals`,
      },
    },
  ],
};
