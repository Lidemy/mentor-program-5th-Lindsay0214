// const request = require("request");
// const API_ENDPOINT = "https://lidemy-book-store.herokuapp.com";

// request(`${API_ENDPOINT}/books?_limit=10`, (error, response, body) => {
//   if (err) {
//     return console.log("抓取失敗", error);
//   }
//   let data;
//   try {
//     data = JSON.parse(body);
//   } catch (error) {
//     console.log(error);
//     return;
//   }
//   for (let i = 0; i < data.length; i += 1) {
//     console.log(`${data[i].id} ${data[i].name}`);
//   }
// });



// const request = require('request');
// const API_ENDPOINT = 'https://lidemy-book-store.herokuapp.com';

// request(`${API_ENDPOINT}/books?_limit=10`, (error, response, body) => {
//   var data = JSON.parse(data);
//   for (var i = 0; i < data.length; i++) {
//     console.log(`${data[i].id} ${data[i].name}`);
//   }
// })


// console.error('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   console.log('body:', body); // Print the HTML for the Google homepage.
// });




const request = require('request');

const API_ENDPOINT = 'https://lidemy-book-store.herokuapp.com';

request(`${API_ENDPOINT}/books?_limit=10`, (error, response, body) => {
  // 有沒有回傳成功
  if (response.statusCode >= 200 && response.statusCode < 300) {
    let data = '';
    // try catch
    try {
        data = JSON.parse(body);
        for (let i = 0; i < data.length; i++) {
        console.log(`${data[i].id} ${data[i].name}`);
        }
        } catch (error) {
            return console.log(error);
            }
    }
});


console.log(process.argv)

// node hw1.js test
// 印出後得到 [Node, hw1, test] 