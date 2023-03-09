function conversor() {
    var input = document.querySelector('input#valorDin');
    var valorDolar = Number(input.value);
    var cotacaoDolar = 5.14;

    var valorDin = valorDolar * cotacaoDolar;
    valorDin = valorDin.toFixed(2);
    alert('R$ ' + valorDin)


}







