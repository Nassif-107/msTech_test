export const COLORS = {
  background: "#0f0a2e",
  surface: "#1a1245",
  elevated: "#241b5e",
  primary: "#7a26ff",
  primaryLight: "#b380ff",
  gold: "#f5c842",
  amber: "#ffb020",
  white: "#ffffff",
  textPrimary: "#ffffff",
  textSecondary: "#a8a3c7",
  textMuted: "#6b6590",
  locked: "#3a3555",
  error: "#ff4d6a",
} as const;

export const GRADIENTS = {
  background: ["#0f0a2e", "#1a1245", "#0f0a2e"] as const,
  paywall: ["#1a0a3e", "#2d1b69", "#0f0a2e"] as const,
  button: ["#7a26ff", "#5a1adb"] as const,
  card: ["#1a1245", "#241b5e"] as const,
  gold: ["#f5c842", "#ffb020"] as const,
} as const;
