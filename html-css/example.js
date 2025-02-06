document.addEventListener("DOMContentLoaded", function() {
    function showAlert() {
        alert("Это ваше сообщение из отдельного файла JavaScript!");
    }

    var myButton = document.getElementById("myButton");
    myButton.addEventListener("click", showAlert);

    var confirmButton = document.getElementById("confirmButton");
    confirmButton.addEventListener("click", function() {
        var userConfirmed = confirm("Вы уверены, что хотите продолжить?");
        if (userConfirmed) {
            alert("Действие подтверждено");
        } else {
            alert("Действие отменено");
        }
    });

    var promptButton = document.getElementById("promptButton");
    promptButton.addEventListener("click", function() {
        var userInput = prompt("Введите ваш текст:", "Значение по умолчанию");
        if (userInput !== null) {
            alert("Вы ввели: " + userInput);
        } else {
            alert("Ввод отменен");
        }
    });

    function showJawa() {
        alert("«Я JavaScript!»");
    }

    var jawaButton = document.getElementById("jawaButton");
        jawaButton.addEventListener("click", showJawa);
});
