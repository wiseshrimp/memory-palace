import { connect } from 'react-redux';
import Navbar from '../components/Navbar';

function mapStateToProps(state) {
    return {
        loginUser: state.loginUser
    }
}

export default connect(mapStateToProps)(Navbar);