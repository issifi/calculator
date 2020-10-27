// the dom manipilation
let lastClickedBtn = "null";
const display = document.querySelector(".display")
const btnNumber = document.querySelectorAll("button.number")
const dot = document.querySelector(".dot");
// numbers inputs
btnNumber.forEach( element => {
    element.addEventListener("click",(e)=> {
        if(lastClickedBtn === "null" || lastClickedBtn === "operator" || lastClickedBtn === "equal"){
            display.textContent = e.target.value;
            lastClickedBtn = "number"
            // console.log("last click null");
        }else if(lastClickedBtn === "number") {
            display.textContent += e.target.value;
            // console.log("last click not null");
        }
        // console.log("element vallue: ", e.target.value )
        // displayNumber(element);
    })
})

function displayNumber(num){
    num1 = Number( display.textContent);
    // console.log(clickNumber)
}
let clickNumber ;
let opreatClick = "";
let num1 ;
let num2 ;
// the operator button event click
const operats = document.querySelectorAll("button.operate");
operats.forEach(operat => {
    operat.addEventListener("click", ()=> {
        displayNumber();
        num2 = num1;        
        opreatClick = operat.value;
        lastClickedBtn ="operator";
        clickDot = false;
        console.log(opreatClick)
        console.log("num 1: ",num1," num2 ",num2); 
    })
})
// the equal button event
const equals = document.querySelector(".equals");
equals.addEventListener("click", ()=>{

    displayNumber();
    let result = operate(opreatClick, num2, num1)
    num1 = result;
    display.textContent = Math.round( result * 1000)/1000
    lastClickedBtn = "equal";
    console.log("result: ",result);
    clickDot = false;
})
let clickDot = false;
// the dot button event 
dot.addEventListener("click",(e)=>{
    if(clickDot === false){
        display.textContent += e.target.value;
        clickDot = true;
    }
})
// remove last number
const undo = document.querySelector(".undo")
undo.addEventListener("click", ()=>{
    let str = display.textContent;
    display.textContent = str.slice(0,-1);
})
// the clear button 
const clear = document.querySelector(".clear");
clear.addEventListener("click",()=>{
    display.textContent ="0";
    num1 = null;
    num2 = null;
    result = null;
    lastClickedBtn = "null";
})

// function 
function add(n1,n2) {
    return n1+n2;
}
// console.log(add(3,2));

function substract(s1,s2) {
    return s1-s2;
}
// console.log(substract(3,2))

function multiply(m1,m2) {
    return m1*m2;
}
// console.log(multiply(3,2))

function divide(d1, d2) {
    if(d2 === 0){
        return display.textContent = "ERROR";
    }else{
        return d1/d2;
    }
}
// console.log(divide(3,2))

function operate(op, n1, n2) {
    if (op === "+") {
        return add(n1,n2);
    } else if(op ==="-") {
        return substract(n1,n2);
    } else if(op === "*"){
        return multiply(n1,n2);
    }else if(op === "/"){
        return divide(n1,n2)
    }
}

console.log("the program is working!. ")