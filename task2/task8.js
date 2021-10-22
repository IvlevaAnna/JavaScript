let val = value = 2, pow = 4, i = 1

function power(val, pow) {
    if (i < pow) {
        i++
        val *= value
        power(val, pow)
    }
    else if (pow == 0)
        alert(1)
    else if (i == pow)
        alert(val)
}

power(val, pow)
