// eslint-disable-next-line import/no-unresolved
const request = require('request')

const API_ENDPOINT = 'https://lidemy-book-store.herokuapp.com'
const action = process.argv[2]
const param = process.argv[3]

switch (action) {
  case 'list':
    listBooks()
    break
  case 'read':
    readBooks(param)
    break
  case 'delete':
    deleteBooks(param)
    break
  case 'create':
    createBooks(param)
    break
  case 'update':
    updateBooks(param, process.argv[4])
    break
  default:
    console.log('Available commands: list, read, delete, create and update')
}

// node hw2.js list  印出前二十本書的 id 與書名
function listBooks() {
  request(`${API_ENDPOINT}/books?_limit=20`, (err, res, body) => {
    if (err) {
      return console.log('抓取失敗', err)
    } let data = ''

    data = JSON.parse(body)

    for (let i = 0; i < data.length; i++) {
      console.log(data[i].id, data[i].name)
    }
  })
}

// node hw2.js read 1  輸出 id 為 1 的書籍
function readBooks(id) {
  request(`${API_ENDPOINT}/books/${id}`, (err, res, body) => {
    if (err) {
      return console.log('抓取失敗', err)
    }
    const data = JSON.parse(body)
    return console.log(data)
  })
}

// node hw2.js delete 1  刪除 id 為 1 的書籍
function deleteBooks(id) {
  request.delete(`${API_ENDPOINT}/books/${id}`, (err) => {
    if (err) {
      return console.log('刪除失敗')
    } else {
      return console.log('刪除成功')
    }
  })
}

// node hw2.js create "I love coding"  新增一本名為 I love coding 的書
function createBooks(name) {
  request.post({
    url: `${API_ENDPOINT}/books`,
    form: {
      name
    }
  }, (err) => {
    if (err) {
      return console.log('新增失敗', err)
    } else {
      return console.log('新增成功')
    }
  })
}

// node hw2.js update 1 "new name"  更新 id 為 1 的書名為 new name
function updateBooks(id, newName) {
  request.patch({
    url: `${API_ENDPOINT}/books/${id}`,
    form: {
      newName
    }
  }, (err) => {
    if (err) return console.log('更新失敗', err)
    return console.log('更新成功')
  })
}
