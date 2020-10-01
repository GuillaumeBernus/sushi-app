import { createStore } from "redux";
import { basket } from "../addToBasket/reducer";
import { devToolsEnhancer } from "redux-devtools-extension";

export default createStore(basket, devToolsEnhancer());
