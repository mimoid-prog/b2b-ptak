import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

import breakpoints from "./breakpoints";
import palette from "./palette";
import typography from "./typography";
import overrides from "./overrides";

let theme = createMuiTheme({
  palette,
  typography,
  overrides,
  breakpoints,
});

export default theme;
