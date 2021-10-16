//Ejercicio 1//-------------------------------------------------------------------
let myArray = ['a', 'b', 'a', 'v', 'c','c','c','b','b'];
let count = [];

function uniqueC (array,conteo){
    let repetitions = array.forEach((val,ind,arr) => {
        if(conteo[val]){
         conteo[val] += 1;
        } else {
            conteo[val] = 1;
        }
    }
        );
    return conteo
}
//se llama a la funcion uniqueC
uniqueC(myArray,count)
console.log("Ejercicio 1:")
console.log(myArray);
console.log(count);

//Ejercicio 2//-------------------------------------------------------------------
console.log("Ejercicio 2:")

let myArray2 =[[1, 2],['a', 'e'],[3, 4],['i','o','u'],[5, 6, 7, 8, 9, 10],11,12];

console.log(myArray2);

function flatten(array) {
    let flatmyArray2 = [].concat.apply([], myArray2);
console.log(flatmyArray2)
}
//se invoca la funcion flatten
    flatten(myArray2);
 


//Ejercicio 3//--------------------------------------------------------------
let myArray3 = ['sa','ca','la','pa','ta','ma']
let goal = "casa";
//Se crea la funcion palabraCompuesta
function palabraCompuesta(array, meta){
    let  i=0;
    let palabraComb;
    let result;

    while(i < array.length){

        let palabra = array[i];

        for (let index = 0; index < array.length; index++){

            palabraComb = palabra + array[index];

            if(meta == palabraComb){
                result = "Palabras: " + palabra +","+ array[index] + "  " + "Posiciones: "+ i +","+ index;
                break;
            }          
        }
        i++;
    }
   // console.log("Palabra Meta: " + goal);
    //console.log(myArray3);
  //  console.log(result);
    return(result); //Se devuelve el resultado de la funcion
}
//Se invoca la funcion palabraCompuesta
let resultado = palabraCompuesta(myArray3,goal)
console.log("Ejercicio 3:")
console.log(myArray3,",",goal,resultado);

//Ejercicio 4//--------------------------------------------------------------
console.log("Ejercicio 4:")
function ElevaCuadrado(num) {
    let num2, num3;
    let numstr = num.toString()
    let valor = "";
    for (var i = 0 ; i < numstr.length + 1 ; i++){
    num2 = (parseInt(numstr.substr(i,1)));
    num3 = Math.pow(num2,2);
     if (num3 > 0) {
       // console.log(num3);
        
        valor = valor + num3.toString();
       
    }
  
    }
    console.log(valor);
  }
  
  ElevaCuadrado(342);