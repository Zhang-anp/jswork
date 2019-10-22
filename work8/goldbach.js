
function goldbach(num){
    var sum =0
    for (var d=1;d<=num;d++){
         if(num % d==0){
             sum ++
         }
    }
    if(sum==2){
        return true
    }else {
        return false
    }
}
for (var b=2;b<add;b++){
    var c=a-b
    if(goldbach(b) && goldbach(c) && b<=c){
        console.log(a + "可以拆分为两个质数" + b + "+" c)
    }
}