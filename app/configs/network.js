const API_ENDPOINT = 'https://pikdop.herokuapp.com/'

let headers = {
  ['Accept-Language']: 'en'
}
export default NETWORK = {
  fetchData: (keyword) => {
    return new Promise((resolve, reject) => {
      fetch((API_ENDPOINT + keyword), { headers })
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(error => reject(error))
    })
  }
}
