/** Created by davidsaenz on 22/09/15. */

function additionalIdioms() {
    var idiomCheck = document.getElementById("checkbox1").checked;

    if (idiomCheck == true) {
        if (document.getElementById("copias").disabled == false && document.getElementById("copias2").disabled == true) {
            englishConstancia();
        } else if (document.getElementById("copias").disabled == true && document.getElementById("copias2").disabled == false) {
            englishKardex();
        } else if (document.getElementById("copias").disabled == false && document.getElementById("copias2").disabled == false) {
            englishConstancia();
            englishKardex();
        }

    } else if (idiomCheck == false) {
        if (document.getElementById("copias").disabled == false && document.getElementById("copias2").disabled == true) {
            var h1 = document.getElementById("insideDiv");
            h1.remove(h1);
        } else if (document.getElementById("copias").disabled == true && document.getElementById("copias2").disabled == false) {
            var h2 = document.getElementById("insideDiv2");
            h2.remove(h2);
        } else if (document.getElementById("copias").disabled == false && document.getElementById("copias2").disabled == false) {
            var h1 = document.getElementById("insideDiv");
            var h2 = document.getElementById("insideDiv2");
            h1.remove(h1);
            h2.remove(h2);
        }
    }
}

function englishConstancia() {
    var y, div2, lab, labTxt, x,
        ind, yInd, noConst, h3, z1, t1;

    y = document.getElementById("englishSelectConstancia");

    div2 = document.createElement("div");
    div2.setAttribute("id", "insideDiv");

    lab = document.createElement("label");
    labTxt = document.createTextNode("Copias en Inglés de Constancias");
    lab.appendChild(labTxt);

    x = document.createElement("SELECT");
    x.setAttribute("id", "copiasIngCons");
    document.body.appendChild(x);

    ind = document.getElementById("copias").selectedIndex;
    yInd = document.getElementById("copias").options;
    noConst = yInd[ind].index;

    for (i = 0; i <= noConst; i++) {
        h3 = i + 1;
        z1 = document.createElement("option");
        t1 = document.createTextNode(h3);
        z1.appendChild(t1);

        document.getElementById("copiasIngCons").appendChild(z1);
    }

    div2.appendChild(lab);
    div2.appendChild(x);
    y.appendChild(div2);

}

function englishKardex() {
    var y, div3, lab2, labTxt2, xx,
        ind2, yInd2, noKardex, h4, z2, t2;

    y = document.getElementById("englishSelectKardex");

    div3 = document.createElement("div");
    div3.setAttribute("id", "insideDiv2");

    lab2 = document.createElement("label");
    labTxt2 = document.createTextNode("Copias en Inglés de Kardex");
    lab2.appendChild(labTxt2);

    xx = document.createElement("SELECT");
    xx.setAttribute("id", "copiasIngKard");
    document.body.appendChild(xx);

    ind2 = document.getElementById("copias2").selectedIndex;
    yInd2 = document.getElementById("copias2").options;
    noKardex = yInd2[ind2].index;

    for (i = 0; i <= noKardex; i++) {
        h4 = i + 1;
        z2 = document.createElement("option");
        t2 = document.createTextNode(h4);
        z2.appendChild(t2);

        document.getElementById("copiasIngKard").appendChild(z2);
    }

    div3.appendChild(lab2);
    div3.appendChild(xx);
    y.appendChild(div3);
}