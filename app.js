let firstNumber = document.getElementById("firstInput");
let secondNumber = document.getElementById("secondInput");
let operand = document.getElementById("operand");
let button = document.querySelector("button");
let display = document.querySelector("p");


button.addEventListener("click", () => {
    let firstNumber2 = +firstNumber.value;
    // console.log(firstNumber2);
    let secondNumber2 = +secondNumber.value;
    // console.log(secondNumber2);
    // console.log(typeof operand.value);
    if (operand.value == "+"){
        let result = firstNumber2 + secondNumber2;
        display.innerHTML = `${firstNumber2} + ${secondNumber2} = ${result}`;
    }
    else if (operand.value == "-"){
        let result = firstNumber2 - secondNumber2;
        display.innerHTML = `${firstNumber2} - ${secondNumber2} = ${result}`;
    }
    else if (operand.value == "*"){
        let result = firstNumber2 * secondNumber2;
        display.innerHTML = `${firstNumber2} * ${secondNumber2} = ${result}`;
    }
    else if (operand.value == "/") {
        let result = firstNumber2 / secondNumber2;
        display.innerHTML = `${firstNumber2} / ${secondNumber2} = ${result}`;
    }
    else{
        alert("invalid entry");
    }
    
})