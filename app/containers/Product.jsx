import { connect } from 'react-redux';
import Product from '../components/Product';
import { loadProduct } from '../actions/product-actions';

function mapStateToProps(state){
  return {
    product: state.product
  }
}

export default connect(mapStateToProps)(Product);
