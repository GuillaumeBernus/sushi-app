import { ADD_TO_BASKET } from "./actions";
const initialState = {
  basket: [],
};

export function basket(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_BASKET:
      const { sushiId, quantity } = action.payload;

      const itemIndex = state.basket.findIndex(
        (item) => item.sushiId === sushiId
      );

      const basket = [...state.basket];
      itemIndex === -1
        ? basket.push(action.payload)
        : (basket[itemIndex].quantity += quantity);

      // if (itemIndex === -1) {
      //   basket.push(action.payload);
      // } else {
      //   basket[itemIndex].quantity += quantity;
      // }

      return Object.assign({}, state, {
        basket,
      });
    default:
      return state;
  }
}
