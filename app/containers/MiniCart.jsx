import { connect } from 'react-redux';
import MiniCart from '../components/MiniCart';

function mapStateToProps(state) {
    return {
        cart: state.cart,
        loginUser: state.loginUser
    }
}

export default connect(
    mapStateToProps
)(MiniCart);