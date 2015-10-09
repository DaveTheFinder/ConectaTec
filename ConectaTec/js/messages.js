/** Created by davidsaenz sometime between mid-2015. */

function createMessage(dataMatr, dataOpt, dataCopiasC, dataCopiasK, dataCheck, englishC, englishK) {

    var messageCopyC = "",
        messageCopyK = "",
        messageIdiom = "",
        finalMessage = "",
        farewellMessage = "¡Muchas gracias!";

    switch (dataOpt) {
    case 0:
        {
            if (dataCopiasC === 1) {
                messageCopyC = "Hola. Quisiera solicitar una constancia de estudios, por favor. ";
            } else if (dataCopiasC === 2) {
                messageCopyC = "Hola. Quisiera solicitar dos constancias de estudios, por favor. ";
            } else if (dataCopiasC === 3) {
                messageCopyC = "Hola. Quisiera solicitar tres constancias de estudios, por favor. ";
            }

            if (dataCheck === true && englishC === 1) {
                messageIdiom = "Y que la constancia esté en idioma inglés. ";
            } else if (dataCheck === true && englishC != 1) {
                messageIdiom = "Y que " + englishC + " constancias estén en idioma inglés. ";
            } else {
                messageIdiom = "";
            }
            var messageMatricula = "Mi matrícula es: A0" + dataMatr + " ";

            return finalMessage = messageCopyC + messageIdiom + messageMatricula + farewellMessage;
        }

    case 1:
        {
            if (dataCopiasK === 1) {
                messageCopyK = "Hola. Quisiera solicitar un Kardex, por favor. ";
            } else if (dataCopiasK === 2) {
                messageCopyK = "Hola. Quisiera solicitar dos Kardex, por favor. ";
            } else if (dataCopiasK === 3) {
                messageCopyK = "Hola. Quisiera solicitar tres Kardex, por favor. ";
            }

            if (dataCheck === true && englishK === 1) {
                messageIdiom = "Y que el Kardex esté en idioma inglés. ";
            } else if (dataCheck === true && englishK != 1) {
                messageIdiom = "Y que " + englishK + " Kardex estén en idioma inglés. ";
            } else {
                messageIdiom = "";
            }
            messageMatricula = "Mi matrícula es: A0" + dataMatr + " ";

            return finalMessage = messageCopyK + messageIdiom + messageMatricula + farewellMessage;
        }

    case 2:
        {
            var messageDoc = "Hola. Quisiera solicitar documentos de constancia de estudios y kardex, por favor. ";
            if (dataCopiasC === 1) {
                messageCopyC = "Que sea una sola constancia de estudios, ";
            } else if (dataCopiasC === 2) {
                messageCopyC = "Que sean dos constancias de estudio, ";
            } else if (dataCopiasC === 3) {
                messageCopyC = "Que sean tres constancias de estudio, ";
            }

            if (dataCopiasK === 1) {
                messageCopyK = "y un solo Kardex. ";
            } else if (dataCopiasK === 2) {
                messageCopyK = "y dos Kardex. ";
            } else if (dataCopiasK === 3) {
                messageCopyK = "y tres Kardex. ";
            }

            if (dataCheck === true) {
                messageIdiom = "Que de esos, " + englishC + " constancias y " + englishK + " Kardex esté en idioma inglés. ";
            } else {
                messageIdiom = "";
            }

            messageMatricula = "Mi matrícula es: A0" + dataMatr + " ";

            return finalMessage = messageDoc + messageCopyC + messageCopyK + messageIdiom + messageMatricula + farewellMessage;
        }

    default:
        {
            return finalMessage = "Falta algo.";
        }
    }
}

function confirmMessage(dataMatr, dataOpt, dataCopiasC, dataCopiasK, dataCheck, englishC, englishK) {

    var messageCopyC = "",
        messageCopyK = "",
        messageIdiom = "",
        finalMessage = "",
        farewellMessage = "¿Es correcto?";

    switch (dataOpt) {
        case 0:
        {
            if (dataCopiasC === 1) {
                messageCopyC = "- Una constancia de estudios.\n";
            } else if (dataCopiasC === 2) {
                messageCopyC = "- Dos constancias de estudios.\n";
            } else if (dataCopiasC === 3) {
                messageCopyC = "- Tres constancias de estudios.\n";
            }

            if (dataCheck === true && englishC === 1) {
                messageIdiom = "- Que sea en inglés.\n";
            } else if (dataCheck === true && englishC != 1) {
                messageIdiom = "- Que " + englishC + " de esas " + englishC+1 + " constancias sean en inglés.\n";
            } else {
                messageIdiom = "";
            }
            var messageMatricula = "- Tu matrícula es: A0" + dataMatr + "\n\n";

            return finalMessage = messageCopyC + messageIdiom + messageMatricula + farewellMessage;
        }

        case 1:
        {
            if (dataCopiasK === 1) {
                messageCopyK = "- Un Kardex.\n";
            } else if (dataCopiasK === 2) {
                messageCopyK = "- Dos Kardex.\n";
            } else if (dataCopiasK === 3) {
                messageCopyK = "- Tres Kardex.\n";
            }

            if (dataCheck === true && englishK === 1) {
                messageIdiom = "- Que sea en inglés.\n";
            } else if (dataCheck === true && englishK != 1) {
                messageIdiom = "- Que " + englishK + " de esas " + englishK+1 + " Kardex sean en inglés.\n";
            } else {
                messageIdiom = "";
            }
            messageMatricula = "- Tu matrícula es: A0" + dataMatr + "\n\n";

            return finalMessage = messageCopyK + messageIdiom + messageMatricula + farewellMessage;
        }

        case 2:
        {
            //var messageDoc = "Hola. Quisiera solicitar documentos de constancia de estudios y kardex, por favor. ";
            if (dataCopiasC === 1) {
                messageCopyC = "- Una constancia de estudios.\n";
            } else if (dataCopiasC === 2) {
                messageCopyC = "- Dos constancias de estudios.\n";
            } else if (dataCopiasC === 3) {
                messageCopyC = "- Tres constancias de estudios.\n";
            }

            if (dataCopiasK === 1) {
                messageCopyK = "- Un Kardex.\n";
            } else if (dataCopiasK === 2) {
                messageCopyK = "- Dos Kardex.\n";
            } else if (dataCopiasK === 3) {
                messageCopyK = "- Tres Kardex.\n";
            }

            if (dataCheck === true) {
                messageIdiom = "- De esos: que " + englishC + " constancias y " + englishK + " Kardex que estén en inglés.\n";
            } else {
                messageIdiom = "";
            }

            messageMatricula = "- Tu matrícula es: A0" + dataMatr + "\n\n";

            return finalMessage = messageCopyC + messageCopyK + messageIdiom + messageMatricula + farewellMessage;
        }

        default:
        {
            return finalMessage = "Falta algo.";
        }
    }
}