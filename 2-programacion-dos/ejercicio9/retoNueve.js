const nombre = "keymer alexander jimenez jerez"

var espacios = nombre.split(" ").length - 1;
        document.querySelector(
            "h1"
        ).innerHTML = `El nombre de mi compañero es: ${nombre} y esta compuesto por 
${nombre.length - espacios} caracteres`;