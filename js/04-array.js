/*
ARRAY
- pozicijos prasideda nuliu
- pozicijos tik sveikieji skaiciai
*/

const pazymiai = [10, 2, 8, 4, 6];
console.log('Pazymiai:', pazymiai);

// koks pirmas
// koks paskutinis
// pazymiu vidurkis
// pazymiu kiekis

console.log('Pirmas:', pazymiai[0]);

const pazymiuKiekis = pazymiai.length;
const paskutinioPozicija = pazymiuKiekis - 1;


console.log('Paskutinis:', pazymiai[paskutinioPozicija]);
console.log('Paskutinis:', pazymiai[pazymiuKiekis -1]);

const studentai = ['Petras', 'Maryte', 'Jonas', 'Ona', 'Gertruda', 'Aloyzas'];
console.log(studentai);

let index = 0;
console.log(`Cia yra : ${studentai[index++]}`);
console.log(`Cia yra : ${studentai[index++]}`);
console.log(`Cia yra : ${studentai[index++]}`);
console.log(`Cia yra : ${studentai[index++]}`);
console.log(`Cia yra : ${studentai[index++]}`);
console.log(`Cia yra : ${studentai[index++]}`);