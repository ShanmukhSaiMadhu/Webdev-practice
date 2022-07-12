let para = document.getElementsByClassName("change");
let input1 = document.getElementById("num1");
let input2 = document.getElementById("num2");
let operator = document.getElementById("operators");
let result = document.getElementById("result");


function calculateMyResult() {
    let num1 = parseInt(input1.value);
    let num2 = parseInt(input2.value);

    let op = operator.value;

    if(op === '/' &&  num2 == 0) {
        // alert("You cannot perform this operation!");
        result.innerText = "You cannot perform this operation!";
        return;
    }

    switch(op) {
        case '+':
            result.innerText = "Ans =" + (num1 + num2);
            break;
        case '-': 
            result.innerText = "Ans =" + (num1 - num2);
            break;
        case '*': 
            result.innerText = "Ans =" + (num1 * num2);
            break;
        case '/': 
            result.innerText = "Ans =" + (num1 / num2);
            break;
        default:
            break;
    }
}







function changeText() {
    para[0].innerHTML = "Bye";
    para[1].innerHTML = "Good Bye";
    para[2].innerHTML = "AccioJobs";
    para[3].innerHTML = "Cool";
    para[4].innerHTML = "Last Para";

    para[3].style.color = "red";
}