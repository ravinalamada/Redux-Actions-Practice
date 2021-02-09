import {connect} from 'react-redux';
import {setSearchUserOnFirstName} from '../actions/index';
import SearchTextBox from '../components/SearchTextBox';

const mapToDispatch = {
  set : setSearchUserOnFirstName,
}

export default connect(null ,mapToDispatch)(SearchTextBox);



