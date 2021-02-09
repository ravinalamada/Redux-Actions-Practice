import { combineReducers } from "redux";

// incomplete reducer function that checks an action prop type to detemine a counter number
function currentCount(state=0, action){
  switch(action.type) {
    case 'INCREASE':
      return state + 1
    case  'DECREASE':
      return state - 1
    default:
      return state;
  }
}

// incomplete reducer function that should check an action prop type to return an array of users
function users(users =[], action){
  switch(action.type) {
    case 'ADD_USERS':
      return [...users, action.payload]
    case  'REMOVE_USERS':
      return users.slice(0, users.length - 1)
    default:
      return users;

  }

}

function currentCity(state="", action){
  switch(action.type) {
    case 'SET_CURRENT_CITY':
      return action.payload;
    default:
      return state;

  }
}

function currentTemp(state=0, action){
  switch(action.type) {
    case 'SET_CURRENT_TEMP':
      return action.payload;
      default:
        return state;
  }
}

function displayModal(state=false, action){
  switch(action.type) {
     case 'SET_DISPLAY_MODAL':
       return !state
      default:
        return state;
  }
}

function imageUrl(state="", action){
  switch(action.type) {
    case 'SET_IMAGE_URL':
      return action.payload
    default:
      return state;
  }
}

function currentUserSort(state="first_name", action){
  console.log('this text',state);
  switch(action.type) {
    case 'SET_CURRENT_USER_SORT':
      return action.payload
    default:
      return state;
  }
}

function imageScale(state=1, action){
  switch(action.type) {
    case 'SET_IMAGE_SCALE':
      return action.payload
    default:
      return state
  }
}

function searchText(users="", action){
  switch(action.type) {
    case 'SET_SEARCH_USER_ON_FIRST_NAME':
      return action.payload.toLowerCase()
    default:
      return users;
  }

}

// complete reducer function that should check action prop type ""SET_SPECIAL_TEXT" to determine state value
function specialText(state="text", action){
  switch(action.type) {
    case 'SET_SPECIAL_TEXT':
      return  action.payload
    default:
      return state
  }
}

const initialState = {
  loading: false,
  users: [],
  error: null
}

export function usersReducer(state = initialState, action) {
  switch(action.type) {
      case  "FETCH_USERS_LOADING":
          return {
              ...state,
              loading: true
          }
      case "FETCH_USERS_SUCCESS":
          return {
              ...state,
              loading: false,
              users: action.payload
          }
      case "FETCH_USERS_ERROR":
          return {
              ...state,
              loading: false,
              error: action.error
          }
      default:
          return state;
  }
}


export const reducers = combineReducers({
  currentCount,
  specialText,
  currentCity,
  searchText,
  currentTemp,
  displayModal,
  imageUrl,
  currentUserSort,
  imageScale,
  users
});
