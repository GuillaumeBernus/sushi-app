import { connect } from "react-redux";

//pour la v2
//import { bindActionCreators } from "redux";
import { addToBasket } from "../addToBasket/actions";
import SushiCard from "./component";

//version 1 - base
// const mapDispatchToProps = (dispatch) => ({
//   addToBasket: (sushiId, quantity) => dispatch(addToBasket(sushiId, quantity)),
// });

//version 2 - redux
// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators({ addToBasket }, dispatch);

//version 3 - react-redux
const mapDispatchToProps = { addToBasket };

export default connect(null, mapDispatchToProps)(SushiCard);
