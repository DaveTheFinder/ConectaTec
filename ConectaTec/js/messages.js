function createMessage(dataMatr, dataOpt, dataCopiasC, dataCopiasK, dataCheck, englishC, englishK) {

    var messageCopyC = "",
        messageCopyK = "",
        messageIdiom = "",
        finalMessage = "",
        farewellMessage = " ¡Muchas gracias!";

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
                messageIdiom = "Que de esos " + englishC + " constancias y " + englishK + " Kardex esté en idioma inglés. ";
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

/*function createMessage(dataMatr, dataOpt, dataCopiasC, dataCopiasK, dataCheck) {

    var messageCopyC = "", messageCopyK = "", messageIdiom = "", finalMessage = "", farewellMessage = " ¡Muchas gracias!";

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

            if (dataCheck === true && dataCopiasC === 1) {
                messageIdiom = "Y que la constancia esté en idioma inglés.";
            } else if (dataCheck === true && dataCopiasC <=3){
                messageIdiom = "Y que las constancias estén en idioma inglés.";
            } else {
                messageIdiom = "";
            }
            var messageMatricula = " Mi matrícula es: A0" + dataMatr + " ";

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

            if (dataCheck === true && dataCopiasK === 1) {
                messageIdiom = "Y que el Kardex esté en idioma inglés.";
            } else if (dataCheck === true && dataCopiasK <=3){
                messageIdiom = "Y que los Kardex estén en idioma inglés.";
            } else {
                messageIdiom = "";
            }
            messageMatricula = " Mi matrícula es: A0" + dataMatr + " ";

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
                messageCopyK ="y dos Kardex. ";
            } else if (dataCopiasK === 3) {
                messageCopyK = "y tres Kardex. ";
            }

            if (dataCheck === true && dataCopiasK === 1 && dataCopiasC===1) {
                messageIdiom = "Y que la constancia y el Kardex estén en idioma inglés.";
            } else if (dataCheck === true && dataCopiasK <=3 && dataCopiasC<=3){
                messageIdiom = "Y que las constancias y los Kardex estén en idioma inglés.";
            } else {
                messageIdiom = "";
            }
            messageMatricula = " Mi matrícula es: A0" + dataMatr + " ";

            return finalMessage = messageDoc + messageCopyC + messageCopyK + messageIdiom + messageMatricula + farewellMessage;
        }

        default:
        {
            return finalMessage = "Falta algo.";
        }
    }
}*/