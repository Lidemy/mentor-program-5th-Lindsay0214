# Hoisting
```
var a = 1
function fn(){
  console.log(a)
  var a = 5
  console.log(a)
  a++
  var a
  fn2()
  console.log(a)
  function fn2(){
    console.log(a)
    a = 20
    b = 100
  }
}
fn()
console.log(a)
a = 10
console.log(a)
console.log(b)
```

```
/global scope/

var a = 1        // a=1(global)

fn()             // 呼叫函式 fn()

/function scope(fn)/
var a 
console.log(a)   // 有宣告一個變數 a 但沒賦值所以 undefined
a=5
console.log(a)   // a=5
a+1              // 此時 a=5 -> a+1=6

var a            // 沒賦值，不做事

fn2()            // 呼叫 fn2 這個函式
console.log(a)   // fn2() 找不到，所以 fn2() 執行完在 fn() 找有找到，a=20，此時 function scope 執行結束，所以回到 global scope

/function scope(fn2)/
console.log(a)   // 找到 fn2() 但找不到 a 所以往上找 a=6
a=20             // fn2() 找不到 a 往上找，在 fn() 找到
b=100            // 找不到 b，所以 b is not defined

console.log(a)   // 這邊 function scope 已經執行結束，所以在 global scope，a=1
a=10             // 找到 a，賦值 10
console.log(a)   // 上面 a=10
console.log(b)   // globla scope 新增一個變數 b，b=100

```

hoisting 關係，function scope 比 global scope 先執行，所以印出來會是：

1. undefined
2. 5
3. 6
4. 20
5. 1
6. 10
7. 100