/**
 * Assuming there is global font-size of 16px
 * This is the browser default. But just to be sure,
 * we set it on html tag as well in global css
 */
const body = 16;

/**
 * We are using System UI theme specification: https://system-ui.com/theme
 * with one small change - we use objects instead of arrays.
 */

export const theme = {
  fontSizes: {
    1: 10 / body + "rem",
    2: 12 / body + "rem",
    3: 14 / body + "rem",
    4: 16 / body + "rem",
    5: 20 / body + "rem",
    6: 24 / body + "rem"
  },
  space: {
    '0': 0,    
    '3xs': (1 * 4) / body + "rem", 
    '2xs': (2 * 4) / body + "rem", 
    'xs': (3 * 4) / body + "rem",
    's': (4 * 4) / body + "rem",
    'm': (5 * 4) / body + "rem",
    'l': (6 * 4) / body + "rem",
    'xl': (7 * 4) / body + "rem",
    '2xl': (8 * 4) / body + "rem",
    '3xl': (9 * 4) / body + "rem",
    '4xl': (10 * 4) / body + "rem"
  },
  colors: {
    grays: {
      dark: "#333",
      light: "#888"
    },
    white: "#fff",
    red: "#e1270e",
    yellow: "#fbe80c",
    green: "#5bc266",
    blue: "#535bcf"
  }
};
