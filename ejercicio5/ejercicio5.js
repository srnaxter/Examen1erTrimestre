function validarNombre() {
    const sendbtn = $("#enviar");
    const inputNombre = $("#nombreProyecto");
    const nombre = inputNombre.val().trim();
    let resultado = false;
    inputNombre.removeClass("error");
    inputNombre.removeClass("correcto");

    if(nombre !== "" && nombre.match(/^[A-Z\s]*[A-Z]$/)) {
        resultado = true;
        inputNombre.addClass("correcto");
        if(inputNombre.next().length > 0 ){
            inputNombre.next().remove();
        }
    }else{
        inputNombre.addClass("error");
        if(inputNombre.next().length === 0 ){
            inputNombre.after("<span>ERROR EN EL NOMBRE DEL PROYECTO</span>");
        }
    }

    return resultado;
}

function validarTiempo() {
    const inputTiempo = $("#tiempoProyecto");
    const tiempo = inputTiempo.val().trim();
    inputTiempo.removeClass("error");
    inputTiempo.removeClass("correcto");

    let resultado = false;

    if(tiempo !== "" && tiempo >= 1 && tiempo <= 12){
        resultado = true;
        inputTiempo.addClass("correcto");
        if(inputTiempo.next().length > 0 ){
            inputTiempo.next().remove();
        }
    }else{
        inputTiempo.addClass("error");
        if(inputTiempo.next().length === 0 ){
            inputTiempo.after("<span>ERROR EN EL TIEMPO</span>");
        }
    }

    return resultado;
}

function validarDescripcion() {
    const sendbtn = $("#enviar");
    const inputDesc = $("#descripcion");
    const nombre = $("#nombreProyecto").val();
    const desc = inputDesc.val().trim();
    inputDesc.removeClass("error");
    inputDesc.removeClass("correcto");

    let resultado = false;

    if(desc !== "" && desc.toLowerCase() !== nombre.toLowerCase() && desc === desc.toLowerCase()){
        resultado = true;
        inputDesc.addClass("correcto");
        if(inputDesc.next().length < 50 ){
            inputDesc.next().remove();
        }
    }else{
        inputDesc.addClass("error");
        if(inputDesc.next().length === 0 ){
            inputDesc.after("<span>ERROR EN LA DESCRIPCION</span>");
        }
    }

    return resultado;
}

function validarFormulario() {
    const sendbtn = $("#enviar");
    sendbtn.attr("disabled",true);
    let nombreValido = validarNombre();
    let tiempoValido = validarTiempo();
    let descripcionValida = validarDescripcion();

    let formularioCorrecto = nombreValido && tiempoValido && descripcionValida;
    if(!formularioCorrecto){
        event.preventDefault();
    }

    sendbtn.removeAttr("disabled");
    return formularioCorrecto;
}
