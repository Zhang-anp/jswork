function fn(){
    let times = 0
    let c = function(){
        return ++times
    }
    return c
}
let count = fn()
let sum = 0
for(let i=0;i<5;i++){
    sum += count()
}
alert(sum)