window.addEventListener("load", function () {
    function calcular() {
        var valorBase = parseFloat(document.getElementById("valor_base").value);
        var valorTransporte = parseFloat(
            document.getElementById("valor_transporte").value
        );
        var valorAlimentacao = parseFloat(
            document.getElementById("valor_alimentacao").value
        );
        var valorAutomovel = parseFloat(
            document.getElementById("valor_automovel").value
        );
        var faltas = parseFloat(document.getElementById("faltas").value);

        var receitaTotal = valorBase + valorTransporte + valorAlimentacao;
        var descontosTotal = valorAutomovel + faltas;
        var total = receitaTotal - descontosTotal;

        document.getElementById("valor_receita").value = receitaTotal.toFixed(2);
        document.getElementById("valor_descontos").value =
            descontosTotal.toFixed(2);
        document.getElementById("valor_total").value = total.toFixed(2);
    }

    document.getElementById("btn_calcular").addEventListener("click", calcular);
});
