const output = document.querySelector('output');

const input = document.querySelector('.input');

input.addEventListener('click', (event) => {
    let target = event.target;

    switch(target.id) {
        case 'clear':
            output.textContent = "";
            break;
        case 'delete':
            output.value = output.value.slice(0, -1);
            break;
        case '1':
            output.textContent += "1";
            break;
        case '2':
            output.textContent += "2";
            break;
        case '3':
            output.textContent += "3";
            break;
        case '4':
            output.textContent += "4";
            break;
        case '5':
            output.textContent += "5";
            break;
        case '6':
            output.textContent += "6";
            break;
        case '7':
            output.textContent += "7";
            break;
        case '8':
            output.textContent += "8";
            break;
        case '9':
            output.textContent += "9";
            break;
        case '0':
            output.textContent += "0";
            break;
        case 'equal':
            alert(output.value);
            break;
        case '+':
            if (!outputIncludesOperators()){
                output.textContent += "+";
            } else

            break;
        case '-':
            if (!outputIncludesOperators()){
                output.textContent += "-";
            }
            break;
        case '*':
            if (!outputIncludesOperators()){
                output.textContent += "×";
            } 
            break;
        case '/':
            if (!outputIncludesOperators()){
                output.textContent += "÷";
            }
            break;
        case 'decimal':
            if (!output.value.includes('.')){
                output.textContent += ".";
            }
            break;
        
            
    }
});

function outputIncludesOperators (){
    return output.value.includes('+') ? true : 
    output.value.includes('-') ? true :
    output.value.includes('×') ? true :
    output.value.includes('÷') ? true : false
}


