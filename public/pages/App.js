var display = document.getElementById("displayed");
function Btn(btnValue){
    display.value += btnValue
}
function ans(){
    var a = display.value;
    var ans = eval(a);
    display.value = ans;
}
function clearop(){
    display.value = ""; 
}
function clearAns2(){
    display.value = display.value.substr(0,display.value.length-1); 
}