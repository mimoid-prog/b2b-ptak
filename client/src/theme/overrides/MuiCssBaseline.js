import fontRegularWOFF2 from "fonts/Poppins-Regular.woff2";
import fontRegularWOFF from "fonts/Poppins-Regular.woff";
import fontRegularTTF from "fonts/Poppins-Regular.ttf";
import fontRegularEOT from "fonts/Poppins-Regular.eot";

import fontBoldWOFF2 from "fonts/Poppins-Bold.woff2";
import fontBoldWOFF from "fonts/Poppins-Bold.woff";
import fontBoldTTF from "fonts/Poppins-Bold.ttf";
import fontBoldEOT from "fonts/Poppins-Bold.eot";

const FontRegular = {
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `
    url(${fontRegularWOFF2}) format('woff2'),
    url(${fontRegularWOFF}) format('woff'),
    url(${fontRegularTTF}) format('ttf'),
    url(${fontRegularEOT}) format('eot');
    `,
};

const FontBold = {
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 700,
  src: `
    url(${fontBoldWOFF2}) format('woff2'),
    url(${fontBoldWOFF}) format('woff'),
    url(${fontBoldTTF}) format('ttf'),
    url(${fontBoldEOT}) format('eot');
    `,
};

export default {
  "@global": {
    "@font-face": [FontRegular, FontBold],
  },
};
