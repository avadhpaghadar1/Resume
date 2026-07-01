// theme.js
// Light/dark themes used across the whole app.

export const lightTheme = {
  body: "#F7F8FC",
  text: "#0B1220",
  expTxtColor: "#0B1220",
  highlight: "rgba(2, 6, 23, 0.06)",
  dark: "#0B1220",
  secondaryText: "#475569",
  imageHighlight: "#7C3AED",
  compImgHighlight: "rgba(124, 58, 237, 0.10)",
  jacketColor: "#7C3AED",
  headerColor: "rgba(124, 58, 237, 0.16)",
  splashBg: "#0B1220",
  surface: "rgba(255, 255, 255, 0.70)",
  surfaceStrong: "rgba(255, 255, 255, 0.92)",
  borderSubtle: "rgba(148, 163, 184, 0.25)",
};

export const darkTheme = {
  body: "#070A13",
  text: "#E6EAF2",
  expTxtColor: "#E6EAF2",
  highlight: "rgba(255, 255, 255, 0.06)",
  dark: "#1F2937",
  secondaryText: "rgba(226, 232, 240, 0.72)",
  imageHighlight: "#22C55E",
  compImgHighlight: "rgba(34, 197, 94, 0.14)",
  jacketColor: "#22C55E",
  headerColor: "rgba(34, 197, 94, 0.14)",
  splashBg: "#020617",
  surface: "rgba(255, 255, 255, 0.06)",
  surfaceStrong: "rgba(255, 255, 255, 0.09)",
  borderSubtle: "rgba(255, 255, 255, 0.12)",
};

// Backwards-compat: existing imports expect chosenTheme.
export const chosenTheme = lightTheme;
