import { createStore, combineReducers } from 'redux';
import { productReducer } from '../Reducer/product-reducer';

const reduxStore = () => {
    const combineAllReducers = combineReducers({
        productReducer: productReducer
    })
    const store = createStore(combineAllReducers)
    return (store);
}

export default reduxStore;