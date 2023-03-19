// console.log("inside index.js")/
const redux = require("redux");
const createStore = redux.createStore;
const BUY_CAKE = "BUY_CAKE"; //STRING CONSTANTS TO AVOID TYPO ERROR

// Action is to buy a  cake from cake shop
// basics
//action creator returns an action
// action is an object with type property
// action only describe what should happen
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  };
}
// reducers -specify how the app state changes in response ti the actions sent to store
//reducers
// (previousState,action)=>newState
const initialState = {
  numOfCakes: 10,
  // numOfCakes: 10,
  // numOfCakes: 10,
  // numOfCakes: 10,
};

// reducerfunction accepts state and action as an arguments
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    default:
      return state;
  }
};

// onestore for entire application
/* 
it holds application state
allows access to state via getState();
Allows state to be updated via dispatch(action)
Registers listeners via subscribe (listener)
handles unregistering of listerns via the function returned by the subscribe(listener)
*/
const store = createStore(reducer);
console.log(initialState, store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("Updated state", store.getState())
);
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
unsubscribe();
