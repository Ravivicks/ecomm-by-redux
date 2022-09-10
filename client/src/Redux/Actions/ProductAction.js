import axios from "axios";
import * as actionType from '../Constants/productConstants'


const URL = 'https://fakestoreapi.com/products';

export const getProducts = () => async (dispatch)=> {
   try{
   const { data } = await axios.get(URL);
   dispatch({
    type: actionType.GET_PRODUCT_SUCCESS,
    payload: data
   })
   } catch (error) {
     dispatch({
        type: actionType.GET_PRODUCT_FAIL,
        payload: error.message
     })
   }

}

export const getProduct = (id) => async (dispatch) => {
   try {
      dispatch({type: actionType.GET_PRODUCT_DETAIL_REQUEST})
      const { data } = await axios.get(`${URL}/${id}`);
      dispatch({
         type: actionType.GET_PRODUCT_DETAIL_SUCCESS,
         payload: data
      })
   } catch(error) {
      dispatch({
         type: actionType.GET_PRODUCT_DETAIL_FAIL,
         payload: error.message
      })
   }
}