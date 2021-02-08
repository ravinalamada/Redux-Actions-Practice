import {connect} from 'react-redux';
import CityDropDown from '../components/CityDropDown';
import { setCurrentCity } from '../actions/index'


const mapToDispatch = {
  set: setCurrentCity
}


export default connect(null ,mapToDispatch)(CityDropDown)
