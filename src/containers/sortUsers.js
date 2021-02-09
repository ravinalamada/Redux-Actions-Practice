import {connect} from 'react-redux';
import SortUsers from '../components/SortUsers';
import {setCurrentUserSort} from '../actions/index'

const mapToDispatch = {
  set: setCurrentUserSort
}


export default connect(null ,mapToDispatch)(SortUsers)
