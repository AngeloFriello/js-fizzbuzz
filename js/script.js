
// - far comparire in console i numeri da 1 a 100
//     - dichiarare un ciclo
//         - digliarare un "indice" di partenza
for (let i = 0;
//         - verificare la condizione
     i < 100;
//         - dichiarare un instruzione di incremento
      i++) {
    let n = i + 1
// - far si che i numeri multipli di 3 compaio la scritta "Fizz"
//     - dichiarare una variabile che divida tutti i numeri per 3
//     - dichiarare una variabile che divida tutti i numeri per 5
    const resto3 = n % 3
    const resto5 = n % 5
    const resto15 = (n % 3 || n % 5)
//     - verifica il resto dell'operzione
if (resto3 === 0) {
//     - aggiungere una condizione che dica che se un numero multiplo di 3 da come resto 0 deve comparire la scritta "Fizz" 
    let resto3 = 'Fizz'
    console.log(n, resto3)
 }
// - far si che i numeri multipli di 5 compaio la scritta "Buzz""
//     - aggiungere una condizione che dica che se un numero multiplo di 3 da come resto 0 deve comparire la scritta "Buzz"
if (resto5 === 0) {

    let resto5 = 'Buzz'
    console.log(n, resto5)
}
// - far si che i numeri multipli di 3 e di 5 compaio la scritta "FizzBuzz"
if (resto15 === 0 ) {
    let resto15 = 'FizzBuzz'
    console.log(n, resto15)
}
}