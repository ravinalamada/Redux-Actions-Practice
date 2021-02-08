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
export function setSearchText(thing){
  return {
    type: 'SET_SEARCH_TEXT',
    payload: thing
  }
}
export function setCurrentCity(thing){
  return {
    type: 'SET_CURRENT_CITY',
    payload: thing
  }
}

export function setCurrentTemp(thing){
  return {
    type: 'SET_CURRENT_TEMP',
    payload: thing
  }
}

export function setCurrentUserSort(thing){
  return {
    type: 'SEt_CURRENT_USER_SORT',
    payload: thing
  }
}
export function setDisplayModal(thing){
  return {
    type: 'SEt_DISPLAY_MODAL',
    payload: thing
  }
}
export function setImageUrl(thing){
  return {
    type: 'SEt_IMAGE_URL',
    payload: thing
  }
}
export function setImageScale(thing){
  return {
    type: 'SEt_IMAGE_SCALE',
    payload: thing
  }
}

export function addUsers(thing){
  return {
    type: 'ADD_USERS',
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


