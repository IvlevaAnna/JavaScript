let a = 42, b = 8

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

alert(sum(a, b))
alert(difference(a, b))
alert(multiplication(a, b))
alert(division(a, b))

export {sum, difference, division, multiplication}
