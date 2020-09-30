import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import theme from "./theme";
import { ThemeProvider } from "@material-ui/core/styles";

import HomeScreen from "../HomeScreen";
import BasketScreen from "../BasketScreen";
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Switch>
          <Route exact path="/basket" component={BasketScreen} />
          <Route exact path="/" component={HomeScreen} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}
