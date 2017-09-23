function playGuess2() {
    var answer = parseInt(Math.random() * 100);
    var playerNum = 1;

    while (true) {
        var userAnswer = prompt('Ходит игрок ' + playerNum + '. Введите число от 0 до 100. Для выхода нажмите q');
        if (userAnswer == 'q') {
            break;
        }
        userAnswer = parseInt(userAnswer);

        if (userAnswer > answer) {
            alert('Ваш ответ слишком большой');
        } else if (userAnswer < answer) {
            alert('Ваш ответ слишком маленький');
        } else if (userAnswer == answer) {
            alert('Вы угадали! Выиграл игрок: ' + playerNum);
            break;
        } else {
            alert('Необходимо ввести число!');
        }

        if (playerNum == 1) {
            playerNum = 2;
        } else {
            playerNum = 1;
        }
    }
}


    var correctAnswersCount;
        function askQuestion(textBoxId, answer) {
            var userAnswer = document.getElementById(textBoxId).value;
            if (userAnswer == answer) {
                correctAnswersCount++;
            }
        }

        function playPuzzle() {
            correctAnswersCount = 0;
            askQuestion("userAnswer1", "солнце");
            askQuestion("userAnswer2", "хрен");
        
            document.getElementById('result').innerHTML = "Количество правильных ответов: " + correctAnswersCount;
        }

function playGuess() {
    var answer = parseInt(Math.random() * 100);

    while (true) {
        var userAnswer = prompt('Введите число от 0 до 100. Для выхода нажмите q');
        if (userAnswer == 'q') {
            break;
        }
        userAnswer = parseInt(userAnswer);

        if (userAnswer > answer) {
            alert('Ваш ответ слишком большой');
        } else if (userAnswer < answer) {
            alert('Ваш ответ слишком маленький');
        } else if (userAnswer == answer) {
            alert('Вы угадали!');
            break;
        } else {
            alert('Необходимо ввести число!');
        }

       
        }
    }