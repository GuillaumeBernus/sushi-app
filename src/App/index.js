import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Provider } from "react-redux";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import theme from "./theme";
import { ThemeProvider } from "@material-ui/core/styles";

import routes from "./routes";
import store from "./store";
export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Switch>
            {Object.keys(routes).map((routeName) => {
              const { path, component } = routes[routeName];
              return (
                <Route exact path={path} component={component} key={path} />
              );
            })}
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}
