// This file allows configuring the visual identity of the hospital
// The actual CSS variables are injected in globals.css, but we can define them here to allow easier programmatic replacement later.
export const themeConfig = {
  colors: {
    primary: "185 70% 30%",       // Deep medical teal
    primaryForeground: "0 0% 100%",
    secondary: "220 50% 15%",     // Dark navy
    secondaryForeground: "0 0% 100%",
    background: "40 20% 98%",     // Warm white / off-white
    foreground: "220 20% 10%",    // Very dark charcoal
    muted: "220 10% 90%",
    mutedForeground: "220 10% 40%", // Soft grey
    border: "220 15% 90%",
    accent: "185 60% 90%",        // Light aqua
    accentForeground: "185 70% 20%",
    emergency: "350 70% 50%",     // Restrained medical red
    emergencyForeground: "0 0% 100%",
  },
  typography: {
    // Fonts are loaded via next/font in layout.tsx, but this is for reference
    heading: "var(--font-heading)", // Manrope / Sora
    body: "var(--font-body)",       // Inter
  },
  radius: {
    default: "0.5rem",
    button: "0.25rem",
    card: "1rem",
  }
};
