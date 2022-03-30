/*
    STRING

    kabutes:
    - viengubos(')
    - dvigubos(")
    - backtick'as (`)

Teksto simboliu kiekis: .lenght
*/

const name = 'Petras';
console.log(name);

const lastname = "Petraitis";
console.log(lastname);

const viengubaKabute = "viengubos (')";
console.log(viengubaKabute);

const dvigubaKabute = 'dvigubos (")';
console.log(dvigubaKabute);

const kabutes12 = 'Cia yra vienguba (\') ir dviguba (") kabutes.';
console.log(kabutes12);

const clientName = 'Maryte';
const clientAge = '87';

const clientSentence = 'Client ' + clientName + ' is ' + clientAge + ' years old.';
console.log(clientSentence);

const backtickClient = `Client ${clientName} is ${clientAge} years old.`;
console.log(backtickClient);

const n1 = 7;
const n2 = 5;
const ats = `${n1} + ${n2} = ${n1 + n2}`;
console.log(ats);

const abc = 'abcdef';
const abcDydis = abc.length;
console.log(`Abecele "${abc}" dydis yra ${abcDydis} simboliu.`);
