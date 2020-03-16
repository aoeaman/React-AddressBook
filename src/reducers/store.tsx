import { createStore } from "redux";

const store = createStore(rootReducer);

const initialState = {
    Users: [],
    SelectedContact:null,
    
  };
  
  function rootReducer(state = initialState, action) {
    return state;
  };



















  export default store;