## 請以自己的話解釋 API 是什麼

API 是 Application Programming Interface 的縮寫，也就是應用程式介面，一般用來與別的應用介面交換資料用。所以假如今天鋰學院學生去中央考試中心考試，而中央考試中心可能就會與鋰學院的工程師說，我需要串接你們的學生資料以便我們系統查詢，請開一個你們學生資料的 API 給我，這是鋰學院的工程師就會給他鋰學院的 API 文件，讓他們可以順利地交換資料！

## 請找出三個課程沒教的 HTTP status code 並簡單介紹

我找幾個自己比較容易跟課程提到搞混的

1. 200 是執行成功（已經執行完畢）/ 202 是已經接受請求（接受請求之後某時會執行，但「還沒」執行）
2. 403 是沒有權限存取（可能有登入，但權限不足）/ 401 是沒授權（連登入都還沒，無法看指定頁面）
3. 404 是請求的網址不存在（或資源）/ 410 是請求的資源曾經存在（但現在不存在了）

## 假設你現在是個餐廳平台，需要提供 API 給別人串接並提供基本的 CRUD 功能，包括：回傳所有餐廳資料、回傳單一餐廳資料、刪除餐廳、新增餐廳、更改餐廳，你的 API 會長什麼樣子？請提供一份 API 文件。

# 餐廳平台 API 文件說明

為方便使用者拿取餐廳資料，這是一份關於 L 餐廳平台的 API 文件使用說明書。

Base URL: https://fakeurlforhw.com

回傳所有餐廳資料 /GET
回傳單一餐廳資料 /GET /restaurants/:id
刪除餐廳 /DELETE /restaurants/:id
新增餐廳 /POST /restaurants
更改餐廳 /PATCH /restaurants/:id

<!-- 回傳所有餐廳資料 /GET -->

const request = require('request');
const BASE_URL = https://fakeurlforhw.com

request(`${BASE_URL}`, (err, res, body) => {

<!-- content -->

});

<!-- 回傳單一餐廳資料 /GET -->

const request = require('request');
const BASE_URL = https://fakeurlforhw.com

request(`${BASE_URL/${id}}`, (err, res, body) => {

<!-- content -->

});

<!-- 刪除餐廳 /DELETE -->

const request = require('request');
const BASE_URL = https://fakeurlforhw.com

request.delete(`${BASE_URL/${id}}`, (err, res, body) => {

<!-- content -->

});

<!-- 新增餐廳 /POST -->

const request = require('request');
const BASE_URL = https://fakeurlforhw.com

request.post(
{
url: `${BASE_URL}`,
form: {
name,
},
},
(err, res, body) => {

<!-- content -->

}
);

<!-- 更改餐廳 /PATCH -->

const request = require('request');
const BASE_URL = https://fakeurlforhw.com

request.patch(
{
url: `${BASE_URL}/${id}`,
form: { name },
},
(err, res, body) => {

<!-- content -->

}
);
