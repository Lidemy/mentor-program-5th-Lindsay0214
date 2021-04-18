## 請解釋後端與前端的差異。

直覺來說，使用者看得到的部分就是所謂的「前端」，看不到的就是「後端」。
差異在前端負責處理視覺，包含文本 html，樣式 css，功能 javascript ; 後端負責接收前端請求、伺服器運作、資料庫處理。


## 假設我今天去 Google 首頁搜尋框打上：JavaScript 並且按下 Enter，請說出從這一刻開始到我看到搜尋結果為止發生在背後的事情。

按下 Enter 時，網頁會將你搜尋 Javascript 這個 Request 發送到 Google 的 Server 再回傳網頁 Response 給你。
實際會是瀏覽器 -> 作業系統 -> 網路卡 -> 台灣網路 -> Google 伺服器 -> Google 資料庫 -> 原路回傳 response -> 你看到的網頁（css、html、javascript 組成）


## 請列舉出 3 個「課程沒有提到」的 command line 指令並且說明功用

- 突然忘了今天幾號？
    command line 下下去 date
- 突然想看 GitHub 網頁原始碼？
  command line 下下去 curl https://github.com/
- 不想用 cat 查看檔案內容想跳頁細細品嚐？
  command line 下下去 less hw3.md