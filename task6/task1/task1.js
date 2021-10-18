let imgNum
for(let i = 0; i < 3; i++){
    let button = document.getElementById('b' + i )
    let img = document.getElementById('big_picture')
    button.onclick = function () {
        if (img.innerHTML === undefined || img.innerHTML === '' || imgNum !== i){
            imgNum = i
            img.innerHTML = '<img src= "./big/big_' + i + '.jpg" />'
        } else {
            img.innerHTML = ''
        }

    }
}
