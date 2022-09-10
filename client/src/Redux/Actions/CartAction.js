import axios from "axios";
import * as actionType from '../Constants/cartConstant'



const URL = 'https://fakestoreapi.com/products';

export const addToCart = (id, quantity) => async (dispatch) => {
    try{
   const { data } = await axios.get(`${URL}/${id}`)
   dispatch({
    type: actionType.ADD_TO_CART,
    payload: {...data, quantity} 
   })
    } catch(error) {
     console.log('error while addtocart api', error);
    }
}

export const removeToCart = (id) => (dispatch) => {
    dispatch({
        type: actionType.REMOVE_TO_CART,
        payload: id
    })
}