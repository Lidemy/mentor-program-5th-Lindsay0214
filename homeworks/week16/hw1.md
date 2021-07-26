# Event Loop
在 JavaScript 裡面，一個很重要的概念就是 Event Loop，是 JavaScript 底層在執行程式碼時的運作方式。請你說明以下程式碼會輸出什麼，以及盡可能詳細地解釋原因。

```
console.log(1)
setTimeout(() => {
  console.log(2)
}, 0)
console.log(3)
setTimeout(() => {
  console.log(4)
}, 0)
console.log(5)
```

----


Event Loop 是電腦的一種運行機制，JS 採用這種機制主要為了解決單執行緒帶來的問題：單執行緒就是程式由上至下執行一行一行程式碼的方式，然而因為一行一行執行就會遇到一些狀況，像是中途可能會有 URL 的請求、圖片請求等等可能會讓程式因為請求而卡在那邊的情形，這種狀況我們稱為堵塞。

而瀏覽器有提供自身的 Web API 可以呼叫，setTimeout 就是其中一個，所以當我們呼叫 setTimeout 方法時，這個函式就會做非同步處理（程式碼一行一行執行時，我們稱為同步;  反之則為非同步），因此程式碼會這樣解析：

1. 第一行 console.log(1) 所以直接印出 1
2. 第二行遇到 setTimeout 這個非同步的 Web API 所以直接先往下執行
3. 第三行遇到 console.log(3) 所以直接印出 3
4. 第四行遇到 setTimeout 這個非同步的 Web API 所以直接先往下執行
5. 第五行遇到 console.log(5) 所以直接印出 5
6. 這時候程式碼執行完，會呼叫剛剛的非同步函式所以會再分別印出 2 跟 4

所以印出來會是：

1. 1
2. 3
3. 5
4. 2
5. 4