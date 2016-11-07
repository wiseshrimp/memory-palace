import { connect } from 'react-redux';
import EditUserPage from '../components/EditUserPage';
import { updateUserInfo } from '../actions/login-actions';

function mapStateToProps(state) {
  return {
    loginUser: state.loginUser
  }
}

function mapDispatchToProps(dispatch) {
  return {
      update: (userCred, userId) => {
          dispatch(updateUserInfo(userCred, userId))
      }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditUserPage);
