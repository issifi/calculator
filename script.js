// the dom manipilation
let lastClickedBtn = "null";
const display = document.querySelector(".display")
const btnNumber = document.querySelectorAll("button.number")
const dot = document.querySelector(".dot");
let clickDot = false;
// numbers inputs
btnNumber.forEach( element => {
    element.addEventListener("click",(e)=> {
        if(lastClickedBtn === "null" || lastClickedBtn === "operator" || lastClickedBtn === "equal"){
            display.textContent = e.target.value;
            lastClickedBtn = "number";
        }else if(lastClickedBtn === "number") {
            display.textContent += e.target.value;
        }
    })
})

function displayNumber(num){
    num1 = Number(display.textContent);
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
    })
})
// the equal button event
const equals = document.querySelector(".equals");
equals.addEventListener("click",()=> equal())
function equal(){
    if(lastClickedBtn === "equal"){
        return result = Number( display.textContent);;
    }else{
        displayNumber();
        let result = operate(opreatClick, num2, num1)
        if(result == undefined){
            result = Number( display.textContent);
        }
        num1 = result;
        display.textContent = Math.round( result * 1000)/1000
        lastClickedBtn = "equal";
        //  console.log("result: ",result);
        clickDot = false;
    }
    opreatClick = "=";

}
// the dot button event 
dot.addEventListener("click",(e)=>{
    // console.log(display.textContent);
    if(!display.textContent.includes(".")){
        // console.log("not includes")
        display.textContent += e.target.value;
    }
    lastClickedBtn = "number";
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
// add keyboard click
const btns = document.querySelectorAll("button");
btns.forEach((btn)=>{
    btn.addEventListener("transitionend",(e)=>{
        //if (e.propertyName !== 'transform') return;
        e.target.classList.remove('click');
        console.log("transition end",e);
    })
})
function insert(e){
    if(/\d/.test(e.key)){
        if(lastClickedBtn === "null" || lastClickedBtn === "operator" || lastClickedBtn === "equal"){
            display.textContent = e.key;
            lastClickedBtn = "number"
        }else if(lastClickedBtn === "number") {
            display.textContent += e.key;
            
        }
    }else if(['+','-','*','/'].includes(e.key) ){
        displayNumber();
        num2 = num1;        
        opreatClick = e.key;
        lastClickedBtn ="operator";
        clickDot = false;
    }else if(['=','Enter'].includes(e.key)){
        equal();
    }else if(e.key === 'Backspace'){
        let str = display.textContent;
        display.textContent = str.slice(0,-1);
    }
    const key = document.querySelector(`button[data-key*="${e.keyCode}"]`);
    if(!key) return;
    key.classList.add('click')
    // console.log(e.keyCode,key);
}
// const main = document.querySelector('#main');
window.addEventListener('keydown', insert);

function operate(op, n1, n2) {
    if (op === "+") {
        return n1 + n2;
    } else if(op ==="-") {
        return n1 - n2;
    } else if(op === "*"){
        return n1 * n2;
    }else if(op === "/"){
        if(n2 === 0){
            return display.textContent = "ERROR";
        }else{
            return n1/n2;
        }
    }else if (op === "%"){
        return n1 % n2;
    }
}


console.log("the program is working!. ")