const output = document.querySelector('output');

const input = document.querySelector('.input');

let answered;
let operator;
input.addEventListener('click', (event) => {
    let target = event.target;

    switch(target.id) {
        case 'clear':
            output.textContent = "0";
            break;
        case 'delete':
            if (output.textContent.length != 1){
                output.value = output.value.slice(0, -1);
            } else output.textContent = "0";
            break;
        case '1':
            clearAfterOperation();
            if (output.textContent != "0"){
                output.textContent += "1";
            } else {
                output.value = output.value.slice(0, -1);
                output.textContent += "1";
            }
            break;
        case '2':
            clearAfterOperation();
            if (output.textContent != "0"){
                output.textContent += "2";
            } else {
                output.value = output.value.slice(0, -1);
                output.textContent += "2";
            }           
            break;
        case '3':
            clearAfterOperation();
            if (output.textContent != "0"){
                output.textContent += "3";
            } else {
                output.value = output.value.slice(0, -1);
                output.textContent += "3";
            }                                 
            break;
        case '4':
            clearAfterOperation();
               if (output.textContent != "0"){
                output.textContent += "4";
            } else {
                output.value = output.value.slice(0, -1);
                output.textContent += "4";
            }
            break;
        case '5':
            clearAfterOperation();
               if (output.textContent != "0"){
                output.textContent += "5";
            } else {
                output.value = output.value.slice(0, -1);
                output.textContent += "5";
            }
            break;
        case '6':
            clearAfterOperation();
               if (output.textContent != "0"){
                output.textContent += "6";
            } else {
                output.value = output.value.slice(0, -1);
                output.textContent += "6";
            }            
            break;
        case '7':
            clearAfterOperation();
               if (output.textContent != "0"){
                output.textContent += "7";
            } else {
                output.value = output.value.slice(0, -1);
                output.textContent += "7";
            }            
            break;
        case '8':
            clearAfterOperation();
            if (output.textContent != "0"){
                output.textContent += "8";
            } else {
                output.value = output.value.slice(0, -1);
                output.textContent += "8";
            };
            break;
        case '9':
            clearAfterOperation();
            if (output.textContent != "0"){
                output.textContent += "9";
            } else {
                output.value = output.value.slice(0, -1);
                output.textContent += "9";
            }            
            break;
        case '0':
            if (output.textContent != "0"){
                output.textContent += "0";
            }             
            break;
        case 'equal':
            output.textContent = operate(output.value);
            answered = output.value;
            break;
        case '+':
            if (!outputIncludesOperators()){
                output.textContent += "+";
            } else {
                output.value = output.value.slice(0, -1);
                output.textContent += "+";
            }
            operator = "+";
            break;
        case '-':
            if (!outputIncludesOperators()){
                output.textContent += "-";
            } else {
                output.value = output.value.slice(0, -1);
                output.textContent += "-";
            }
            operator = "-";
            break;
        case '*':
            if (!outputIncludesOperators()){
                output.textContent += "×";
            } else {
                output.value = output.value.slice(0, -1);
                output.textContent += "×";
            }
            operator = "×";
            break;
        case '/':
            if (!outputIncludesOperators()){
                output.textContent += "÷";
            } else {
                output.value = output.value.slice(0, -1);
                output.textContent += "÷";
            }
            operator = "÷";
            break;
        case 'decimal':
            let preEquation = output.value.split(operator);
            if (!preEquation[0].includes('.')){
                output.textContent += ".";
            } else if (!preEquation[1].includes('.')){
                output.textContent += ".";
            }
            break; 
    }
});

function clearAfterOperation () {
    if (output.textContent == answered) {
        output.textContent = "0";
    }
}

function operate (equation) {
    let answer;
    if (equation.includes('+')){
        answer = add(equation);
    } else if (equation.includes('-')){
        answer = subtract(equation);
    } else if (equation.includes('×')){
        answer = multiply(equation);
    } else if (equation.includes('÷')){
        answer = divide(equation);
    }
    return answer;
}


function add (equation) {
    equation = equation.split('+');
    const sum  = Number(equation[0]) + Number(equation[1]);
    return sum;
}

function subtract (equation) {
    equation = equation.split('-');
    const difference = Number(equation[0]) - Number(equation[1]);
    return difference;
}

function multiply (equation) {
    equation = equation.split('×');
    const product = Number(equation[0]) * Number(equation[1]);
    return product;
}

function divide (equation) {
    equation = equation.split('÷');
    if (Number(equation[1]) == 0) return "ERROR";
    
    const quotient = Number(equation[0]) / Number(equation[1]);
    return quotient;
}


function outputIncludesOperators (){
    return output.value.includes('+') ? true : 
    output.value.includes('-') ? true :
    output.value.includes('×') ? true :
    output.value.includes('÷') ? true : false
}


