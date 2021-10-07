//После игры необходимо спросить номер вопроса. 
//По номеру вопроса нужно вывести текст вопроса и текст выбранного ответа

var event, ok;

var answers = [];

do {//Выводим первый вопрос
    ok = false;
    event = +prompt(works.a00 + works.a1 + works.a2 + '-1 - Выход из игры');
   
    if (event == -1) {
        break;
    }
    else {
        ok = isAnswer(works.a0, event);
    }
} while (!ok);
switch (event) {
    case 1: // Первое действие  - если в первом окне ввели 1 то открываем серию окон - окно 2
        answers.push({ question: works.a00, answer: works.a1 })
        do {
            ok = false;
            event = +prompt(works.b00 + works.b1 + works.b2 + '-1 - Выход из игры');
            if (event == -1) {
                break;
            }
            else {
                ok = isAnswer(works.b0, event);
            }
        } while (!ok);
        switch (event) {
            case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
            case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                if (event === 1)
                    answers.push({ question: works.b00, answer: works.b1 })
                else
                    answers.push({ question: works.b00, answer: works.b2 })
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                    }
                } while (!ok);
                switch (event) {
                    case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
                    case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                        if (event === 1)
                            answers.push({ question: works.d00, answer: works.d1 })
                        else
                            answers.push({ question: works.d00, answer: works.d2 })
                        showAnswer(answers)
                        break;
                    case -1: // Второе действие
                        break;
                    default:
                        alert('Ошибка');
                }

                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2: // Первое действие    Если в 1 окне ввели 2 то переходим к 3 окну
        answers.push({ question: works.a00, answer: works.a2 })
        do {
            ok = false;
            event = +prompt(works.c00 + works.c1 + works.c2 + '-1 - Выход из игры');
            if (event == -1) {
                break;
            }
            else {
                ok = isAnswer(works.c0, event);
            }
        } while (!ok);
        switch (event) {
            case 1: // Второе действие
            case 2: // Второе действие
                if (event === 1)
                    answers.push({ question: works.c00, answer: works.c1 })
                else
                    answers.push({ question: works.c00, answer: works.c2 })
                do {
                    ok = false;
                    event = +prompt(works.d00 + works.d1 + works.d2 + '-1 - Выход из игры');
                    if (event == -1) {
                        break;
                    }
                    else {
                        ok = isAnswer(works.d0, event);
                    }
                } while (!ok);
                switch (event) {
                    case 1: // Второе действие, если во 2 окне ввели 1 то переходим на 4 окно
                    case 2: // Второе действие   Если ввели 2 то также переходим на 4 окно
                        if (event === 1)
                            answers.push({ question: works.d00, answer: works.d1 })
                        else
                            answers.push({ question: works.d00, answer: works.d2 })
                        showAnswer(answers)
                        break;
                    case -1: // Второе действие
                        break;
                    default:
                        alert('Ошибка');
                }

                break;
            case -1: // Второе действие
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1: // Первое действие
        break;
    default:
        alert('Ошибка');
}
alert('Спасибо за игру');

//------------------------------------------
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

function showAnswer(answers) {
    let show = prompt("Want to see your answers? Choose number of question 1-4.")
    switch (show) {
        case '1':
            alert( answers[0].question +'\n' + answers[0].answer )
            break
        case '2':
            alert( answers[1].question +'\n' + answers[1].answer )
            break
        case '3':
            alert( answers[2].question +'\n' + answers[2].answer )
            break
        case '4':
            alert( answers[3].question +'\n' + answers[3].answer )
            break
        default:
            alert('Wrong number')
            break
    }
}
