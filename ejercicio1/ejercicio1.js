function funcionEjecutar() {

    let peso = [
        parseInt(document.getElementById("peso1").value),
        parseInt(document.getElementById("peso2").value),
        parseInt(document.getElementById("peso3").value),
        parseInt(document.getElementById("peso4").value)
    ];

    let media;
    let pesoGneral;

    for (let i = 0; i < peso.length; i++) {

        pesoGneral = peso[0] + peso[1] + peso[2] + peso[3];
        media = pesoGneral / 4;
    }

    console.log("La media es: " + media);

    for (let i = 0; i < peso.length; i++) {

        if (peso[0] > media){
            res0 = "Es mayor a la media"
        }else if (peso[0] < media){
            res0 = "Es menor a la media"
        }else if (peso[0] = media){
            res0 = "Es igual a la media"
        }

        if (peso[1] > media){
            res1 = "Es mayor a la media"
        }else if (peso[1] < media){
            res1 = "Es menor a la media"
        }else if (peso[1] = media){
            res1 = "Es igual a la media"
        }

        if (peso[2] > media){
            res2 = "Es mayor a la media"
        }else if (peso[2] < media){
            res2 = "Es menor a la media"
        }else if (peso[2] = media){
            res2 = "Es igual a la media"
        }

        if (peso[3] > media){
            res3 = "Es mayor a la media"
        }else if (peso[3] < media){
            res3 = "Es menor a la media"
        }else if (peso[3] = media){
            res3 = "Es igual a la media"
        }
    }

    console.log("El numero 1 con peso de: "+ peso[0] + "\n" + res0);
    console.log("El numero 2 con peso de: " + peso[1] + "\n" + res1);
    console.log("El numero 3 con peso de: " + peso[2] + "\n" + res2);
    console.log("El numero 4 con peso de: " + peso[3] + "\n" + res3);

}





