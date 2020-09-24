import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
//import Greetings from "../Greetings";
//import Counter from "../Counter";
import Header from "../Header";
import theme from "./theme";
import { ThemeProvider } from "@material-ui/core/styles";
export default function App() {
  return (
    /*<article>
      <Greetings firstname="Guillaume" lastname="Bernus" />
      <Greetings firstname="Loulou" />
      <Counter beginAt={4} />
      <Counter />
    </article>*/

    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header title="Homepage" />
      <article>MAIN</article>
    </ThemeProvider>
  );
}
