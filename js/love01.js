let demo = document.getElementById('demo').getElementsByTagName('p');
let star = 0;
let demo1 = document.getElementById('demo').getElementsByTagName('div');
let star1 = 0;
setInterval(function(){
   	demo[star].style.opacity = 1;
    star++;
    star>=demo.length && (star=2);
    },1000)
setInterval(function(){
    demo1[star1].style.opacity = 1;
    star1++;
    star1>=demo1.length && (star1=2);
    },1000)