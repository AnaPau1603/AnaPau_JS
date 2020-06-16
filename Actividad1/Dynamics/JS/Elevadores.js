
  /*variables*/
  var elevadorA = parseInt(prompt("Ingresa el piso A:"));
  var elevadorB = parseInt(prompt("Ingresa el piso B:"));
  var pisoGama = parseInt(prompt("Ingresa el piso en que se encuentra Gama:"));
  var difAGama = 0;
  var difBGama = 0;

  /*se imprimen en consola las variables*/
  console.log("Piso A= " + elevadorA);
  console.log("Piso B= " + elevadorB);
  console.log("Gama= " + pisoGama);

  /*funcion para contarPisos*/
  function contarPisos(elevador, pisoGama){
    if(elevador < pisoGama){
      difXGama = pisoGama - elevador;
    }
    else if (elevador > pisoGama) {
      difXGama = elevador - pisoGama;
    }
    return difXGama;
  }

  /*Se cuentan entre Gama y piso A y Gama y piso B*/
  var difAGama = contarPisos(elevadorA,pisoGama);
  console.log("Entre piso A y Gama hay: " + difAGama);
  var difBGama = contarPisos(elevadorB,pisoGama);
  console.log("Entre piso B y Gama hay: " + difBGama);

  /*ternario que dice qué elevador es más cercaono*/
  var resultado = (difAGama==difBGama)? "Los elevadores están a la misma distancia de Gamita" : //tienen misma distancia
                  (difAGama<difBGama)? "Elevador en piso " + elevadorA + " es el más cercano" : //piso A menor
                  "Elevador en piso " + elevadorB + " es el más cercano"; //en caso de ser piso B menor

  /*se muestra resultado del ternario*/
  alert(resultado);
