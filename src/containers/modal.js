import {connect} from 'react-redux';
import Modal from '../components/Modal';

function mapStateToProps(state) {
  return {
    displayModal: state.displayModal
  }
}

export default connect(mapStateToProps)(Modal)
