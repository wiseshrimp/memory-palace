import { connect } from 'react-redux';
import Navbar from '../components/Navbar';
import { logoutUser } from '../actions/login-actions';

function mapStateToProps(state) {
    return {
        loginUser: state.loginUser
    }
}

function mapDispatchToProps(dispatch) {
    return {
        logout: () => {
            dispatch(logoutUser())
        }
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);