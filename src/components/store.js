//store is the Bank (all our state is "store"d here)

//import redux store
import { createStore } from "redux";
// import the reducer
import reducer from "./reducer";

//create global state here
//the store will exist in a gobal variable called 'store'
//function takes reducer as an argument (this is how we'll manipulate the state that is held within the store)
const store = createStore(reducer);

export default store;
