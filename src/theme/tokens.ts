export const tokens = {
  fonts: {
    sans: '"Helvetica Neue", Arial, sans-serif',
    serif: 'Georgia, "Times New Roman", serif',
    mono: '"SFMono-Regular", Consolas, monospace',
  },
  space: {
    2: "0.5rem",
    4: "1rem",
    6: "1.5rem",
    8: "2rem",
    12: "3rem",
    16: "4rem",
    24: "6rem",
  },
  radius: { card: "1.25rem", pill: "999px" },
  layout: { max: "1160px" },
  motion: { normal: "280ms" },
  colors: {
    light: {
      bg: "#faf7f2",
      surface: "#ffffff",
      text: "#302c2d",
      muted: "#70666a",
      border: "#e5ddd7",
      accent: "#713e4b",
      soft: "#f0e3e2",
    },
    dark: {
      bg: "#211b20",
      surface: "#2c242b",
      text: "#f8f0e8",
      muted: "#c4b6ba",
      border: "#493a44",
      accent: "#e2b6c0",
      soft: "#392730",
    },
  },
} as const;
export type Theme = keyof typeof tokens.colors;
