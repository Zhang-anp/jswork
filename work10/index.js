function monkey(){
    let total = document.getElementById("monkeytotal").value
    let kick = document.getElementById("monkeykick").value
    total = parseInt(total) && Number(total)
    kick = parseInt(kick) && Number(kick)
    if(isNaN(total) || isNaN(kick)){
        alert('请输入数字')
        return
    }
    let monkey=[]
    for(let i=1;i<=total;i++){
        monkey.push(i)
    }
    let i=0
    while (monkey.length>1){
        i++;
        head = monkey.shift()
        if(i%kick!=0){
            monkey.push(head);
        }
    }
    document.getElementById('monkeyking').innerText = monkey[0]
}
function stat(){
    let str = document.getElementById("str").value
    let obj = {}
    let shuzu  = str.split("")//把一个个数字单独拿出来，变成一个单独的数组
    // 数组排序
    shuzu = shuzu.sort()
    for (let i = 0; i < str.length; ++i) {
        let moudu = shuzu[i]//i是整个数组里的某一个数组
        obj[moudu] = (obj [moudu] + 1) || 1;//如果在数组里某个数有相同的数就加一，没有就为1
    }
    document.getElementById("result").innerText = JSON.stringify(obj)
}
