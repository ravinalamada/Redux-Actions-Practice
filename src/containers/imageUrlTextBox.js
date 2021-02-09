import {connect} from 'react-redux';
import {setImageUrl} from '../actions/index';
import ImageUrlTextBox from '../components/ImageUrlTextBox';

const mapToDispatch = {
  set : setImageUrl,
}

export default connect(null ,mapToDispatch)(ImageUrlTextBox);



