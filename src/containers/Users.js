import {connect} from 'react-redux';
import Users from '../components/Users';

function mapStateToProps(state){
  // console.log(state.users);
    return {
      users: state.users,
      sortOn: state.Users,
      firstNameFilter: state.searchText
    }
}

export default connect(mapStateToProps, null)(Users)
