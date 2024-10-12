import { createTheme } from "@mui/material";

export const Theme = {
  light: {
    surface: {
      50: "#FFFFFF",
      100: "#F5F9FC",
      200: "#E1E9EE",
      300: "#CDD9E0",
      400: "#AFBCC4",
      500: "#8895A0",
      600: "#62707C",
      700: "#3D4852",
      800: "#25262E",
      900: "#1C1B22",
      A100: "#96AAB5",
      A200: "#3F6A81",
      A400: "#373E46",
      A700: "#0C0C0C",
    },
    primary: {
      50: "#EEFAFF",
      100: "#CFEDFA",
      200: "#9BD8F1",
      300: "#57C0E9",
      400: "#19ABE4",
      500: "#009CD8",
      600: "#0F6FA6",
      700: "#10598E",
      800: "#074979",
      900: "#003464",
      A100: "#82F8FF",
      A200: "#44DFFF",
      A400: "#29B2FF",
      A700: "#298BFF",
    },
    error: {
      50: "#FFEBEB",
      100: "#FFCDD2",
      200: "#EFA9AA",
      300: "#E57373",
      400: "#EF5350",
      500: "#F44336",
      600: "#E53935",
      700: "#D32F2F",
      800: "#C62828",
      900: "#B71C1C",
      A100: "#FFA8A0",
      A200: "#FF5252",
      A400: "#FF1744",
      A700: "#D50000",
    },
    warning: {
      50: "#FFF3E0",
      100: "#FFCCB2",
      200: "#FFCC80",
      300: "#FFB74D",
      400: "#FFA726",
      500: "#FF9800",
      600: "#FB8C00",
      700: "#F57C00",
      800: "#EF6C00",
      900: "#E65100",
      A100: "#FFD180",
      A200: "#FFAB40",
      A400: "#FF9100",
      A700: "#FF6D00",
    },
    success: {
      50: "#E8F5E9",
      100: "#C8E6C9",
      200: "#A5D6A7",
      300: "#81C784",
      400: "#66BB6A",
      500: "#4CAF50",
      600: "#43A047",
      700: "#388E3C",
      800: "#2E7D32",
      900: "#1B5E20",
      A100: "#B9F6CA",
      A200: "#69F0AE",
      A400: "#00E676",
      A700: "#00C853",
    },
    info: {
      50: "#E3F2FD",
      100: "#BBDEFB",
      200: "#90CAF9",
      300: "#64B5F6",
      400: "#42A5F5",
      500: "#2196F3",
      600: "#1E88E5",
      700: "#1976D2",
      800: "#1565C0",
      900: "#0D47A1",
      A100: "#82B1FF",
      A200: "#448AFF",
      A400: "#2979FF",
      A700: "#2962FF",
    },
  },
  dark: {
    surface: {
      50: "#25262E",
      100: "#3D4852",
      200: "#62707C",
      300: "#8895A0",
      400: "#AFBCC4",
      500: "#CDD9E0",
      600: "#E1E9EE",
      700: "#F5F9FC",
      800: "#FFFFFF",
      900: "#1C1B22",
      A100: "#96AAB5",
      A200: "#3F6A81",
      A400: "#373E46",
      A700: "#0C0C0C",
    },
    primary: {
      50: "#003464",
      100: "#074979",
      200: "#10598E",
      300: "#0F6FA6",
      400: "#009CD8",
      500: "#19ABE4",
      600: "#57C0E9",
      700: "#9BD8F1",
      800: "#CFEDFA",
      900: "#EEFAFF",
      A100: "#82F8FF",
      A200: "#44DFFF",
      A400: "#29B2FF",
      A700: "#298BFF",
    },
    error: {
      50: "#B71C1C",
      100: "#C62828",
      200: "#D32F2F",
      300: "#E53935",
      400: "#F44336",
      500: "#EF5350",
      600: "#E57373",
      700: "#EFA9AA",
      800: "#FFCDD2",
      900: "#FFEBEB",
      A100: "#FFA8A0",
      A200: "#FF5252",
      A400: "#FF1744",
      A700: "#D50000",
    },
    warning: {
      50: "#E65100",
      100: "#EF6C00",
      200: "#F57C00",
      300: "#FB8C00",
      400: "#FF9800",
      500: "#FFA726",
      600: "#FFB74D",
      700: "#FFCC80",
      800: "#FFCCB2",
      900: "#FFF3E0",
      A100: "#FFD180",
      A200: "#FFAB40",
      A400: "#FF9100",
      A700: "#FF6D00",
    },
    success: {
      50: "#1B5E20",
      100: "#2E7D32",
      200: "#388E3C",
      300: "#43A047",
      400: "#4CAF50",
      500: "#66BB6A",
      600: "#81C784",
      700: "#A5D6A7",
      800: "#C8E6C9",
      900: "#E8F5E9",
      A100: "#B9F6CA",
      A200: "#69F0AE",
      A400: "#00E676",
      A700: "#00C853",
    },
    info: {
      50: "#0D47A1",
      100: "#1565C0",
      200: "#1976D2",
      300: "#1E88E5",
      400: "#2196F3",
      500: "#42A5F5",
      600: "#64B5F6",
      700: "#90CAF9",
      800: "#BBDEFB",
      900: "#E3F2FD",
      A100: "#82B1FF",
      A200: "#448AFF",
      A400: "#2979FF",
      A700: "#2962FF",
    },
  },
};

export const registerTheme = (mode: "light" | "dark") => {
  const activeTheme = Theme[mode];
  let styleTag = document.getElementById("themeColor");
  if (!styleTag) {
    styleTag = document.createElement("style");
    styleTag.id = "themeColor";
  }

  let themeCssContent = `
    :root {

    `;

  Object.keys(activeTheme).forEach((key) => {
    const palette = activeTheme[key as keyof typeof activeTheme];
    Object.keys(palette).forEach((colorKey) => {
      const color = palette[colorKey as keyof typeof palette];
      if (colorKey) {
        themeCssContent =
          themeCssContent +
          `
              --theme-${key}-${colorKey}: ${color};`;
      }
    });
  });
  themeCssContent =
    themeCssContent +
    `
      }`;

  styleTag.textContent = themeCssContent;
  document.head.appendChild(styleTag);
};

export const registerThemeMui = (mode: "light" | "dark", dir: 'rtl' | 'ltr') => {
  return createTheme({
    direction: dir,
    palette: {
      mode,
      primary: {
        main: Theme[mode].primary[500],
        light: Theme[mode].primary[100],
      },
      error: {
        main: Theme[mode].error[500],
      },
      warning: {
        main: Theme[mode].warning[500],
      },
      success: {
        main: Theme[mode].success[500],
      },
      info: {
        main: Theme[mode].info[500],
      },
      background: {
        default: Theme[mode].surface[50], // رنگ پس‌زمینه عمومی
        paper: Theme[mode].surface[100], // رنگ برای مؤلفه‌های کاغذ مانند (Paper)
      },
      text: {
        primary: Theme[mode].primary[900], // رنگ پیش‌فرض متن‌ها
        secondary: Theme[mode].surface[700], // رنگ برای متن‌های ثانویه
      },
    },
  });
};
