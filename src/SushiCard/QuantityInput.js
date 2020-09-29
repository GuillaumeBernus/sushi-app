import React from "react";
import { IconButton, Input } from "@material-ui/core";
import { AddBox, IndeterminateCheckBox } from "@material-ui/icons";

import { number, func } from "prop-types";

function Button({ onClick, label, Icon }) {
  return (
    <IconButton aria-label={label} size="medium" onClick={onClick}>
      <Icon fontSize="inherit" />
    </IconButton>
  );
}
export default function QuantityInput({ quantity, inc, set, dec }) {
  return (
    <>
      {dec && (
        <Button
          label="supprimer"
          onClick={() => dec()}
          Icon={IndeterminateCheckBox}
        />
      )}
      <Input
        onChange={(event) => set(event.target.value)}
        name="quantity"
        value={quantity}
        inputProps={{ "aria-label": "quantity" }}
      />
      {inc && (
        <Button aria-label="ajouter" onClick={() => inc()} Icon={AddBox} />
      )}
    </>
  );
}
QuantityInput.propTypes = {
  quantity: number,
  inc: func,
  set: func,
  dec: func,
};
QuantityInput.defaultProps = {
  quantity: 0,
  set: Function.prototype,
};
