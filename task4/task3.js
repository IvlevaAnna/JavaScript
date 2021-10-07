let questions = [
    {
        q: 'Как ходит человек, который находится в полном подчинении и боится кого-то ослушаться?',
        a1: '1. гоголем',
        a2: '2. вокруг да около',
        a3: '3. по струнке',
        a4: '4. налево',
        correct: 'a3',
        summa: 200
    },
    {
        q: 'Какое слово общее в названии некоторых частей речи?',
        a1: '1. имя',
        a2: '2. фамилия',
        a3: '3. отчество',
        a4: '4. псевдоним',
        correct: 'a1',
        summa: 400
    },
    {
        q: 'Что обрабатывают на прокатном стане?',
        a1: '1. железо',
        a2: '2. древисину',
        a3: '3. гранит',
        a4: '4. бетон',
        correct: 'a1',
        summa: 600
    }
]
let q = 4, prize = 0

for (let i = 0; i < questions.length; i++) {
    let ok = false, chosenAnswer = null
    do {
        chosenAnswer = prompt(questions[i].q + '\n' + questions[i].a1 + '\n' + questions[i].a2 + '\n'
            + questions[i].a3 + '\n' + questions[i].a4)
        ok = isAnswer(q, chosenAnswer)
    } while ( !ok )
    if ( 'a' + chosenAnswer == questions[i].correct) {
        prize += questions[i].summa
    }
    else {
        alert('You lose. Your prize might be ' + prize)
        break
    }
    if ( i === questions.length - 1 )
        alert ('You won ' + prize)
}

function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    return true;
}
