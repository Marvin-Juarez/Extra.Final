//noprotect
let cantidad_inicial = 120000;

// Es un mensaje que da la bienvenida al usuario y si desea continuar o salir.
let pregunta = prompt("Bienvenido a la empresa de seguros TK-U, ¿Usted desea continuar o quiere salir?.").toLowerCase().trim();
// Un ciclo por si no ingrsa la palabra continuar o salir.
while (pregunta !== "continuar" && pregunta !== "salir"){
    alert("Error. Coloque continuar o salir");
    pregunta = prompt("Bienvenido a la empresa de seguros TK-U, ¿Usted desea continuar o quiere salir?.").toLowerCase().trim();
}
// Una condición si el cliente ingresa la palabra salir y le muestra un mensaje.
if (pregunta === "salir"){
    alert("Vuelva cuando quiera.")
}
/* Un ciclo que se va repetir las cotizaciones hasta cuando la persona escrbia la palabra salir.
Le pregunta el nombre y la edad, en la edad si se excese a 110 o menor a 1 le va a marcar un error
y le va a repetir la pregunta hasta que ponga una edad valida.             */
while (pregunta === "continuar"){
    let nombre = prompt("Por favor digite su nombre:");
    let edad = Number(prompt("Digite su edad:").trim());
    while (edad < 1 || edad > 110){
        alert("Error. Coloque una edad valida.");
        edad = prompt("Digite su edad:").trim();
    }
// Otro ciclo por si la persona incresa un edad menor a 18.
    while (edad < 18){
        alert("Usted no puede ser menor de edad.");
        edad = prompt("Digite su edad:").trim();
    } 
/* Le pregunta la persona de cuanto es el salario y esta dentro de un ciclo por si el salario
es menor a 0 o es mayor 10 mil.     */
    let salario = Number(prompt("¿Cuanto es su salario?").trim());
    while (salario < 0 || salario > 10000){
        alert("Error. Salario no valido");
        salario = Number(prompt("¿Cuanto es su salario?").trim());
    }
/* Le pregunta cuantas casas tiene, si no coloca una cantidad del 0 al 5 le va a repetir un mensaje
que tiene que colocar un número del 0 al 5.                                    */
    let inmueble = Number(prompt("Cuantas casas tienes:"));
    while (inmueble < 0 || inmueble > 5){
        inmueble = Number(prompt("Por favor. Del 1 al 5 cuantas casas tienes y si no tienes coloca 0."));
    }
/* Ya ingresado el salario y la cantidad de casas se hara una operación, del salario sera un 5% y por
por cada casa se incrementara un 35%.  
// Al final saltra un mensaje.                                        */
    resultado_salario = salario * 5/100;
    alert ("Hola " + nombre + ", tu salario es Q." + salario + ".00");
    alert ("Y el recargo extra sería de Q." + resultado_salario + ".00");

    resultado_casa = 35 * inmueble;
    resultado_inmueble = cantidad_inicial * resultado_casa/100;
    if (inmueble === 0){
        alert ("\tCracias.")
    }
    else if (inmueble >= 1 || inmueble <= 5){
        alert("El precio de la casa es de Q." + cantidad_inicial + ".00");
        alert("Y el precio de interes de la casa sería de Q." + resultado_inmueble);
        alert ("\tGracias.")
    }
//Le da la bienvenida y le pregunta si quiere continuar o salir
    pregunta = prompt("Bienvenido a la empresa de seguros TK-U, ¿Usted desea continuar o quiere salir?.").toLowerCase().trim();
    while (pregunta !== "continuar" && pregunta !== "salir"){
        alert("Error. Coloque continuar o salir");
        pregunta = prompt("¿Quiere continuar o queire salir?").toLowerCase().trim();
    }
// Una condición si la persona ingresa la palabra salir.
    if (pregunta === "salir"){
        alert("\tGracias por confiar en nosotros.");
        break;
    }  
}
