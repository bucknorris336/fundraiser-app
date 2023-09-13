import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import HomePage from "./HomePage";
import Header from "./Header";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <HomePage />
    </ThemeProvider>
  );
}

export default App;
