let a , b
a = +prompt('Enter first number')
b = +prompt('Enter second number')

if ( a >= 0 && b >= 0 )
    alert('a - b = ' + ( a - b ))
else if ( a < 0 && b < 0)
    alert('a * b = ' + ( a * b ))
else
    alert('a + b = ' + ( a + b ))
