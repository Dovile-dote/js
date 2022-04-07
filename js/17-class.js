/*
CLASS: savybiu ir metodu junginys/grupe.
Savybes - kintamieji (info);
Metodai - funkcionalumas

Klases - receptura;
Objektas - pagal receptura pagamintas konkretus/apciuopiamas dalykas;
*/

// function average(list) {
//     let sum = 0;
//     for (const item of list) {
//         sum += item;
//     }
//     return sum / list.length;
// }

// const rez1 = average([10, 2, 8, 4]);
// console.log(rez1);

// const rez2 = average([10, 2, 8, 10, 10, 10, 10, 4]);
// console.log(rez2);



// class Bankomatas {
//     constructor(street, color) {
//         this.gatve = street;
//         this.color = color;
//         this.money = 0;
//         this.turnedOn = false;
//     }

//     switchOn() {
//         this.turnedOn = true;
//     }

//     switchOff() {
//         this.turnedOn = false;
//     }

//     cashIn() {
//         if (this.turnedOn) {
//             console.log('Bandoma inesti pinigus...');
//         } else {
//             console.log('Panasu, jog nera elektros');
//         }
//     }

//     cashOut() {
//         console.log('Bandoma issigryninti pinigus...');
//     }
// }

// const bankomatas1 = new Bankomatas('Didzioji g. 2', 'red');
// const bankomatas2 = new Bankomatas('Mazoji g. 3', 'blue');

// console.log(bankomatas1);
// console.log(bankomatas1.gatve);
// console.log(bankomatas1.color);

// console.log('---------');
// console.log(bankomatas1);
// console.log(bankomatas2);
// bankomatas1.switchOn();
// bankomatas2.switchOn();
// bankomatas1.switchOff();
// bankomatas1.switchOff();

// console.log(bankomatas1);
// console.log(bankomatas1);

// bankomatas1.switchOn();
// bankomatas1.cashIn();

// bankomatas2.switchOn();
// bankomatas2.cashIn();

class Bankomatas {
    constructor(street, color) {
        this.gatve = street;
        this.color = color;
        this.money = 0;
        this.turnedOn = false;
    }

    switchOn() {
        this.turnedOn = true;
        console.log(`${this.gatve}: bankomatas ijungtas`);
    }

    switchOff() {
        this.turnedOn = false;
        console.log(`${this.gatve}: bankomatas isjungtas`);
    }

    // cashIn pinigai sukasi sioje funkcijoje ir apacioj 
    // prisideda prie bankomato pinigu

    cashIn(money) {
        // jei neijungtas - ERROR
        // jei ne normalus skaicius - ERROR
        // skaiciuojam pinigus

        if (!this.turnedOn) {
            console.log(this.gatve, 'Panasu, jog nera elektros...');
            return;
        }

        if (typeof money !== 'number' 
        || !isFinite(money)) {
            console.log(this.gatve, 'Nepanasu i tikra piniga.');
            return;
        }

        if (money <= 0) {
            console.log(this.gatve, 'Minusiniu pinigu neegzistuoja.');
            return;
        }

        this.money += money;
        console.log(`${this.gatve}: inesta ${money} pinigu.`);
    }

    cashOut(money) {
        if (!this.turnedOn) {
            console.log('Panasu, jog nera elektros...');
            return;
        }

        if (typeof money !== 'number' 
        || !isFinite(money)) {
            console.log(`${this.gatve}: Nepanasu i tikra piniga.`);
            return;
        }

        if (money <= 0) {
            console.log(`${this.gatve}: Minusiniu pinigu neegzistuoja.`);
            return;
        }

        if (this.money < money) {
            console.log(`${this.gatve}: bankomate siuo metu nera tokios sumos.`);
            return;
        }

        this.money -= money;
        console.log(`${this.gatve}: isgryninta ${money} pinigu.`);
    }

    status() {
        console.log(`${this.gatve}: siuo metu pinigu likutis yra ${this.money}`);
    }
}

const bankomatas1 = new Bankomatas('Didzioji g. 2', 'red');
const bankomatas2 = new Bankomatas('Mazoji g. 3', 'blue');

bankomatas1.switchOn();
bankomatas2.switchOn();

bankomatas1.cashIn(true);
bankomatas1.cashIn(5);
bankomatas2.cashIn(777);
bankomatas1.cashIn(5);
bankomatas1.cashIn(5);
bankomatas2.cashIn(3)
bankomatas1.cashOut(9);
bankomatas1.cashOut(9);
bankomatas2.cashOut(9);

bankomatas1.status();
bankomatas2.status()
// console.log(bankomatas1.money);
