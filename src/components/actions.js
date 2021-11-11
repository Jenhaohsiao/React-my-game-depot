//actions are instructions to the reducer

//using a action creator function, we will call the action, and then return an object which looks like:
// {
//     type: "DEPOSIT_MONEY",
//     payload: thingHere
// }

//we're going to call this function within our component, and this function is going to be like "Reducer! Add this Task! The value of it is 'todo' "

export const addToDo = (todo) => ({
  type: "ADD_TO_DO",
  payload: { todo },
});
