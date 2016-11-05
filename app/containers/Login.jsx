import { connect } from 'react-redux';
import Login from '../components/Login';
import { fetchLoginUser, logoutUser } from '../actions/login-actions';

function mapStateToProps(state) {
    return {
        currentUser: state.loginUser
    }
}

function mapDispatchToProps(dispatch) {
    return {
        login: (userCred) => {
            dispatch(fetchLoginUser(userCred))
        },
        logout: () => {
            dispatch(logoutUser())
        }
        
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
