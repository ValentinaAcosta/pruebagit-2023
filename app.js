let n1 = 7;
let n2 = 3;
/**/
/**
 * It subtracts the second number from the first number.
 * @param num1 - The first number to subtract.
 * @param num2 - number
 * @returns The result of the subtraction.
 */
function restar(num1, num2) {
    let resultado = num1 - num2;
    console.log(`El resultado de la resta es ${resultado}`);
    return resultado;
}
/**
 * Suma dos números y devuelve el resultado.
 * @param num1 - El primer número a sumar.
 * @param num2 - El segundo número a sumar.
 * @returns El resultado de la suma de los dos números.
 */
function sumar(num1, num2) {
    let resultado = num1 + num2;
    console.log(`El resultado de la suma es ${resultado}`);
    return resultado;
}

restar(n1, n2);
sumar(n1, n2);