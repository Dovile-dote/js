/*
KINTAMIEJI:

Iniciavimio budas:
const - default inicijavimo reiksme
let - antrinis budas inicijuoti, kai zinome, jog reiksme gali keistis
var - pats seniausiais ir geriau niekada nenaudoti, jei rupi saugumas

Duomenu tipas:
- number
- string (tekstas)
- boolean (logine reiksme: true | false)
- array (masyvas, sarasas, matrica*)
*/ 

const luckyNumber = 777;
console.log(123);
console.log('Lucky number:', luckyNumber);

let pinigine = 0;
console.log('Pinigine:', pinigine);

pinigine = 5;
console.log('Pinigine:', pinigine);

pinigine = 10;
console.log('Pinigine:', pinigine);

const vardas = 'Petras';
console.log(vardas);
console.log('Laba diena, ' + vardas + '.');
// console.log('Laba diena, Maryte.');
const pasisveikinimas = 'Laba diena, ' + vardas + '!';
console.log(pasisveikinimas);

// nieko = 'nieko';
// console.log(nieko);
// sitoj vietoj skaito kaip var

const arVedes = true;
const arTuriVaiku = false;
const arMeluojaDelVaiku = true;

console.log('Ar vedes?', arVedes);
console.log('Turi vaiku?', arTuriVaiku);
console.log('Ar meluoja?', arMeluojaDelVaiku);

console.log(2 + 2 * 2);
console.log('2 + 2 * 2');

console.log(true, false);
console.log('true', 'false');

const pazymiai = [10, 2, 8, 4, 6];
console.log('Pazymiai:', pazymiai);

const studentai = ['Jonas', 'Petras', 'Antanas', 'Egle', 'Jurga'];
console.log('Studentai:', studentai);

const jovalas = ['Vilnius', 16, 'karve', true, [], 8];