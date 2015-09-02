/**
 * Created by davidsaenz on 02/09/15.
 */
function dataForMessage() {
    if((document.getElementById("matricula").value.length < 7 || document.getElementById("matricula").value.length > 7)
        || isNaN(document.getElementById("matricula").value)==true){
        alert("¡Ops! Puede que hayas escrito tu matrícula con caracteres de más o de menos... " +
            "o que tenga caracteres incorrectos. Corrigela y vuelve a intentarlo.");
    }else {
        var matriculaTxt = document.getElementById("matricula").value;
        var checkBox = document.getElementById("checkbox1").checked;

        var ind = document.getElementById("documento").selectedIndex;
        var yInd = document.getElementById("documento").options;
        var opcionDocumento = yInd[ind].index;

        var indC = document.getElementById("copias").selectedIndex;
        var yIndC = document.getElementById("copias").options;
        var copiasC = yIndC[indC].index + 1;

        var indK = document.getElementById("copias2").selectedIndex;
        var yIndK = document.getElementById("copias2").options;
        var copiasK = yIndK[indK].index + 1;

        var message = "";

        if (yInd[ind].index === 0) {
            message = createMessage(matriculaTxt, opcionDocumento, copiasC, 0, checkBox);
        } else if (yInd[ind].index === 1) {
            message = createMessage(matriculaTxt, opcionDocumento, 0, copiasK, checkBox);
        } else if (yInd[ind].index === 2) {
            message = createMessage(matriculaTxt, opcionDocumento, copiasC, copiasK, checkBox);
        }

        var messageN = document.createTextNode(message);
        var messageP = document.createElement("P");
        messageP.setAttribute("id", "messagePP");
        //messageP.appendChild(messageN);
        $("#mensajePredeterminado").html(messageN);
        //document.getElementById("divMessage").appendChild(messageP); */
    }
}
