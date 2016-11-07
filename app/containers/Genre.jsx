import { connect } from 'react-redux';
import { getGenreProducts } from '../actions/genre-actions';
import Genre from '../components/Genre';

function mapStateToProps(state) {
    return {
        products: state.products
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loadProducts: (genreType) => {
            dispatch(getGenreProducts(genreType))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Genre);