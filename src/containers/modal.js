import {connect} from 'react-redux';
import Modal from '../components/Modal';
import {setDisplayModal} from '../actions/index'

const mapToDispatch = {
  toggleModal: setDisplayModal
}

function mapStateToProps(state) {
  return {
    displayModal: state.displayModal
  }
}

export default connect(mapStateToProps, mapToDispatch)(Modal)
