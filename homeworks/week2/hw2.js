// 給定一字串，把第一個字轉成大寫之後「回傳」，若第一個字不是英文字母則忽略。

// capitalize('nick')
// 正確回傳值：Nick

// capitalize('Nick')
// 正確回傳值：Nick

// capitalize(',hello')
// 正確回傳值：,hello


function capitalize(str) {
    var n = str[0]
    if (n >='A' && n<='Z') {
        var str = n.toUpperCase()
        return n
        }
    }

// console.log(capitalize('hello'));
capitalize('nick')

