import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
//import Greetings from "../Greetings";
//import Counter from "../Counter";
import Header from "../Header";
import theme from "./theme";
import { ThemeProvider } from "@material-ui/core/styles";
import SushiCardList from "../SushiCardList";
import useStyles from "./styles";
export default function App() {
  const classes = useStyles();
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
      <div className={classes.offset} />
      <article>
        <SushiCardList />
      </article>
    </ThemeProvider>
  );
}
