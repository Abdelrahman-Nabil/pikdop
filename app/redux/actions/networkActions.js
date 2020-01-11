import { TRIPS, NETWORK_ERROR } from './types'
import NETWORK from '../../configs/network'

export const fetchData = (keyword, page) => async dispatch => {
  try{
    let  data  = await NETWORK.fetchData(keyword, page)
    dispatch({type:keyword.toUpperCase(), payload: data})
  } catch(error){
    console.log(error)
    dispatch({type: NETWORK_ERROR, payload: error})
  }
}
