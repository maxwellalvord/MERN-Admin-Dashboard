export const tokensDark = {
  grey: {
    0: "#ffffff", // manually adjusted
    10: "#f6f6f6", // manually adjusted
    50: "#f0f0f0", // manually adjusted
    100: "#dcdcdc",
    200: "#b9b9b9",
    300: "#959595",
    400: "#727272",
    500: "#4f4f4f",
    600: "#3f3f3f",
    700: "#2f2f2f",
    800: "#202020",
    900: "#101010",
    1000: "#000000", // manually adjusted
  },
  blue: {
    100: "#d8dee2",
    200: "#b1bdc5",
    300: "#899ca8",
    400: "#627b8b",
    500: "#3b5a6e",
    600: "#2f4858",
    700: "#233642",
    800: "#18242c",
    900: "#0c1216"
  },
  green: {
    50: "#f0f0f0", // manually adjusted
    100: "#d7e1dd",
    200: "#afc4bb",
    300: "#88a698",
    400: "#608976",
    500: "#386b54",
    600: "#2d5643",
    700: "#224032",
    800: "#162b22",
    900: "#0b1511"
  },
};

function reverseTokens(tokensDark) {
  const reversedTokens = {};
  Object.entries(tokensDark).forEach(([key, val]) => {
    const keys = Object.keys(val);
    const values = Object.values(val);
    const length = keys.length;
    const reversedObj = {};
    for (let i = 0; i < length; i++) {
      reversedObj[keys[i]] = values[length - i - 1];
    }
    reversedTokens[key] = reversedObj;
  });
  return reversedTokens;
}
export const tokensLight = reverseTokens(tokensDark);

// mui theme settings
export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            // palette values for dark mode
            blue: {
              ...tokensDark.blue,
              main: tokensDark.blue[400],
              light: tokensDark.blue[400],
            },
            green: {
              ...tokensDark.green,
              main: tokensDark.green[300],
            },
            neutral: {
              ...tokensDark.grey,
              main: tokensDark.grey[500],
            },
            background: {
              default: tokensDark.blue[600],
              alt: tokensDark.blue[500],
            },
          }
        : {
            // palette values for light mode
            blue: {
              ...tokensLight.blue,
              main: tokensDark.grey[50],
              light: tokensDark.grey[100],
            },
            green: {
              ...tokensLight.green,
              main: tokensDark.green[600],
              light: tokensDark.green[700],
            },
            neutral: {
              ...tokensLight.grey,
              main: tokensDark.grey[500],
            },
            background: {
              default: tokensDark.grey[0],
              alt: tokensDark.grey[50],
            },
          }),
    },
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};