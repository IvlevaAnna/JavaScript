let totalPrice = 0

let cards = document.getElementsByClassName('card_heading')
let price = document.getElementsByClassName('card_price')
let buttons = document.getElementsByClassName('card_button')
let img = document.getElementsByClassName('card_img')

let cart = document.getElementById('cart')
cart.insertAdjacentHTML('afterbegin', "<div id='empty'>Cart is empty...</div>")

let clear = document.getElementsByClassName('cart_left_button')[0]
clear.onclick = function(){
    totalPrice = 0
    let total = document.getElementById('total')
    total.innerText = totalPrice
    let cartCards = document.getElementsByClassName('cart_left_card')
    while(cartCards.length > 0) {
        cartCards[0].remove();
    }
    let cart = document.getElementById('cart')
    cart.insertAdjacentHTML('afterbegin', '<div id="empty">Cart is empty...</div>')
}

for(let i = 0; i < cards.length; i++){
    buttons[i].onclick = function(){

        totalPrice += +(price[i].innerText)
        let total = document.getElementById('total')
        total.innerText = totalPrice

        if(document.getElementById('card'+ i) === null){
            let  empty = document.getElementById('empty')
            if (empty !== null)
                empty.remove()
            cart.insertAdjacentHTML('afterbegin',
                '<div class="cart_left_card" id="card' + i + '">\n' +
                '          <img src="' + img[i].src + '" class="cart_left_img">\n' +
                '          <div class="cart_left_text">\n' +
                '            <a href="#" class="cart_left_text_heading">\n' + cards[i].innerText +'</a>\n' +
                '            <div class="cart_left_text_text">\n' +
                '              <div>Price:<span class="colored">' + price[i].innerText + '</span></div>\n' +
                '              <div>\n' +
                '                <label for="quantity' + i + '">Quantity:</label>\n' +
                '                <input id="quantity' + i + '" type="number" class="input_box" value="1" >\n' +
                '              </div>\n' +
                '            </div>\n' +
                '          </div>\n' +
                '          <a href="#" class="cart_left_close">\n' +
                '            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
                '              <path d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z" fill="#575757"/>\n' +
                '            </svg>\n' +
                '          </a>\n' +
                '        </div>'
        )
        }
        else if(document.getElementById('card'+ i).length !== null){
            let quantity = document.getElementById('quantity' + i)
            let value = Number(quantity.getAttribute('value'))
            quantity.setAttribute('value', String(value + 1))
        }
    }
}
