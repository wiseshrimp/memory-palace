import { connect } from 'react-redux';
import Product from '../components/Product';
import { loadProduct } from '../actions/product-actions';

function mapStateToProps(state){
  console.log("CONTAINER", state.product)
  return {
    product: state.product
  }
}

// const mapDispatchToProps = dispatch => ({
//   loadProduct: () => dispatch(loadProduct())
// })

export default connect(mapStateToProps)(Product);
