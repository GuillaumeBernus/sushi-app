import React from "react";
import { useList } from "react-use";
import Screen from "../Screen";
import Button from "@material-ui/core/Button";
import BasketItemList from "../BasketItemList";
export default function BasketScreen() {
  const [addedSushis, { removeAt, clear }] = useList([
    { id: 1, title: "maki 1" },
    { id: 2, title: "maki 2" },
    { id: 3, title: "maki 3" },
    { id: 4, title: "maki 4" },
    { id: 5, title: "maki 5" },
  ]);
  const buy = () => {
    clear();
    console.log(addedSushis);
    console.log("POST /payment");
  };
  return (
    <Screen title="Basket">
      <BasketItemList sushis={addedSushis} removeAt={removeAt} />
      <Button variant="contained" color="primary" onClick={buy}>
        Commander
      </Button>
    </Screen>
  );
}
