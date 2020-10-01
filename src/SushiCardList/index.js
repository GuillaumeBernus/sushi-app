import React from "react";
import { CircularProgress, Grid } from "@material-ui/core";

import SushiCard from "../SushiCard";
import useStyles from "./styles";
import { isEmpty } from "lodash";
import { string } from "prop-types";
import useSushis from "../useSushis";
export default function SushiCardList({ search }) {
  const classes = useStyles();
  const { isLoading, error, data: sushis } = useSushis(search);

  if (isLoading) return <CircularProgress color="secondary" />;

  if (error) return `error : ${error}!`;

  return (
    <Grid container spacing={2} className={classes.wrapper}>
      {isEmpty(sushis) && "Pas de sushis!!"}
      {sushis.map((sushi) => (
        <Grid item xs={6} md={3} key={sushi.id}>
          <SushiCard {...sushi} />
        </Grid>
      ))}
      {/* {sushis.map(({ id, image, title, description }) => (
        <Grid item xs={6} md={3} key={id}>
          <SushiCard
            image={image}
            title={title}
            description={description}
            id={id}
          />
        </Grid>
      ))} */}
    </Grid>
  );
}
SushiCardList.propList = {
  search: string,
};
