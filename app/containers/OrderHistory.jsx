import { connect } from 'react-redux';
import OrderHistory from '../components/OrderHistory';

function mapStateToProps(state) {
    return {
        orderHistory: state.orderHistory
    }
}

export default connect(
    mapStateToProps
)(OrderHistory);