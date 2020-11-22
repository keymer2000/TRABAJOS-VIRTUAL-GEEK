const horasVida = (HorasdeAño = 8760) => {
            var edad = parseInt(document.querySelector('#edad').innerHTML);
        
            return edad > 0 && !NaN
                ? alert(`Usted ha vivido ${HorasdeAño * edad} horas`)
                : alert("Ingrese una edad valida");
        };
        horasVida();