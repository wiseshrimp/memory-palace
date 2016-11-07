import { connect } from 'react-redux';
import UserPage from '../components/UserPage';

function mapStateToProps(state) {
  return {
    loginUser: state.loginUser
  }
}

function mapDispatchToProps(dispatch) {
  return {
      // logout: () => {
      //     dispatch(logoutUser())
      }

}

export default connect(mapStateToProps)(UserPage);
