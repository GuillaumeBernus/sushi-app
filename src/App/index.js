import React from "react";
import Greetings from "../Greetings";
import Counter from "../Counter";

export default function App() {
  return (
    <article>
      <Greetings firstname="Guillaume" lastname="Bernus" />
      <Greetings firstname="Loulou" />
      <Counter beginAt={4} />
      <Counter />
    </article>
  );
}
