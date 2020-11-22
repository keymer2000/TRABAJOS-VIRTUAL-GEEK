var element= document.querySelector("h1").innerText;
        var cambioContraseña=element.split(":");
        var contra= cambioContraseña[1].trim();
        var contra= element.replaceAll(contra,"**");

        
        document.querySelector("h1").innerText=contra;
        var element= document.querySelector("h1").innerText;
        var cambioContraseña=element.split(":");
        var contra= cambioContraseña[1].trim();
        var contra= element.replaceAll(contra,"**");
        document.querySelector("h1").innerText=contra;