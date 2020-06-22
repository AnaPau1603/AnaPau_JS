/*Dimenciones del arreglo*/
var largo = parseInt(prompt("Introdusca un largo:"));
var ancho = parseInt(prompt("Introdusca un ancho:"));
var largoFibonacci = largo*ancho;
var pseudoAncho = ancho;//copia del ancho
/*Variables para sucesión Fibonacci*/
var numero = 0;
var inicial = 0;
var siguiente = 1;
/*Arreglos para extraccion de secciones*/
var fibonacci = new Array();
var anchos = new Array();
var largos = new Array();
var ultimos = new Array();
var cajitaFibonacci = new Array(largo);//arreglo caracol

for (var i = 0; i < cajitaFibonacci.length; i++) {
  cajitaFibonacci[i] = new Array(ancho); //Generando Matriz
}

/*Creando arreglo Fibonacci*/
for(let i=0;i<largoFibonacci;i++){
  inicial = siguiente;
  siguiente = numero;
  fila1[i] = numero;
  numero = inicial+siguiente;
}

/*Extracción de secciones*/
for(let i=1;fila1.length>ancho*2;i++){
  pseudoAncho-i;
  largo-i;
  largos[i] = fila1.splice(ancho,largo-i);
  anchos[i] = fila1.splice(ancho,pseudoAncho-i);
}
for(let i=0;fila1.length>ancho;i++){//se extrae la última
  ultimos.unshift(fila1.pop());
}

/*primera fila del caracol*/
for(let i=0;i<ancho;i++){
  cajitaFibonacci[0][i] = fila1[i];
}

for(let i=0;i<largos[1].length;i++){
  cajitaFibonacci[i+1][0] = largos[1][i];
}

for(let i=0;i<)


/*Imprimiendo progreso*/
console.log(fila1 + '\n');
for(valor of largos){
  console.log(valor);
}
console.log('\n');

for(valor of anchos){
  console.log(valor);
}
console.log('\n');

console.log(ultimos + '\n');

for(valor of cajitaFibonacci){
  console.log(valor);
}
