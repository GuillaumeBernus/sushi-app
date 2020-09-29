import React from "react";
import {
  Button,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
} from "@material-ui/core";

import { string } from "prop-types";
import { useCounter } from "react-use";

import useStyles from "./styles";
import QuantityInput from "./QuantityInput";
export default function SushiCard({ image, title, description }) {
  const classes = useStyles();

  const [quantity, { inc, dec, set }] = useCounter(1, 10, 1);

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={image} title={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
        <QuantityInput quantity={quantity} inc={inc} dec={dec} set={set} />
      </CardContent>
      <CardActions disableSpacing>
        <Button size="small">Ajouter</Button>
      </CardActions>
    </Card>
  );
}

SushiCard.propTypes = {
  image: string,
  title: string,
  description: string,
};
SushiCard.defaultProps = {
  image: "https://images.sweetauthoring.com/recipe/43926_2090.jpg",
  title: "Maki",
  description: "Rice, fish, avocado,...",
};
