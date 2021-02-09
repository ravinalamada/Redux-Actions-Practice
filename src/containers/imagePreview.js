import {connect} from 'react-redux';
import ImagePreview from '../components/ImagePreview';

function mapStateToProps(state) {
  return {
    scale: state.imageScale,
    imageUrl: state.imageUrl
  }
}

export default connect(mapStateToProps)(ImagePreview)
