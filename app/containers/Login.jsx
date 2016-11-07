import { connect } from 'react-redux';
import Login from '../components/Login';
import { fetchLoginUser, logoutUser } from '../actions/login-actions';
import { createUser } from '../actions/register-actions';

function mapStateToProps(state) {
    return {
        loginUser: state.loginUser
    }
}

function mapDispatchToProps(dispatch) {
    return {
        login: (userCred) => {
            dispatch(fetchLoginUser(userCred))
        },
        logout: () => {
            dispatch(logoutUser())
        },
        registerUser: (userCred) => {
            dispatch(createUser(userCred))
        }
        
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);
