import React from "react";
import {
  Button,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
} from "@material-ui/core";

import useStyles from "./styles";

export default function SushiCard() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image="https://images.sweetauthoring.com/recipe/43926_2090.jpg"
        title="Paella dish"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Lizard Sashimi.
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Button size="small">Learn more</Button>
      </CardActions>
    </Card>
  );
}
