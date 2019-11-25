let year = new Data().getFullYear

document.getElementById('cal').innerHTML = '<div class="box" id="cal"></div>'

function setCalender(year){
    var year1 = new Date().getFullYear()
    
    var pre = year1-1
    var next = year1+1
    document.getElementById('curyear').setAttribute('data-year', year1);
    document.getElementById('preyear').setAttribute('data-year', pre);
    document.getElementById('nextyear').setAttribute('data-year', next);
    document.getElementById('curyear').innerText = year1
    document.getElementById('preyear').innerText = "<<"+pre
    document.getElementById('nextyear').innerText = next+ ">>"
}