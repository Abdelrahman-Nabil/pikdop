const API_ENDPOINT = 'https://pikdop.herokuapp.com/'
import isRTL from '../localization'

let headers = {
  ['Accept-Language']: isRTL() ? 'ar' : 'en'
}
export default NETWORK = {
  fetchData: (keyword, page = 1) => {
    return new Promise((resolve, reject) => {
      fetch((API_ENDPOINT + keyword + `?page=${page}`), { headers })//additional params can be concatenated
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(error => reject(error))
    })
  }
}
