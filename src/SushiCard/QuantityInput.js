import React from "react";
import { Grid, IconButton, Input } from "@material-ui/core";
import { AddBox, IndeterminateCheckBox } from "@material-ui/icons";
import { number, func } from "prop-types";
import config from "react-global-configuration";

function Button({ onClick, label, disabled, Icon }) {
  return (
    <IconButton
      aria-label={label}
      size="medium"
      onClick={onClick}
      disabled={disabled}
    >
      <Icon fontSize="inherit" />
    </IconButton>
  );
}
export default function QuantityInput({ quantity, inc, set, dec }) {
  const { min, max } = config.get("quantity");
  const isDecrementable = quantity > min;
  const isIncrementable = quantity < max;
  return (
    <Grid container>
      <Grid item xs={4}>
        {dec && (
          <Button
            label="supprimer"
            onClick={() => dec()}
            Icon={IndeterminateCheckBox}
            disabled={!isDecrementable}
          />
        )}
      </Grid>
      <Grid item xs={4}>
        <Input
          onChange={(event) => set(event.target.value)}
          name="quantity"
          value={quantity}
          inputProps={{ "aria-label": "quantity" }}
        />
      </Grid>
      <Grid item xs={4}>
        {inc && (
          <Button
            aria-label="ajouter"
            onClick={() => inc()}
            Icon={AddBox}
            disabled={!isIncrementable}
          />
        )}
      </Grid>
    </Grid>
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
