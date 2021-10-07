let num = 612

let numObject = {
    ones: null,
    tens: null,
    hundreds: null,
    show: function (num) {
        if (num > 999)
            alert('Wrong number')
        else {
            this.ones = num % 10
            this.tens = Math.floor((num % 100) / 10)
            this.hundreds = Math.floor(num / 100)
            alert('Number ' + num + ' consists of ' + this.ones + ' ones, '
                + this.tens + ' tens, ' + this.hundreds + ' hundreds.')
        }
    }
}

numObject.show(num)
