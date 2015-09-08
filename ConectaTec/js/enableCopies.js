/**
 * Created by davidsaenz on 02/09/15.
 */
function enableForCopies() {
    var ind = document.getElementById("documento").selectedIndex;
    var yInd = document.getElementById("documento").options;

    if (yInd[ind].index === 0) {
        document.getElementById("copias").disabled = false;
        document.getElementById("copias2").disabled = true;
    }
    if (yInd[ind].index === 1) {
        document.getElementById("copias").disabled = true;
        document.getElementById("copias2").disabled = false;
    }
    if (yInd[ind].index === 2) {
        document.getElementById("copias").disabled = false;
        document.getElementById("copias2").disabled = false;
    }
}