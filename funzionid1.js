/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function crazySum(num1, num2) {
    let somma = num1 + num2;
    if (num1 === num2) {
    return somma * 3;
    } else {
    return somma;
}
}
console.log(crazySum(10,20));
console.log(crazySum(9,15));
let sommaCrazy = crazySum(8, 7);
console.log(sommaCrazy);


/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function boundary(a) {
if ((a >= 20 && a <= 100 )|| a == 400) {
    return true
} else {
    return false
}
}
//return (a >= 20 && a <= 100 )|| a == 400 // stesso modo per avere lo stesso risultato. è un abbreviazione solo è come risultato da un booleano
console.log(boundary(5));



/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function reverseString(string) {
    let stringReverse = '';
    for (let i = string.length -1; i >= 0; i--) {
        stringReverse = stringReverse + string[i]
    }
    return stringReverse
}
console.log(reverseString('ENRICO'))


/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function upperFirst(string) {
let words = string.split(' ');
for (let i = 0; i < words.length; i++) {
    let currentWord = words[i];
    currentWord = currentWord.charAt(0).toUpperCase() + currentWord.slice(1);
    words[i] = currentWord;
}
return words.join(' ')
}
console.log(upperFirst('ciao sono virgola e sono un gattino'))

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function giveMeRandom(n) {
    let arr = [];
        for(let i = 0; i < n; i++) {
            let randomNumber = Math.floor(Math.random() * 11);
            if (arr.includes(randomNumber)) { // se metto il while al posto del if nella stampa darà i numeri a random senza doppioni, con il if mi darà anche. dei doppioni. 
                randomNumber = Math.floor(Math.random() * 11);
            }
            arr[i] = randomNumber;
        }
        return arr
}
console.log(giveMeRandom(10));

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function area(l1, l2) {
return l1 * l2;
}
console.log(area(5,3));

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazyDiff(n) {
    let differenza = Math.abs(n - 19);
    if (differenza > 19) {
        return differenza * 3;
    } else { 
        return differenza
    }
}
console.log(crazyDiff(10));
console.log(crazyDiff(30));

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function codify(string) {
if (string.startsWith('code')) {
    return string
} else {
    return 'code' + string;
}
}
console.log(codify('more'));

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function check3and7(c) {
if (c % 3 === 0 || c % 7 === 0) {
    return true;
} else {
    return false;
}
}
console.log(check3and7(15));
console.log(check3and7(4));

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function cutString(string) {
return string.slice(1, -1)
}
console.log(cutString('JavaScript')),
console.log(cutString('vacanza'))