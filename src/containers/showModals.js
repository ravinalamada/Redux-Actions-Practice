import {connect} from 'react-redux';
import ShowMoadals from '../components/ShowModal';
import {setDisplayModal} from '../actions/index'

const mapToDispatch = {
  toggleModal: setDisplayModal
}


export default connect(null ,mapToDispatch)(ShowMoadals)
