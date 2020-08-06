function getHistory(){
  return  document.getElementById("history-value").innerText;

}

function printHistory(num){
    document.getElementById("histiry-value").innerText=num;
}
function getOutput(num){
    
    return document.getElementById("output-value").innerText=num;
}
function printOutput(num){
    document.getElementById("output-value").innerText=getFormatedNumber(num);
}
function getFormatedNumber(num){
    var n =Number(num)
    var value =n.toLocaleString("en");
    return value;

}