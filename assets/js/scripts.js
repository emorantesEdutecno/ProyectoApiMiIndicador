function consumoApi(){

    // consumir el endpoint con fetch
    fetch('https://mindicador.cl/api')
    // fetch('../api/pokemones.txt')
    // recibir la respuesta de la api y convertirla a formato JSON manipulable por JS
    .then(response => response.json())
    // recibe los datos transformados a notación JSON para ser manipulados con la sintaxis datos.propiedad
    .then(data => {
        
        console.log('La pokeapi respondió');
        console.log(data);

        // sacamos de los datos la propiedad dolar_intercambio
        let nombreDolar = data.dolar_intercambio.nombre;
        console.log(nombreDolar);
        let fechaDolar = data.dolar_intercambio.fecha;
        let valorDolar = data.dolar_intercambio.valor;

        let arregloDatos = [nombreDolar, fechaDolar, valorDolar];


        console.log(arregloDatos);



            // manipulamos el DOM para poder enviar los datos del dolar
            let parrafosDatos = document.getElementsByClassName('contenedorCard__parrafo');

            for(let i=0; i<parrafosDatos.length; i++){
                parrafosDatos[i].innerHTML = arregloDatos[i];
            }
            
    })
    .catch(error => console.log('No se pudo resolver la promesa.' , error));
}
