//reducer is our cashier

//typically container two things:

// 1) the initial state
const initialState = {
  todos: [],
};

// 2) the reducer itself
//reducer is just performing some logic on the dispatched action
//reducer performs the switch case and checks the "action" type, once the type is determined, moves into the related block statement
const reducer = (state = initialState, action) => {
  console.log("reducer");
  switch (action) {
    case "ADD_TO_DO":
      return { todos: [state] };
      break;
    default:
      return state;
  }
};

export default reducer;
