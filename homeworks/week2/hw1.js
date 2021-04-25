// 給定 n（1<=n<=30），依照規律「印出」正確圖形
function printStars(n) {
    if (n >= 1 && n<=30) {
        var a = ''
        for(var i = 1; i<=n; i++){
            a += '*'
        }
        console.log(a.length)
        console.log(a)
    }
}

printStars(0)
printStars(50)
printStars(30)
printStars(32)