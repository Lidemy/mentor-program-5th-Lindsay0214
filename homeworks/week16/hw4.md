# What is this?
```
const obj = {
  value: 1,
  hello: function() {
    console.log(this.value)
  },
  inner: {
    value: 2,
    hello: function() {
      console.log(this.value)
    }
  }
}
  
const obj2 = obj.inner
const hello = obj.inner.hello
obj.inner.hello() // ??
obj2.hello() // ??
hello() // ??
```

----


先說 this，this 基本上是物件導向中 new 出來的 instence，若在非物件導向環境下則為預設值意義不大，例如在非嚴格模式下瀏覽器中預設是 window、node.js 中預設則是 global，若是嚴格模式則為 undefined，當然我們也能透過 call()、apply()、bind() 來更改 this 的預設值。
而判斷 this 值則是看是怎麼呼叫決定，但也有些例外像是遇到 DOM 時，this 會變綁定的 DOM 元素本身; 遇到箭頭函式時，在哪裡宣告 this 是什麼，this 就是什麼。

那來看程式碼：
1. 呼叫 obj.inner.hello()，obj 裡的 inner this 就是自己，所以印出 this.value 就是 2
2. 呼叫 obj2.hello()，因為上面宣告 obj2 = obj.inner，所以這邊也等於是呼叫跟剛剛一樣的 this，所以也會印出 2
3. 呼叫 hello()，hello() 在非物件導向環境下，所以 this 會是預設值，但我們沒有宣告 value，所以會印出 undefined



所以印出來會是：

1. 2
2. 2
3. undefined
