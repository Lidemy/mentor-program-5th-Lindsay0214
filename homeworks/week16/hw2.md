# Event Loop + Scope
請說明以下程式碼會輸出什麼，以及盡可能詳細地解釋原因。
```
for(var i=0; i<5; i++) {
  console.log('i: ' + i)
  setTimeout(() => {
    console.log(i)
  }, i * 1000)
}
```
----

因為 JS 中作用域只有全域作用域跟函式作用域，所以 for 裡 var 建立的變數是在全域的環境下，因此 `var=i` 被提升（hoisting），而 JS 作用域關係程式碼會變：
```
var i;
for(i=0; i<5; i++){
    console.log('i:'+ i)
}
for(i=0; i<5; i++) {
  setTimeout(() => {
    console.log(i)
  }, i * 1000)
}
```
因此，程式碼由上至下開始執行：
1. 宣告一個變數 i 
2. 定義一個 for loop 條件為初始值 i=0, i 範圍小於 5, 迴圈條件每跑一圈加 1
3. 遇到 `console.log('i:'+i)`  所以印出第一圈迴圈執行的值 0
4. 繼續往下執行遇到 setTimeout，所以先放至 Event loop 裡面，繼續後面程式
5. 相同狀況迴圈跑了四次，於是接續印出 1,2,3,4
6. 執行完後在 event loop 的 setTimeout 發回主程式碼繼續執行
7. 這時候 for loop 已執行完畢 i=5，所以會印出五次 i 的值

```
var i=0;
i++;
i++;
i++;
i++;
i++;
console.log(i);
console.log(i);
console.log(i);
console.log(i);
console.log(i);
```



所以印出來會是：

1. i: 0
2. i: 1
3. i: 2
4. i: 3
5. i: 4
6. 5
7. 5
8. 5
9. 5
10. 5