import { connect } from 'react-redux';
import ProductList from '../components/ProductList';

function mapStateToProps(state) {
    return {
        products: state.products
    }
}


export default connect(
    mapStateToProps
)(ProductList);
