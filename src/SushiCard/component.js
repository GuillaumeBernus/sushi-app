import React from "react";
import {
  Button,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
} from "@material-ui/core";
import { func, string, number } from "prop-types";
import { useCounter } from "react-use";
import config from "react-global-configuration";

import useStyles from "./styles";
import QuantityInput from "./QuantityInput";

export default function SushiCard({
  image,
  title,
  description,
  addToBasket,
  id,
}) {
  const classes = useStyles();

  const { min, max, defaultValue } = config.get("quantity");
  const [quantity, { inc, dec, set }] = useCounter(defaultValue, max, min);

  return (
    <Card className={classes.root}>
      {image && (
        <CardMedia className={classes.media} image={image} title={title} />
      )}
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title || "unknown"}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
        <QuantityInput quantity={quantity} inc={inc} dec={dec} set={set} />
      </CardContent>
      <CardActions disableSpacing>
        <Button size="small" onClick={() => addToBasket(id, quantity)}>
          Ajouter
        </Button>
      </CardActions>
    </Card>
  );
}

SushiCard.propTypes = {
  image: string,
  title: string,
  description: string,
  addToBasket: func,
  id: number.isRequired,
};
SushiCard.defaultProps = {
  image: "http://via.placeholder.com/400x300",
  title: "Maki",
  description: "Rice, fish, avocado,...",
  addToBasket: Function.prototype,
};
