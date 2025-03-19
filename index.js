function convertirNumero() {
    // Obtener el tipo de conversión seleccionado por el usuario
    let tipoConversion = document.getElementById("tipoConversion").value;

    // Obtener el número ingresado por el usuario
    let numero = document.getElementById("numero").value.trim();

    // Obtener el elemento donde se mostrará el resultado
    let resultado = document.getElementById("resultado");

    // Validar si el usuario ingresó un número
    if (numero === "") {
        resultado.textContent = "Ingresa un número válido";
        resultado.style.color = "red";
        return; // Detiene la ejecución si el campo está vacío
    }

    let convertido; // Variable para almacenar el resultado de la conversión
    
    try {
        // Ejecutar la conversión según la opción seleccionada
        switch (tipoConversion) {
            case "decimal-binario":
                convertido = parseInt(numero, 10).toString(2); // Convierte decimal a binario
                break;
            case "decimal-octal":
                convertido = parseInt(numero, 10).toString(8); // Convierte decimal a octal
                break;
            case "decimal-hex":
                convertido = parseInt(numero, 10).toString(16).toUpperCase(); // Convierte decimal a hexadecimal
                break;
            case "binario-decimal":
                if (!/^[01]+$/.test(numero)) throw "Número binario no válido"; // Verifica que sea binario
                convertido = parseInt(numero, 2).toString(10); // Convierte binario a decimal
                break;
            case "octal-decimal":
                if (!/^[0-7]+$/.test(numero)) throw "Número octal no válido"; // Verifica que sea octal
                convertido = parseInt(numero, 8).toString(10); // Convierte octal a decimal
                break;
            case "hex-decimal":
                if (!/^[0-9A-Fa-f]+$/.test(numero)) throw "Número hexadecimal no válido"; // Verifica que sea hexadecimal
                convertido = parseInt(numero, 16).toString(10); // Convierte hexadecimal a decimal
                break;
            default:
                convertido = "Conversión no válida"; // Mensaje de error si la conversión no es reconocida
        }

        // Mostrar el resultado de la conversión en la página
        resultado.textContent = `Resultado: ${convertido}`;
        resultado.style.color = "#ffeb3b"; // Color amarillo brillante para el resultado
    } catch (error) {
        resultado.textContent = error; // Muestra un mensaje de error si la conversión falla
        resultado.style.color = "red"; // Pone el mensaje de error en color rojo
    }
}
