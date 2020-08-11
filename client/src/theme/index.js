import { createMuiTheme } from "@material-ui/core";

import palette from "./palette";
import typography from "./typography";
import breakpoints from "./breakpoints";
import overrides from "./overrides";

const theme = createMuiTheme({
  palette,
  typography,
  overrides,
  breakpoints,
});

export default theme;
