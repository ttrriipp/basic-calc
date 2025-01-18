const output = document.querySelector('output');

const input = document.querySelector('.input');

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
            if (output.textContent != "0"){
                output.textContent += "1";
            } else {
                output.value = output.value.slice(0, -1);
                output.textContent += "1";
            }
            break;
        case '2':
            if (output.textContent != "0"){
                output.textContent += "2";
            } else {
                output.value = output.value.slice(0, -1);
                output.textContent += "2";
            }           
            break;
        case '3':
            if (output.textContent != "0"){
                output.textContent += "3";
            } else {
                output.value = output.value.slice(0, -1);
                output.textContent += "3";
            }                                 
            break;
        case '4':
               if (output.textContent != "0"){
                output.textContent += "4";
            } else {
                output.value = output.value.slice(0, -1);
                output.textContent += "4";
            }
            break;
        case '5':
               if (output.textContent != "0"){
                output.textContent += "5";
            } else {
                output.value = output.value.slice(0, -1);
                output.textContent += "5";
            }
            break;
        case '6':
               if (output.textContent != "0"){
                output.textContent += "6";
            } else {
                output.value = output.value.slice(0, -1);
                output.textContent += "6";
            }            
            break;
        case '7':
               if (output.textContent != "0"){
                output.textContent += "7";
            } else {
                output.value = output.value.slice(0, -1);
                output.textContent += "7";
            }            
            break;
        case '8':
            if (output.textContent != "0"){
                output.textContent += "8";
            } else {
                output.value = output.value.slice(0, -1);
                output.textContent += "8";
            };
            break;
        case '9':
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


