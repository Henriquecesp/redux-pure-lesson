const redux = require("redux")
const createStore = redux.createStore;

// Actions type
const CHANGE_USER = 'CHANGE_USER';
const LOGOUT = 'LOGOUT';

// Actions
function changeUser(user){
  return {
    type: CHANGE_USER,
    info: "Change the current user",
    payload: user
  }
}

function logout(){
  return {
    type: LOGOUT,
    info: 'Logout the current user'
  }
}

// Initial State
const initialStateUser = {
  user: "",
  isLogged: false
}

// Reducer
const userReducer = (state = initialStateUser, action) => {
  switch(action.type){
    case CHANGE_USER:
      return {
        ...state,
        user: action.payload,
        isLogged: true
      }
    case LOGOUT:
      return {
        ...state,
        user: '',
        isLogged: false
      }
    default:
      return state;
  }
}

// Store
const store = createStore(userReducer);

// Store Get State
console.log("Initial State", store.getState());

// Dispatching Actions
store.dispatch(changeUser("Henrique"));
console.log("Changed State", store.getState());
store.dispatch(logout());
console.log("Logout State", store.getState());