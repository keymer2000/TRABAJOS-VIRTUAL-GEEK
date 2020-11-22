

function calcularPagos(personas, euros, personaPagademas) {
    var Tpersona = personas - personaPagademas;
    var Pagoana = euros / Tpersona;
    var auxEuros = (euros  - Pagoana)/Tpersona;
    return `Ana debe pagar  ${Pagoana}€‎  Y los otros ${Tpersona} pagan  ${auxEuros}€‎`;

}
alert(calcularPagos(9,128,1));