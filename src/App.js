import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemPage1 from "./items/ItemPage1";
import ItemPage2 from "./items/ItemPage2";
import ItemPage3 from "./items/ItemPage3";
import ItemPage4 from "./items/ItemPage4";
import ItemPage5 from "./items/ItemPage5";
import ItemPage6 from "./items/ItemPage6";
import ItemPage7 from "./items/ItemPage7";
import { createTheme, ThemeProvider } from "@mui/material";
import HomePage from "./HomePage";
import Header from "./Header";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/ItemPage1" element={<ItemPage1 />} />
          <Route exact path="/ItemPage2" element={<ItemPage2 />} />
          <Route exact path="/ItemPage3" element={<ItemPage3 />} />
          <Route exact path="/ItemPage4" element={<ItemPage4 />} />
          <Route exact path="/ItemPage5" element={<ItemPage5 />} />
          <Route exact path="/ItemPage6" element={<ItemPage6 />} />
          <Route exact path="/ItemPage7" element={<ItemPage7 />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
