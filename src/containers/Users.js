import {connect} from 'react-redux';
import Users from '../components/Users';
import {addUsers} from '../actions/index'

function mapStateToProps(state){
    return {
        users: state.users,
    }
}

const mapToDispatch = {
  addUsers
}


export default connect(mapStateToProps, mapToDispatch)(Users)
