import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
//store


const history = [];
// Action name constants
const increment = "increment";
const decrement = "decrement";
const incrementByAmount = "incrementByAmount";

function reducer(state = { amount: 1 }, action) {
  if (action.type === increment) {
    //immutability
    return { amount: state.amount + 1 };
  }
  if (action.type === decrement) {
    //immutability
    return { amount: state.amount - 1 };
  }
  if (action.type === incrementByAmount) {
    //immutability
    return { amount: state.amount + action.payload };
  }
  return state;
}
//global state
// console.log(store.getState());


// action creators--------------------return object to reducer
function incremnt() {
  return { type: "increment" };
}
function decremnt() {
  return { type: "decrement" };
}

function incrementByAmt(value) {
  return { type: "incrementByAmount", payload: value };
}


// console.log(store.getState());

const store = createStore(reducer, applyMiddleware(logger.default));
store.subscribe(() => {
  console.log(store.getState());
});
//reducer
store.dispatch(incremnt()); //instead of sending object directly ,send it via function increment
store.dispatch(incrementByAmt(3));
store.dispatch({ type: incrementByAmount, payload: 14 });
store.dispatch({ type: incrementByAmount, payload: 14 });
store.dispatch({ type: increment });
store.dispatch({ type: decrement });
store.dispatch({ type: decrement });