let imgNum
for(let i = 0; i < 3; i++){
    let button = document.getElementById('b' + i )
    let slider = document.getElementById('slider')
    button.onclick = function () {
        let img = document.getElementById('big_picture')
        if (img.innerHTML === undefined || img.innerHTML === ''){
            imgNum = i
            slider.insertAdjacentHTML('afterbegin', '<button type="button" id="toLeft"> < </button>')
            img.innerHTML = '<img src= "./big/big_' + i + '.jpg" />'
            slider.insertAdjacentHTML('beforeend', '<button type="button" id="toRight"> > </button>')

            let min = 0, max = 2, num = i
            let buttonLeft = document.getElementById('toLeft')

            buttonLeft.onclick = function(){
                console.log(num)
                if (num > min){
                    num--
                    img.innerHTML = '<img src= "./big/big_' + num  + '.jpg" />'
                }
            }

            let buttonRight = document.getElementById('toRight')

            buttonRight.onclick = function(){
                if (num < max){
                    num++
                    img.innerHTML = '<img src= "./big/big_' + num  + '.jpg" />'
                }
            }
        } else if(imgNum !== i){
            imgNum = i
            img.innerHTML = '<img src= "./big/big_' + i + '.jpg" />'
        } else {
            slider.innerHTML = ''
            slider.insertAdjacentHTML('afterbegin','<div id="big_picture"></div>')
        }

    }
}
