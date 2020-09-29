import React from "react";
import {
  Button,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  Input,
} from "@material-ui/core";

import useStyles from "./styles";
import { string } from "prop-types";

import { AddBox, IndeterminateCheckBox } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";

export default function SushiCard({ image, title, description }) {
  const classes = useStyles();
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
        <IconButton aria-label="delete" size="medium">
          <IndeterminateCheckBox fontSize="inherit" />
        </IconButton>
        <Input
          name="quantity"
          value={1}
          inputProps={{ "aria-label": "description" }}
        />
        <IconButton aria-label="add" size="medium">
          <AddBox fontSize="inherit" />
        </IconButton>
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
