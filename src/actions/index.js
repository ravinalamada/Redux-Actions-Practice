// function that returns an action type and a text value
export function setSpecialText(thing){
  return {
    type: 'SET_SPECIAL_TEXT',
    payload: thing
  }
}
export function increase(){
  return {
    type: 'INCREASE'
  }
}
export function decrease(){
  return {
    type: 'DECREASE'
  }
}
export function setSearchUserOnFirstName(thing){
  return {
    type: 'SET_SEARCH_USER_ON_FIRST_NAME',
    payload: thing
  }
}
export function setSortNames(thing){
  return {
    type: 'SET_SORT_NAMES',
    payload: thing
  }
}

export function setCurrentCity(thing){
  return {
    type: 'SET_CURRENT_CITY',
    payload: thing
  }
}

export function setCurrentTemp(thing = 0){
  return {
    type: 'SET_CURRENT_TEMP',
    payload: thing
  }
}

export function setCurrentUserSort(thing){
  return {
    type: 'SET_CURRENT_USER_SORT',
    payload: thing
  }
}
export function setDisplayModal(){
  return {
    type: 'SET_DISPLAY_MODAL',
  }
}

export function setImageUrl(thing){
  return {
    type: 'SET_IMAGE_URL',
    payload: thing
  }
}
export function setImageScale(thing){
  return {
    type: 'SET_IMAGE_SCALE',
    payload: thing
  }
}

export function addUsers(thing){
  return {
    type: 'ADD_USERS',
    payload: thing
  }
}

export function removeUsers(thing){
  return {
    type: 'REMOVE_USERS',
    payload: thing
  }
}

export function fetchUsersLoading() {
    return {
        type: "FETCH_USERS_LOADING"
    }
}

export function fetchUsersSuccess(Users) {
    return {
        type: "FETCH_USERS_SUCCESS",
        Users: Users
    }
}

export function fetchUsersError(error) {
    return {
        type: "FETCH_USERS_ERROR",
        error: error
    }
}


