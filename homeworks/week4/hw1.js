// eslint-disable-next-line import/no-unresolved
const request = require('request')

const API_ENDPOINT = 'https://lidemy-book-store.herokuapp.com'

request(`${API_ENDPOINT}/books?_limit=10`, (error, response, body) => {
  // 有沒有回傳成功
  if (response.statusCode >= 200 && response.statusCode < 300) {
    let data = ''
    // try catch
    try {
      data = JSON.parse(body)
      for (let i = 0; i < data.length; i++) {
        console.log(`${data[i].id} ${data[i].name}`)
      }
    } catch (error) {
      return console.log(error)
    }
  }
})
console.log(process.argv)
