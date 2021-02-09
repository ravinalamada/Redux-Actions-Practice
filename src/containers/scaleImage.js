import { connect } from 'react-redux';
import ScaleImage from "../components/ScaleImage";
import {setImageScale} from '../actions/index';

//map the "setSpecialText" action function to a prop function called "set"
const mapDispatchToProps = {
  set: setImageScale
}

export default connect(null, mapDispatchToProps)(ScaleImage);
