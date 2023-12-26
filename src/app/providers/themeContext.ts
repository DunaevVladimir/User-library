import React from "react";

export const themes = {
  light: {
    color: "#000",
    backgroundColor: "#eee",
  },
  dark: {
    color: "#fff",
    backgroundColor: "#222",
  }
};

export const ThemeContext = React.createContext(themes.light);