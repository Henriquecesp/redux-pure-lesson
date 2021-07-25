// Import redux e create store
const redux = require("redux")
const createStore = redux.createStore

// Actions e Actions TYPE
const CHANGE_USER = 'CHANGE_USER';
const LOGOUT = 'LOGOUT';

// Actions
function changeUser(user) {
  return {
    type: CHANGE_USER,
    info: "Change the current user",
    payload: user
  }
}

function logout() {
  return {
    type: LOGOUT,
    info: "Logout the current user",
  }
}

const initialState = {
  user: '',
  isLogged: false,
}

// Reducers
function userReducer(prevState = initialState, action) {
  switch (action.type) {
    case CHANGE_USER:
      return {
        ...prevState,
        user: action.payload,
        isLogged: true,
      }
    case LOGOUT:
      return {
        ...prevState,
        user: '',
        isLogged: false
      }
    default:
      return prevState
  }
}

// Store
const store = createStore(userReducer)

console.log("Initial state", store.getState())
store.dispatch(changeUser("Cespdev"))
console.log("New state", store.getState())
store.dispatch(logout())
console.log("New state", store.getState())
