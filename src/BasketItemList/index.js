import React from "react";
import {
  List,
  ListItemSecondaryAction,
  ListItem,
  ListItemText,
  IconButton,
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";

import { arrayOf, shape, number, string, func } from "prop-types";
export default function BasketItemList({ sushis, removeAt }) {
  return (
    <div>
      <List component="ol" aria-label="basket item list">
        {sushis.map(({ id, title }, index) => (
          <ListItem key={id}>
            <ListItemText primary={title} />
            <ListItemSecondaryAction>
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => removeAt(index)}
              >
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </div>
  );
}
BasketItemList.propTypes = {
  sushis: arrayOf(
    shape({
      id: number,
      title: string,
    })
  ),
  removeAt: func,
};
