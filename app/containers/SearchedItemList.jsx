import { connect } from 'react-redux';
import SearchedItemList from '../components/SearchedItemList';
import { fetchSearchRequest } from '../actions/searchbar-actions';


function mapStateToProps(state) {
    return {
        products: state.products
    }
}

function mapDispatchToProps(dispatch) {
    return {
        go: term => dispatch(fetchSearchRequest(term))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchedItemList);