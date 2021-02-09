import {fetchUsersLoading, fetchUsersSuccess, fetchUsersError} from '../actions/index';

function fetchUsers() {
  return dispatch => {
      dispatch((fetchUsersLoading));
      fetch('ttps://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(res => {
        console.log(res)

          if(res.error) {
              throw(res.error);
          }
          dispatch(fetchUsersSuccess(res))
          return res;
      })
      .catch(error => {
          dispatch(fetchUsersError(error));
      })
  }
}

export default fetchUsers;
