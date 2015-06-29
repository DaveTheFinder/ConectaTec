function createMessage(dataMatr, dataOpt, dataCopiasC, dataCopiasK, dataCheck) {

    var messageDoc = "", messageCopyC = "", messageCopyK = "", messageIdiom = "", finalMessage = "";

    switch (dataOpt) {
    case 0:
        {
            messageDoc = "Quisiera solicitar una constancia de estudios. ";
            if (dataCopiasC === 1) {
                 messageCopyC = "";
            } else if (dataCopiasC === 2) {
                 messageCopyC = "Con una copia adicional. ";
            } else if (dataCopiasC === 3) {
                 messageCopyC = "Con dos copias adicionales. ";
            }

            if (dataCheck === true) {
                 messageIdiom = "Y que el documento esté en idioma inglés.";
            } else {
                 messageIdiom = "";
            }

            var messageMatricula = " Mi matrícula es: " + dataMatr;

            return finalMessage = messageDoc + messageCopyC + messageIdiom + messageMatricula;
        }

    case 1:
        {
             messageDoc = "Quisiera solicitar un kardex. ";
            if (dataCopiasK === 1) {
                 messageCopyK = "";
            } else if (dataCopiasK === 2) {
                 messageCopyK = "Con una copia adicional. ";
            } else if (dataCopiasK === 3) {
                 messageCopyK = "Con dos copias adicionales. ";
            }

            if (dataCheck === true) {
                 messageIdiom = "Y que el documento esté en idioma inglés.";
            } else {
                 messageIdiom = "";
            }

             messageMatricula = " Mi matrícula es: " + dataMatr;

            return finalMessage = messageDoc + messageCopyK + messageIdiom + messageMatricula;
        }

    case 2:
        {
            var messageDoc = "Quisiera solicitar una constancia de estudios y un kardex. ";
            if (dataCopiasC === 1) {
                 messageCopyC = "";
            } else if (dataCopiasC === 2) {
                 messageCopyC = "Con una copia adicional de la constancia de estudios. ";
            } else if (dataCopiasC === 3) {
                 messageCopyC = "Con dos copias adicionales de la constancia de estudios. ";
            }

            if (dataCopiasK === 1) {
                 messageCopyK = "";
            } else if (dataCopiasK === 2) {
                 messageCopyK ="Y una copia adicional del kardex. ";
            } else if (dataCopiasK === 3) {
                 messageCopyK = "Y dos copias adicionales kardex. ";
            }

            if (dataCheck === true) {
                 messageIdiom = "Y que ambos documentos estén en inglés.";
            } else {
                 messageIdiom = "";
            }

             messageMatricula = " Mi matrícula es: " + dataMatr;

            return finalMessage = "Hola." + messageDoc + messageCopyC + messageCopyK + messageIdiom + messageMatricula;
        }

        default:
        {
            return finalMessage = "Falta algo.";
        }
    }
}

