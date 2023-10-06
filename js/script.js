const gridDOMElement = document.querySelector('.grid')
console.log(gridDOMElement)
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
//     - verifica il resto dell'operzione

if ((n % 3) === 0 && (n % 5) === 0) {

    n = 'FizzBuzz'

 }else if ((n % 3) === 0) {
    n = 'Fizz'
 }else if ((n % 5) === 0) {
    n = 'Buzz'
 }
 console.log(n)


// - far si che i numeri multipli di 5 compaio la scritta "Buzz""
//     - aggiungere una condizione che dica che se un numero multiplo di 3 da come resto 0 deve comparire la scritta "Buzz"

    const boxString = '<div class="box">' + n + '</div>'
    const boxDOMElement = document.createElement('div')

	boxDOMElement.classList.add('box')
	boxDOMElement.innerHTML = n
	gridDOMElement.append(boxDOMElement)
	


}













