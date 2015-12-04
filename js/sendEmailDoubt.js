/**
 * Created by davidsaenz on 07/09/15.
 */

function sendDoubts() {

    var doubtMessage = document.getElementById("messageDudas").value;

    var mail = "mailto:casa.chi@servicios.itesm.mx" + "?cc= " + "&subject=" + escape("Dudas acerca de los servicios") + "&body=" + encodeURIComponent(doubtMessage);

    window.location.href = mail;
}