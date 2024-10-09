/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  prefix: "tw-",
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        surface: {
          50: "var(--theme-surface-50)",
          100: "var(--theme-surface-100)",
          200: "var(--theme-surface-200)",
          300: "var(--theme-surface-300)",
          400: "var(--theme-surface-400)",
          500: "var(--theme-surface-500)",
          600: "var(--theme-surface-600)",
          700: "var(--theme-surface-700)",
          800: "var(--theme-surface-800)",
          900: "var(--theme-surface-900)",
          A100: "var(--theme-surface-A100)",
          A200: "var(--theme-surface-A200)",
          A400: "var(--theme-surface-A400)",
          A700: "var(--theme-surface-A700)",
        },
        primary: {
          50: "var(--theme-primary-50)",
          100: "var(--theme-primary-100)",
          200: "var(--theme-primary-200)",
          300: "var(--theme-primary-300)",
          400: "var(--theme-primary-400)",
          500: "var(--theme-primary-500)",
          600: "var(--theme-primary-600)",
          700: "var(--theme-primary-700)",
          800: "var(--theme-primary-800)",
          900: "var(--theme-primary-900)",
          A100: "var(--theme-primary-A100)",
          A200: "var(--theme-primary-A200)",
          A400: "var(--theme-primary-A400)",
          A700: "var(--theme-primary-A700)",
        },
        error: {
          50: "var(--theme-error-50)",
          100: "var(--theme-error-100)",
          200: "var(--theme-error-200)",
          300: "var(--theme-error-300)",
          400: "var(--theme-error-400)",
          500: "var(--theme-error-500)",
          600: "var(--theme-error-600)",
          700: "var(--theme-error-700)",
          800: "var(--theme-error-800)",
          900: "var(--theme-error-900)",
          A100: "var(--theme-error-A100)",
          A200: "var(--theme-error-A200)",
          A400: "var(--theme-error-A400)",
          A700: "var(--theme-error-A700)",
        },
        warning: {
          50: "var(--theme-warning-50)",
          100: "var(--theme-warning-100)",
          200: "var(--theme-warning-200)",
          300: "var(--theme-warning-300)",
          400: "var(--theme-warning-400)",
          500: "var(--theme-warning-500)",
          600: "var(--theme-warning-600)",
          700: "var(--theme-warning-700)",
          800: "var(--theme-warning-800)",
          900: "var(--theme-warning-900)",
          A100: "var(--theme-warning-A100)",
          A200: "var(--theme-warning-A200)",
          A400: "var(--theme-warning-A400)",
          A700: "var(--theme-warning-A700)",
        },
        success: {
          50: "var(--theme-success-50)",
          100: "var(--theme-success-100)",
          200: "var(--theme-success-200)",
          300: "var(--theme-success-300)",
          400: "var(--theme-success-400)",
          500: "var(--theme-success-500)",
          600: "var(--theme-success-600)",
          700: "var(--theme-success-700)",
          800: "var(--theme-success-800)",
          900: "var(--theme-success-900)",
          A100: "var(--theme-success-A100)",
          A200: "var(--theme-success-A200)",
          A400: "var(--theme-success-A400)",
          A700: "var(--theme-success-A700)",
        },
        info: {
          50: "var(--theme-info-50)",
          100: "var(--theme-info-100)",
          200: "var(--theme-info-200)",
          300: "var(--theme-info-300)",
          400: "var(--theme-info-400)",
          500: "var(--theme-info-500)",
          600: "var(--theme-info-600)",
          700: "var(--theme-info-700)",
          800: "var(--theme-info-800)",
          900: "var(--theme-info-900)",
          A100: "var(--theme-info-A100)",
          A200: "var(--theme-info-A200)",
          A400: "var(--theme-info-A400)",
          A700: "var(--theme-info-A700)",
        },
      },
    },
  },
  plugins: [],
};
