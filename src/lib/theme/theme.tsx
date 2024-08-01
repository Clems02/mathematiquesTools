"use client";

import { defaultColor } from "@/src/data/configSite";
import { colors, createTheme, lighten, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { PropsWithChildren } from "react";

const Theme = ({ children }: PropsWithChildren) => {
  const theme = createTheme({
    typography: {
      fontFamily: "inherit",
    },
    palette: {
      primary: {
        main: defaultColor,
      },
      secondary: {
        main: colors.orange[700],
      },
    },
  });

  const finalTheme = createTheme({
    ...theme,
    components: {
      MuiButton: {
        defaultProps: {
          variant: "contained",
        },
      },

      MuiTableRow: {
        styleOverrides: {
          root: {
            "&.MuiTableRow-hover:hover": {
              backgroundColor: lighten(theme.palette.primary.main, 0.85),
            },
          },
        },
      },
    },
  });

  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={finalTheme}>{children}</ThemeProvider>
    </AppRouterCacheProvider>
  );
};

export default Theme;
