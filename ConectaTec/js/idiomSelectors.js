function additionalIdioms(){
    var idiomCheck = document.getElementById("checkbox1").checked;

    if (idiomCheck == true) {
        if(document.getElementById("copias").disabled == false && document.getElementById("copias2").disabled == true){
            englishConstancia();
        } else if(document.getElementById("copias").disabled == true && document.getElementById("copias2").disabled == false){
            englishKardex();
        } else if(document.getElementById("copias").disabled == false && document.getElementById("copias2").disabled == false){
            englishConstancia();
            englishKardex();
        }

    } else if (idiomCheck == false) {
        if(document.getElementById("copias").disabled == false && document.getElementById("copias2").disabled == true){
            var h = document.getElementById("insideDiv");
            h.remove(h);
        }
        else if(document.getElementById("copias").disabled == true && document.getElementById("copias2").disabled == false){
            var h2 = document.getElementById("insideDiv2");
            h2.remove(h2);
        }
        else if(document.getElementById("copias").disabled == false && document.getElementById("copias2").disabled == false){
            var h = document.getElementById("insideDiv");
            var h2 = document.getElementById("insideDiv2");
            h.remove(h);
            h2.remove(h2);
        }
    }
}

function englishConstancia(){
    var y = document.getElementById("englishSelect");

    var div2 = document.createElement("div");
    div2.setAttribute("id", "insideDiv");

    var lab = document.createElement("label");
    var labTxt = document.createTextNode("Copias Inglés Constancias");
    lab.appendChild(labTxt);

    var x = document.createElement("SELECT");
    x.setAttribute("id", "copiasIngCons");
    document.body.appendChild(x);

    var ind = document.getElementById("copias").selectedIndex;
    var yInd = document.getElementById("copias").options;
    var noConst = yInd[ind].index;

    for (i = 0; i <= noConst; i++) {
        var h1 = i + 1;
        var z1 = document.createElement("option");
        var t1 = document.createTextNode(h1);
        z1.appendChild(t1);

        document.getElementById("copiasIngCons").appendChild(z1);
    }

    div2.appendChild(lab);
    div2.appendChild(x);
    y.appendChild(div2);

}

function englishKardex(){
    var y = document.getElementById("englishSelect");

    var div3 = document.createElement("div");
    div3.setAttribute("id", "insideDiv2");

    var lab2 = document.createElement("label");
    var labTxt2 = document.createTextNode("Copias Inglés Kardex");
    lab2.appendChild(labTxt2);

    var xx = document.createElement("SELECT");
    xx.setAttribute("id", "copiasIngKard");
    document.body.appendChild(xx);

    var ind2 = document.getElementById("copias2").selectedIndex;
    var yInd2 = document.getElementById("copias2").options;
    var noKardex = yInd2[ind2].index;

    for (i = 0; i <= noKardex; i++) {
        var h2 = i + 1;
        var z2 = document.createElement("option");
        var t2 = document.createTextNode(h2);
        z2.appendChild(t2);

        document.getElementById("copiasIngKard").appendChild(z2);
    }

    div3.appendChild(lab2);
    div3.appendChild(xx);
    y.appendChild(div3);
}