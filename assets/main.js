var buttonSamsung = document.getElementById('ler-mais');
var buttonMotorola = document.getElementById('expandir');
var buttonRedmi = document.getElementById('aumentar');


buttonSamsung.addEventListener('click', function () {
    var samsung = document.querySelector('.samsung');
    samsung.classList.toggle('active');

    if (samsung.classList.contains('active')) {
        return buttonSamsung.textContent = 'Ler menos';
    }

    buttonSamsung.textContent = 'Ler mais';
});

buttonMotorola.addEventListener('click', function () {
    var motorola = document.querySelector('.motorola');
    motorola.classList.toggle('active');

    if (motorola.classList.contains('active')) {
        return buttonMotorola.textContent = 'Ler menos';
    }

    buttonMotorola.textContent = 'Ler mais';
});

buttonRedmi.addEventListener('click', function () {
    var redmi = document.querySelector('.redmi');
    redmi.classList.toggle('active');

    if (redmi.classList.contains('active')) {
        return buttonRedmi.textContent = 'Ler menos';
    }

    buttonRedmi.textContent = 'Ler mais';
});