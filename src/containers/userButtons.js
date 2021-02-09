import {connect} from 'react-redux';
import UserButtons from '../components/UserButtons';
import {addUsers,removeUsers } from '../actions/index'

const mapToDispatch = {
  add: addUsers,
  remove: removeUsers,
}


export default connect(null ,mapToDispatch)(UserButtons)
