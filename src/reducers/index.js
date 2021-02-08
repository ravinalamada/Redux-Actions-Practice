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
function users(state =[], action){
  if(action.type === 'ADD_USERS') {
    return [...state, action.payload]

  }
  return state;
}

function currentCity(state="", action){
  switch(action.type) {
    case 'SET_CURRENT_CITY':
      return action.payload;
    default:
      return state;

  }
}

function currentTemp(state=0){
  return state;
}

function displayModal(state=false){
  return state;
}

function imageUrl(state=""){
  return state
}

function currentUserSort(state="first_name"){
  return state;
}

function imageScale(state=1){
  return state
}

function searchText(state=""){
  return state;
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
