const Cont1 = document.getElementById("C1");
const Cont2 = document.getElementById("C2");
const Cont3 = document.getElementById("C3");
const Cont4 = document.getElementById("C4");
var content1 = 0;
var content2 = 0;
var content3 = 0;
var content4 = 0;
var lock = 0;
function Inc1(){
    if(content1 < 9){
        content1++;
        Cont1.innerHTML = content1;
        lock = lock + 1000;
    }
    else{
    content1 = 0;
    Cont1.innerHTML = content1;
    lock = lock - 9000;}
}
function Inc2(){
    if(content2 < 9){
        content2++;
        Cont2.innerHTML = content2;
        lock = lock + 100;
    }
    else{
    content2 = 0;
    Cont2.innerHTML = content2;
    lock = lock - 900;}
}
function Inc3(){
    if(content3 < 9){
        content3++;
        Cont3.innerHTML = content3;
        lock = lock + 10;
    }
    else{
    content3 = 0;
    Cont3.innerHTML = content3;
    lock = lock - 90;
};
}
function Inc4(){
    if(content4 < 9){
        content4++;
        Cont4.innerHTML = content4;
        lock++;
    }
    else{
    content4 = 0;
    Cont4.innerHTML = content4;
    lock = lock - 9;
    }
}
function Dec1(){
    if(content1 > 0){
        content1--;
        Cont1.innerHTML = content1;
        lock = lock - 1000;
    }
    else {
        content1 = 9
        Cont1.innerHTML = content1;
        lock = lock + 9000;
    }
}
function Dec2(){
    if(content2 > 0){
        content2--;
        Cont2.innerHTML = content2;
        lock = lock - 100;
    }
    else {
        content2 = 9
        Cont2.innerHTML = content2;
        lock = lock + 900;
    }
}
function Dec3(){
    if(content3 > 0){
        content3--;
        Cont3.innerHTML = content3;
        lock = lock - 10;
    }
     else {
        content3 = 9
        Cont3.innerHTML = content3;
        lock = lock + 90;
    }
}
function Dec4(){
    if(content4 > 0){
        content4--;
        Cont4.innerHTML = content4;
        lock--;
    }
    else {
        content4 = 9
        Cont4.innerHTML = content4;
        lock = lock + 9;
    }
}