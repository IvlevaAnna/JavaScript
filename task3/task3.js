let cart = [
    {product: 'item 1', price: 2000},
    {product: 'item 2', price: 1999},
    {product: 'item 3', price: 1299}]
let total = 0

function countBasketPrice(cart){
    for (let item of cart) {
        total += item.price
        alert(item.product + ' costs ' + item.price + ' roubles')
    }

    alert('Your total price is ' + total + ' roubles')
}

countBasketPrice(cart)
