import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { cartReducer } from "./Reducers/cartReducer";
import { getProductsReducers, getProductReducer } from "./Reducers/ProductReducer";

const reducer = combineReducers({
    getProducts: getProductsReducers,
    getProduct: getProductReducer,
    cart: cartReducer
})

const middleWare = [thunk];

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleWare))

)

export default store;