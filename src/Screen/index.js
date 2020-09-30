import React from "react";
import Header from "../Header";
import { string, node } from "prop-types";
import useStyles from "./styles";

export default function Screen({ title, children }) {
  const classes = useStyles();

  return (
    <>
      <Header title={title} />
      <div className={classes.offset} />
      <article>{children}</article>
    </>
  );
}

Screen.propTypes = {
  title: string,
  children: node,
};
