import { TRIPS, NETWORK_ERROR } from './types'
import NETWORK from '../../configs/network'

export const fetchData = keyword => async dispatch => {
  try{
    let { data } = await NETWORK.fetchData(keyword)
    dispatch({type:keyword.toUpperCase(), payload: data})
  } catch(error){
    console.log(error)
    dispatch({type: NETWORK_ERROR, payload: error})
  }
}
