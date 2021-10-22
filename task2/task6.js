let arg1 , arg2 , operation

arg1 = +prompt('Enter first argument')
arg2 = +prompt('Enter second argument')
operation = prompt('Enter one of operations : sum, difference, division, multiplication')

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'sum':
            alert(sum(arg1, arg2))
            break
        case 'difference':
            alert(difference(arg1, arg2))
            break
        case 'division':
            alert(division(arg1, arg2))
            break
        case 'multiplication':
            alert(multiplication(arg1, arg2))
            break
        default:
            alert('Wrong operation!')
    }
}

mathOperation(arg1, arg2, operation)

function sum(num1, num2) {
    return num1 + num2
}

function difference(num1, num2) {
    return num1 - num2
}

function multiplication(num1, num2) {
    return num1 * num2
}

function division(num1, num2) {
    return num1 / num2
}
