const input = document.getElementById('myNumber');
input.addEventListener('input', function() {
    if (this.value.length > this.maxLength) {
        this.value = this.value.slice(0, this.maxLength);
    }
});
const input2 = document.getElementById('fecha');
input2.addEventListener('input', function() {
    if (this.value.length > this.maxLength) {
        this.value = this.value.slice(0, this.maxLength);
    }
});
const input3 = document.getElementById('cardNumber');
input3.addEventListener('input', function() {
    if (this.value.length > this.maxLength) {
        this.value = this.value.slice(0, this.maxLength);
    }
});

function formatNumber() {
    let input = document.getElementById('cardNumber');
    let value = input.value.replace(/ /g, ''); // Eliminar todos los espacios en blanco
    let formattedValue = '';

    for (let i = 0; i < value.length; i++) {
        if (i > 0 && i % 4 === 0) {
            formattedValue += ' '; // Agregar un espacio cada cuatro caracteres
        }
        formattedValue += value[i];
    }

    input.value = formattedValue;
}
function syncInputs(input) {
    let value = input.value;
    let input2 = document.getElementById('cardFrontName');
    input2.value = value;
}
function syncInputs2(input) {
    let value = input.value;
    let input2 = document.getElementById('cardFrontNumber');
    input2.value = value;
}
function syncInputs3(input) {
    let value = input.value;
    let input2 = document.getElementById('ccCard');
    input2.value = value;
}
function syncInputs4(input) {
    let value = input.value;
    let input2 = document.getElementById('mmCard');
    input2.value = value;
}
function syncInputs5(input) {
    let value = input.value;
    let input2 = document.getElementById('yyCard');
    input2.value = value;
}