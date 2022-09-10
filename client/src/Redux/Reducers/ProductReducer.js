import * as actionType from '../Constants/productConstants'



export const getProductsReducers = (state = { products: [] }, action) => {
    switch(action.type){
        case actionType.GET_PRODUCT_SUCCESS:
            return { products: action.payload }
        case actionType.GET_PRODUCT_FAIL:
            return { error: action.payload }
        default: 
           return state
    }
}

export const getProductReducer = (state = {product: {}}, action) => {
    switch(action.type){
        case actionType.GET_PRODUCT_DETAIL_REQUEST:
            return { loading: true }
        case actionType.GET_PRODUCT_DETAIL_SUCCESS:
            return { loading: false, product: action.payload }
        case actionType.GET_PRODUCT_DETAIL_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state            
    }
}