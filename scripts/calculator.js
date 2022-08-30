const buttons = Array.from(document.querySelectorAll('button'));
const operations = document.querySelectorAll('[data-operation]');
const equals = document.querySelector('[data-equal]')
const clear = document.querySelector('[data-clear]')
const del = document.querySelector('[data-delete]')
const previousDisplay = document.querySelector('[data-previous-operand]')
const currentDisplay = document.querySelector('[data-current-operand]')

let num1 = 0
let num2 = 0
let operator;

buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            //when "CE" is clicked, clear everything in the display
            case 'CE':
                currentDisplay.innerText = '';
                previousDisplay.innerText = '';
                break;
            //when "DEL" is clicked, remove last single number from currentDisplay
            case 'DEL':
                if (currentDisplay.innerText) {
                currentDisplay.innerText = currentDisplay.innerText.slice(0, -1)
                }
                break;
            //if an operator is clicked, store the number in currentDisplay to a variable and update operator var
            case '+':
            case '-':
            case '÷':
            case 'x':
                num1 = currentDisplay.innerText
                currentDisplay.innerText = ''
                previousDisplay.innerText= num1
                operator = e.target.innerText
                console.log(operator);
                break;
            case '=':
                num2 = currentDisplay.innerText
                currentDisplay.innerText = ''
                previousDisplay.innerText = ''
                evaluate(operator, num1, num2)
                break;
            default:
                currentDisplay.innerText += e.target.innerText
        }
    })
})

const divide = (num1, num2) => {
    return num1/num2
}

const multiply = (num1, num2) => {
    return num1*num2
}

const add = (num1, num2) => {
    return num1+num2
}

const subtract = (num1, num2) => {
    return num1-num2
}

function evaluate(operator, number1, number2) {
    //change the arguments received to Numbers
    let num1 = parseInt(number1)
    let num2 = parseInt(number2)

    //check the operator and run appropriate function
    if (operator === 'x') {
        currentDisplay.innerText = multiply(num1, num2); 
    }
    if (operator === '÷') {
        if (number2 != 0) {
            currentDisplay.innerText = divide(num1, num2); 
        } else {
            currentDisplay.innerText = 'Error!'
        }
    }
    if (operator === '-') {
        currentDisplay.innerText = subtract(num1, num2); 
    }
    if (operator === '+') {
        currentDisplay.innerText = add(num1, num2)
    }
}