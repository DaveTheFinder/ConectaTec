/**
 * Created by davidsaenz on 13/10/15.
 */

function resetValues(){
    var documentos = document.getElementById("documento");
    var copiasC = document.getElementById("copias");
    var copiasK = document.getElementById("copias2");
    var checkboxIdiom = document.getElementById("checkbox1");

    documentos.selectedIndex = 0;
    copiasC.selectedIndex = 0;
    copiasK.selectedIndex = 0;
    checkboxIdiom.checked = false;
}
