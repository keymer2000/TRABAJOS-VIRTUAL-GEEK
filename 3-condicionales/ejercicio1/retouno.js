        
        const url = 'http://placehold.it/300x300';
        var kajj = 'http://www.fillmurray.com/300/300';

        document.querySelector("#cont").innerHTML = `
        <img src="${kajj||url}" alt="texto de imagen" onerror="this.src='http://placehold.it/300x300';" />`;
        