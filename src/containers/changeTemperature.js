import {connect} from 'react-redux';
import ChangeTemperature from '../components/ChangeTemperature';
import {setCurrentTemp} from '../actions/index'

const mapToDispatch = {
  set: setCurrentTemp
}

export default connect(null ,mapToDispatch)(ChangeTemperature)
