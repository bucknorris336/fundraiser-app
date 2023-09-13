import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ItemPage from "./ItemPage"; // Import your ItemPage component
import DonationsPage from "./DonationsPage"; // Import your DonationsPage component
import { createTheme, ThemeProvider } from "@mui/material";
import HomePage from "./HomePage";
import Header from "./Header";

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/item/:itemId" component={ItemPage} />
          <Route path="/donations/:itemId" component={DonationsPage} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
